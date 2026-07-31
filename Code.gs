/** King Tech Subscription Manager shared spreadsheet API.
 * Paste this file into Extensions > Apps Script for the LIVE spreadsheet.
 * Deploy as Web app: Execute as Me; Who has access: Anyone.
 */
const SPREADSHEET_ID = "1-SFws64HGIkEvK3vZCmNekilftCtpy4WdE6AKSDdKWU";
const SHEETS = {customers:"Customers",accounts:"Subscription Accounts",payments:"Customer Payments",expenses:"Expenses",reminders:"Reminder History",activity:"Activity Log",migration:"Migration Log"};

function doGet(){return json_({ok:true,service:"King Tech Subscription Manager API",version:"2.0"})}
function doPost(e){
  try{
    const body=JSON.parse((e.postData&&e.postData.contents)||"{}");
    if(body.action==="ping") return json_({ok:true,version:"2.0",spreadsheetId:SPREADSHEET_ID});
    if(body.action==="getSnapshot") return json_({ok:true,data:readSnapshot_(),hash:String(Date.now())});
    if(body.action==="saveSnapshot"){writeSnapshot_(body.data||{},false);return json_({ok:true,hash:String(Date.now())})}
    if(body.action==="migrate"){writeSnapshot_(body.data||{},true);return json_({ok:true,migrated:true,hash:String(Date.now())})}
    throw new Error("Unknown action");
  }catch(err){return json_({ok:false,error:String(err&&err.message||err)})}
}
function json_(obj){return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)}
function ss_(){return SpreadsheetApp.openById(SPREADSHEET_ID)}
function rowsToObjects_(sheetName){const sh=ss_().getSheetByName(sheetName);if(!sh||sh.getLastRow()<2)return[];const values=sh.getDataRange().getValues();const h=values.shift().map(String);return values.filter(r=>r.some(v=>v!=="" )).map(r=>Object.fromEntries(h.map((k,i)=>[k,parse_(r[i])]))).filter(o=>!o.deleted)}
function parse_(v){if(typeof v!=="string")return v;if(v==="true")return true;if(v==="false")return false;if(/^[-]?\d+(\.\d+)?$/.test(v)&&v.length<16)return Number(v);if((v.startsWith("{")&&v.endsWith("}"))||(v.startsWith("[")&&v.endsWith("]"))){try{return JSON.parse(v)}catch(_){}}return v}
function writeObjects_(sheetName,objects){const sh=ss_().getSheetByName(sheetName);const headers=sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0].filter(String);sh.getRange(2,1,Math.max(1,sh.getMaxRows()-1),sh.getMaxColumns()).clearContent();if(!objects||!objects.length)return;const rows=objects.map(o=>headers.map(h=>{const v=o[h];return typeof v==="object"&&v!==null?JSON.stringify(v):(v??"")}));sh.getRange(2,1,rows.length,headers.length).setValues(rows)}
function readSnapshot_(){const reminders=rowsToObjects_(SHEETS.reminders);const reminderLog={};reminders.forEach(r=>{if(r.key||r.id)reminderLog[r.key||r.id]=r.sentAt||""});return{customers:rowsToObjects_(SHEETS.customers),accounts:rowsToObjects_(SHEETS.accounts),payments:rowsToObjects_(SHEETS.payments),expenses:rowsToObjects_(SHEETS.expenses),reminderLog,updatedAt:new Date().toISOString()}}
function normalize_(arr,agent){return (arr||[]).map(x=>Object.assign({},x,{updatedAt:new Date().toISOString(),updatedBy:x.updatedBy||agent||"Agent",version:Number(x.version||0)+1,deleted:false}))}
function writeSnapshot_(data,isMigration){const lock=LockService.getScriptLock();lock.waitLock(30000);try{const agent=data.agent||"Agent";writeObjects_(SHEETS.customers,normalize_(data.customers,agent));writeObjects_(SHEETS.accounts,normalize_(data.accounts,agent));writeObjects_(SHEETS.payments,data.payments||[]);writeObjects_(SHEETS.expenses,data.expenses||[]);writeObjects_(SHEETS.reminders,(data.reminderHistory||[]).map(r=>Object.assign({},r,{agent})));const act=ss_().getSheetByName(SHEETS.activity);act.appendRow([Date.now(),new Date(),agent,data.deviceId||"",isMigration?"MIGRATE":"SYNC","snapshot","all",`${(data.customers||[]).length} customers; ${(data.accounts||[]).length} accounts`,"",""]);if(isMigration)ss_().getSheetByName(SHEETS.migration).appendRow([Date.now(),new Date(),new Date(),data.deviceId||"",agent,(data.customers||[]).length,(data.accounts||[]).length,(data.payments||[]).length,(data.expenses||[]).length,"Completed","Initial local-device migration"]);}finally{lock.releaseLock()}}
