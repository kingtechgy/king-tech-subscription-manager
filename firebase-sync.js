import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, collection, doc, getDocs, onSnapshot, writeBatch, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDr-ubRx8eW-Asv_FPjuZFjHmjyH-ZhPvY",
  authDomain: "king-tech-subscription-manager.firebaseapp.com",
  projectId: "king-tech-subscription-manager",
  storageBucket: "king-tech-subscription-manager.firebasestorage.app",
  messagingSenderId: "597395846650",
  appId: "1:597395846650:web:4a98014d91482101822043",
  measurementId: "G-DYXTZ4416J"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=initializeFirestore(app,{localCache:persistentLocalCache({tabManager:persistentMultipleTabManager()})});
const root=["businesses","king-tech"];
const groups={customers:"customers",accounts:"accounts",payments:"payments",expenses:"expenses",deletedAccounts:"deletedAccounts",providerPayments:"providerPayments",reminderHistory:"reminderHistory"};
const remote=Object.fromEntries(Object.keys(groups).map(key=>[key,new Map()]));
const loaded=new Set();
let listenersStarted=false;
let suppressApply=false;

const authScreen=document.getElementById("authScreen");
const loginForm=document.getElementById("firebaseLoginForm");
const loginButton=document.getElementById("firebaseLoginButton");
const loginError=document.getElementById("firebaseLoginError");
const userEmail=document.getElementById("firebaseUserEmail");
const signOutButton=document.getElementById("firebaseSignOutButton");

window.kingTechFirebase={ready:false,save:saveSnapshot,replace:data=>saveSnapshot(data,true)};

function cleanRecord(record){
  const copy={...record};delete copy._syncUpdatedAt;return copy;
}
function mapValues(key){return [...remote[key].values()].map(cleanRecord)}
function combinedSnapshot(){
  const reminderLog={};
  mapValues("reminderHistory").forEach(row=>{if(row.key||row.id)reminderLog[row.key||row.id]=row.sentAt||""});
  return {customers:mapValues("customers"),accounts:mapValues("accounts"),payments:mapValues("payments"),expenses:mapValues("expenses"),deletedAccounts:mapValues("deletedAccounts"),providerPayments:mapValues("providerPayments"),reminderLog};
}
function totalRemoteRecords(){return Object.values(remote).reduce((sum,map)=>sum+map.size,0)}
function setStatus(message,live=true){
  const text=document.getElementById("syncStatusText"),badge=document.getElementById("syncStatusBadge");
  if(text)text.textContent=message;
  if(badge){badge.textContent=live?"Live":"Offline";badge.className="badge "+(live?"active":"due-soon")}
}
function applyRemote(){
  if(suppressApply||loaded.size!==Object.keys(groups).length)return;
  if(totalRemoteRecords()===0){setStatus("Firebase is empty — import the verified backup once",true);return}
  window.applyFirebaseSnapshot?.(combinedSnapshot());
}
function startListeners(){
  if(listenersStarted)return;listenersStarted=true;
  Object.entries(groups).forEach(([key,name])=>{
    onSnapshot(collection(db,...root,name),snapshot=>{
      remote[key]=new Map(snapshot.docs.map(item=>[item.id,{id:item.id,...item.data()}]));
      loaded.add(key);applyRemote();
    },error=>{console.error("Firebase listener failed",key,error);setStatus("Firebase access failed — check Firestore rules",false)});
  });
}
function recordId(row,index){return String(row?.id??row?.key??`${Date.now()}-${index}`)}
function desiredGroups(data){
  return {
    customers:data.customers||[],accounts:data.accounts||[],payments:data.payments||[],expenses:data.expenses||[],deletedAccounts:data.deletedAccounts||[],providerPayments:data.providerPayments||[],reminderHistory:data.reminderHistory||[]
  };
}
function comparable(value){const copy=cleanRecord(value);return JSON.stringify(copy,Object.keys(copy).sort())}
async function saveSnapshot(data,replaceAll=false){
  if(!auth.currentUser)throw new Error("Not signed in");
  suppressApply=true;setStatus(replaceAll?"Uploading verified backup…":"Saving changes…",true);
  try{
    const desired=desiredGroups(data);let operations=[];
    for(const [key,name] of Object.entries(groups)){
      if(!loaded.has(key)){
        const existing=await getDocs(collection(db,...root,name));
        remote[key]=new Map(existing.docs.map(item=>[item.id,{id:item.id,...item.data()}]));loaded.add(key);
      }
      const wanted=new Map((desired[key]||[]).map((row,index)=>[recordId(row,index),{...row,id:recordId(row,index)}]));
      for(const [id,row] of wanted){
        const current=remote[key].get(id);
        if(replaceAll||!current||comparable(current)!==comparable(row))operations.push({type:"set",ref:doc(db,...root,name,id),data:{...row,_syncUpdatedAt:serverTimestamp()}});
      }
      for(const id of remote[key].keys())if(!wanted.has(id))operations.push({type:"delete",ref:doc(db,...root,name,id)});
    }
    while(operations.length){
      const batch=writeBatch(db);operations.splice(0,400).forEach(op=>op.type==="set"?batch.set(op.ref,op.data):batch.delete(op.ref));await batch.commit();
    }
    setStatus(`Live — ${(data.customers||[]).length} customers synced`,true);
  }finally{suppressApply=false}
}

loginForm?.addEventListener("submit",async event=>{
  event.preventDefault();loginError.textContent="";loginButton.disabled=true;loginButton.textContent="Signing in…";
  const form=new FormData(loginForm);
  try{await setPersistence(auth,browserLocalPersistence);await signInWithEmailAndPassword(auth,String(form.get("email")||"").trim(),String(form.get("password")||""))}
  catch(error){console.error(error);loginError.textContent="Sign-in failed. Check the email and password."}
  finally{loginButton.disabled=false;loginButton.textContent="Sign In"}
});
signOutButton?.addEventListener("click",()=>signOut(auth));
onAuthStateChanged(auth,user=>{
  window.kingTechFirebase.ready=!!user;
  if(user){authScreen.style.display="none";if(userEmail)userEmail.textContent=user.email||"Administrator";setStatus("Connecting securely to Firebase…",true);startListeners()}
  else{authScreen.style.display="flex";if(userEmail)userEmail.textContent="Not signed in";setStatus("Sign in required",false)}
});
