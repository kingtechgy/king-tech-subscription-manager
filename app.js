

const APP_DATA_VERSION = "shared-sync-v2.7";
// Never clear existing records during an update. Keep a one-time safety copy first.
if(!localStorage.getItem("kt_pre_v2_backup")){
  const safety={
    customers:JSON.parse(localStorage.getItem("kt_customers")||"[]"),
    accounts:JSON.parse(localStorage.getItem("kt_accounts")||"[]"),
    expenses:JSON.parse(localStorage.getItem("kt_expenses")||"[]"),
    payments:JSON.parse(localStorage.getItem("kt_payments")||"[]"),
    bulkReminderLog:JSON.parse(localStorage.getItem("kt_bulk_reminders")||"{}"),
    createdAt:new Date().toISOString(), version:localStorage.getItem("kt_data_version")||"legacy"
  };
  localStorage.setItem("kt_pre_v2_backup",JSON.stringify(safety));
}
localStorage.setItem("kt_data_version", APP_DATA_VERSION);

const initialCustomers = [{"id":1761000000001,"billNumber":"5001","referenceNumber":"82","name":"Alicia Nieuenkirk","phone":"","email":"kingtechnetflix82@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Alicia Nieuenkirk","account":""},{"id":1761000000002,"billNumber":"5002","referenceNumber":"21","name":"Bibi Ali","phone":"","email":"kingtechnetflix21@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Bibi Ali","account":""},{"id":1761000000003,"billNumber":"5003","referenceNumber":"18","name":"Eswarie Fredericks","phone":"","email":"kingtechnetflix18@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Eswarie Fredericks","account":""},{"id":1761000000004,"billNumber":"5004","referenceNumber":"28","name":"6834236","phone":"","email":"kingtechnetflix28@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"6834236","account":""},{"id":1761000000005,"billNumber":"5005","referenceNumber":"153","name":"Abiola Walls","phone":"","email":"kingtechnetflix153@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Abiola Walls","account":""},{"id":1761000000006,"billNumber":"5006","referenceNumber":"182","name":"Lolita Bryan","phone":"","email":"kingtechnetflix182@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Lolita Bryan","account":""},{"id":1761000000007,"billNumber":"5007","referenceNumber":"186","name":"Adesh Boodram","phone":"","email":"kingtechnetflix186@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-07","expiry":"","status":"Active","profile":"Adesh Boodram","account":""},{"id":1761000000008,"billNumber":"5008","referenceNumber":"38","name":"Akeela Desantos","phone":"","email":"kingtechnetflix38@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Akeela Desantos","account":""},{"id":1761000000009,"billNumber":"5009","referenceNumber":"57","name":"Alaine Melville","phone":"","email":"kingtechnetflix57@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Alaine Melville","account":""},{"id":1761000000010,"billNumber":"5010","referenceNumber":"156","name":"Alejandra Futrille","phone":"","email":"kingtechnetflix156@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Alejandra Futrille","account":""},{"id":1761000000011,"billNumber":"5011","referenceNumber":"68","name":"Alex","phone":"","email":"kingtechnetflix68@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Alex","account":""},{"id":1761000000012,"billNumber":"5012","referenceNumber":"9","name":"Alex Perrie","phone":"","email":"kingtechnetflix9@gmail.com","service":"Prime Video","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Alex Perrie","account":""},{"id":1761000000013,"billNumber":"5013","referenceNumber":"178","name":"Alex Pierre","phone":"","email":"kingtechnetflix178@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Alex Pierre","account":""},{"id":1761000000014,"billNumber":"5014","referenceNumber":"226","name":"Alex Wong","phone":"","email":"kingtechnetflix226@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-16","expiry":"","status":"Active","profile":"Alex Wong","account":""},{"id":1761000000015,"billNumber":"5015","referenceNumber":"42","name":"Alicia Mentore","phone":"","email":"kingtechnetflix42@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Alicia Mentore","account":""},{"id":1761000000016,"billNumber":"5016","referenceNumber":"43","name":"Alicia Nieuenkirk","phone":"","email":"kingtechnetflix43@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Alicia Nieuenkirk","account":""},{"id":1761000000017,"billNumber":"5017","referenceNumber":"134","name":"Alina Odell","phone":"","email":"kingtechnetflix134@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-31","expiry":"","status":"Active","profile":"Alina Odell","account":""},{"id":1761000000018,"billNumber":"5018","referenceNumber":"137","name":"Alisia Welcome","phone":"","email":"kingtechnetflix137@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Alisia Welcome","account":""},{"id":1761000000019,"billNumber":"5019","referenceNumber":"35","name":"Alston Campbell","phone":"","email":"kingtechnetflix35@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-07","expiry":"","status":"Active","profile":"Alston Campbell","account":""},{"id":1761000000020,"billNumber":"5020","referenceNumber":"123","name":"Alton Brown","phone":"","email":"kingtechnetflix123@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Alton Brown","account":""},{"id":1761000000021,"billNumber":"5021","referenceNumber":"9","name":"Alvin Charles","phone":"","email":"kingtechnetflix9@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-25","expiry":"","status":"Active","profile":"Alvin Charles","account":""},{"id":1761000000022,"billNumber":"5022","referenceNumber":"176","name":"Alvin Khan","phone":"","email":"kingtechnetflix176@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-25","expiry":"","status":"Active","profile":"Alvin Khan","account":""},{"id":1761000000023,"billNumber":"5023","referenceNumber":"37","name":"Alvin Patoir","phone":"","email":"kingtechnetflix37@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Alvin Patoir","account":""},{"id":1761000000024,"billNumber":"5024","referenceNumber":"160","name":"Alyssa Bandoo","phone":"","email":"kingtechnetflix160@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Alyssa Bandoo","account":""},{"id":1761000000025,"billNumber":"5025","referenceNumber":"112","name":"Amanda Winter","phone":"","email":"kingtechnetflix112@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Amanda Winter","account":""},{"id":1761000000026,"billNumber":"5026","referenceNumber":"199","name":"Amiesha Persaud","phone":"","email":"kingtechnetflix199@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-12","expiry":"","status":"Active","profile":"Amiesha Persaud","account":""},{"id":1761000000027,"billNumber":"5027","referenceNumber":"13","name":"Amiesha Persaud","phone":"","email":"kingtechnetflix13@gmail.com","service":"Disney+","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Amiesha Persaud","account":""},{"id":1761000000028,"billNumber":"5028","referenceNumber":"184","name":"Andre Croft","phone":"","email":"kingtechnetflix184@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Andre Croft","account":""},{"id":1761000000029,"billNumber":"5029","referenceNumber":"102","name":"Aneeka Hercules","phone":"","email":"kingtechnetflix102@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Aneeka Hercules","account":""},{"id":1761000000030,"billNumber":"5030","referenceNumber":"99","name":"Angelina Thomas","phone":"","email":"kingtechnetflix99@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-24","expiry":"","status":"Active","profile":"Angelina Thomas","account":""},{"id":1761000000031,"billNumber":"5031","referenceNumber":"15","name":"Annalisa James","phone":"","email":"kingtechnetflix15@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Annalisa James","account":""},{"id":1761000000032,"billNumber":"5032","referenceNumber":"8","name":"Ariana Khan","phone":"","email":"kingtechnetflix8@gmail.com","service":"Netflix","plan":"Legacy Premium","amount":4000,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Ariana Khan","account":""},{"id":1761000000033,"billNumber":"5033","referenceNumber":"79","name":"Arianna Ramcharitar","phone":"","email":"kingtechnetflix79@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Arianna Ramcharitar","account":""},{"id":1761000000034,"billNumber":"5034","referenceNumber":"44","name":"Arita Chesney","phone":"","email":"kingtechnetflix44@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-16","expiry":"","status":"Active","profile":"Arita Chesney","account":""},{"id":1761000000035,"billNumber":"5035","referenceNumber":"141","name":"Arune Singh","phone":"","email":"kingtechnetflix141@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Arune Singh","account":""},{"id":1761000000036,"billNumber":"5036","referenceNumber":"64","name":"Ashley Howard","phone":"","email":"kingtechnetflix64@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Ashley Howard","account":""},{"id":1761000000037,"billNumber":"5037","referenceNumber":"142","name":"Asia Higgins","phone":"","email":"kingtechnetflix142@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Asia Higgins","account":""},{"id":1761000000038,"billNumber":"5038","referenceNumber":"170","name":"Athaita Kumar","phone":"","email":"kingtechnetflix170@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Athaita Kumar","account":""},{"id":1761000000039,"billNumber":"5039","referenceNumber":"191","name":"Beverley Nedd-Rowland","phone":"","email":"kingtechnetflix191@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-10","expiry":"","status":"Active","profile":"Beverley Nedd-Rowland","account":""},{"id":1761000000040,"billNumber":"5040","referenceNumber":"75","name":"Bibi Khan","phone":"","email":"kingtechnetflix75@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Bibi Khan","account":""},{"id":1761000000041,"billNumber":"5041","referenceNumber":"60","name":"Bibi Rahman","phone":"","email":"kingtechnetflix60@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Bibi Rahman","account":""},{"id":1761000000042,"billNumber":"5042","referenceNumber":"74","name":"Brian Harris","phone":"","email":"kingtechnetflix74@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-18","expiry":"","status":"Active","profile":"Brian Harris","account":""},{"id":1761000000043,"billNumber":"5043","referenceNumber":"210","name":"Calvern Haywood","phone":"","email":"kingtechnetflix210@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Calvern Haywood","account":""},{"id":1761000000044,"billNumber":"5044","referenceNumber":"77","name":"Carla","phone":"","email":"kingtechnetflix77@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Carla","account":""},{"id":1761000000045,"billNumber":"5045","referenceNumber":"34","name":"Caroletta Singh","phone":"","email":"kingtechnetflix34@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Caroletta Singh","account":""},{"id":1761000000046,"billNumber":"5046","referenceNumber":"207","name":"Caylan D'Oliveira","phone":"","email":"kingtechnetflix207@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Caylan D'Oliveira","account":""},{"id":1761000000047,"billNumber":"5047","referenceNumber":"27","name":"Chaitram Samlall","phone":"","email":"kingtechnetflix27@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-07-31","expiry":"","status":"Active","profile":"Chaitram Samlall","account":""},{"id":1761000000048,"billNumber":"5048","referenceNumber":"17","name":"Charlene Wilkinson","phone":"","email":"kingtechnetflix17@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Charlene Wilkinson","account":""},{"id":1761000000049,"billNumber":"5049","referenceNumber":"125","name":"Christina Paul","phone":"","email":"kingtechnetflix125@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Christina Paul","account":""},{"id":1761000000050,"billNumber":"5050","referenceNumber":"","name":"Cleve Leung","phone":"","email":"","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-25","expiry":"","status":"Active","profile":"Cleve Leung","account":""},{"id":1761000000051,"billNumber":"5051","referenceNumber":"69","name":"David Bascom","phone":"","email":"kingtechnetflix69@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"David Bascom","account":""},{"id":1761000000052,"billNumber":"5052","referenceNumber":"96","name":"Deven","phone":"","email":"kingtechnetflix96@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-03","expiry":"","status":"Active","profile":"Deven","account":""},{"id":1761000000053,"billNumber":"5053","referenceNumber":"197","name":"Devi Balgobin","phone":"","email":"kingtechnetflix197@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Devi Balgobin","account":""},{"id":1761000000054,"billNumber":"5054","referenceNumber":"","name":"Devish Samaroo","phone":"","email":"","service":"Netflix","plan":"Legacy Premium","amount":4000,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Devish Samaroo","account":""},{"id":1761000000055,"billNumber":"5055","referenceNumber":"3","name":"Dianne Benjamin","phone":"","email":"kingtechnetflix3@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Dianne Benjamin","account":""},{"id":1761000000056,"billNumber":"5056","referenceNumber":"230","name":"Dianne Houston","phone":"","email":"kingtechnetflix230@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-27","expiry":"","status":"Active","profile":"Dianne Houston","account":""},{"id":1761000000057,"billNumber":"5057","referenceNumber":"165","name":"Dianne Persaud","phone":"","email":"kingtechnetflix165@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Dianne Persaud","account":""},{"id":1761000000058,"billNumber":"5058","referenceNumber":"107","name":"Donette Hoyte","phone":"","email":"kingtechnetflix107@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-10","expiry":"","status":"Active","profile":"Donette Hoyte","account":""},{"id":1761000000059,"billNumber":"5059","referenceNumber":"106","name":"Donna Ramascindo","phone":"","email":"kingtechnetflix106@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Donna Ramascindo","account":""},{"id":1761000000060,"billNumber":"5060","referenceNumber":"183","name":"Elaine Melville","phone":"","email":"kingtechnetflix183@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Elaine Melville","account":""},{"id":1761000000061,"billNumber":"5061","referenceNumber":"","name":"Elijah Daniel","phone":"","email":"","service":"Crunchyroll","plan":"Premium","amount":4000,"signupFee":0,"due":"2026-08-23","expiry":"","status":"Active","profile":"Elijah Daniel","account":""},{"id":1761000000062,"billNumber":"5062","referenceNumber":"","name":"Elijah Daniels","phone":"","email":"","service":"Netflix","plan":"Legacy Premium","amount":4000,"signupFee":0,"due":"2026-08-23","expiry":"","status":"Active","profile":"Elijah Daniels","account":""},{"id":1761000000063,"billNumber":"5063","referenceNumber":"91","name":"Elijah Daniels","phone":"","email":"kingtechnetflix91@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-12","expiry":"","status":"Active","profile":"Elijah Daniels","account":""},{"id":1761000000064,"billNumber":"5064","referenceNumber":"124","name":"Elijah Weekes","phone":"","email":"kingtechnetflix124@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-31","expiry":"","status":"Active","profile":"Elijah Weekes","account":""},{"id":1761000000065,"billNumber":"5065","referenceNumber":"133","name":"Emilio Morgan","phone":"","email":"kingtechnetflix133@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Emilio Morgan","account":""},{"id":1761000000066,"billNumber":"5066","referenceNumber":"147","name":"Eon Thomas","phone":"","email":"kingtechnetflix147@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Eon Thomas","account":""},{"id":1761000000067,"billNumber":"5067","referenceNumber":"54","name":"Faith Stephen","phone":"","email":"kingtechnetflix54@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Faith Stephen","account":""},{"id":1761000000068,"billNumber":"5068","referenceNumber":"189","name":"Farina Blake","phone":"","email":"kingtechnetflix189@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-26","expiry":"","status":"Active","profile":"Farina Blake","account":""},{"id":1761000000069,"billNumber":"5069","referenceNumber":"209","name":"Farrah Chan","phone":"","email":"kingtechnetflix209@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Farrah Chan","account":""},{"id":1761000000070,"billNumber":"5070","referenceNumber":"13","name":"Farzana Rasheed","phone":"","email":"kingtechnetflix13@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Farzana Rasheed","account":""},{"id":1761000000071,"billNumber":"5071","referenceNumber":"4","name":"Farzana Rasheed","phone":"","email":"kingtechnetflix4@gmail.com","service":"Prime Video","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-15","expiry":"","status":"Active","profile":"Farzana Rasheed","account":""},{"id":1761000000072,"billNumber":"5072","referenceNumber":"111","name":"Fazia Mc Phoy","phone":"","email":"kingtechnetflix111@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Fazia Mc Phoy","account":""},{"id":1761000000073,"billNumber":"5073","referenceNumber":"73","name":"Fiona Romascindo","phone":"","email":"kingtechnetflix73@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-15","expiry":"","status":"Active","profile":"Fiona Romascindo","account":""},{"id":1761000000074,"billNumber":"5074","referenceNumber":"145","name":"Gaitrie Singh","phone":"","email":"kingtechnetflix145@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-15","expiry":"","status":"Active","profile":"Gaitrie Singh","account":""},{"id":1761000000075,"billNumber":"5075","referenceNumber":"4","name":"Ganesh Persaud","phone":"","email":"kingtechnetflix4@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Ganesh Persaud","account":""},{"id":1761000000076,"billNumber":"5076","referenceNumber":"130","name":"Gomegie Sooknanand","phone":"","email":"kingtechnetflix130@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-26","expiry":"","status":"Active","profile":"Gomegie Sooknanand","account":""},{"id":1761000000077,"billNumber":"5077","referenceNumber":"149","name":"Jaden Semple","phone":"","email":"kingtechnetflix149@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Jaden Semple","account":""},{"id":1761000000078,"billNumber":"5078","referenceNumber":"121","name":"Jamin Charles","phone":"","email":"kingtechnetflix121@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Jamin Charles","account":""},{"id":1761000000079,"billNumber":"5079","referenceNumber":"127","name":"Jaron Jones","phone":"","email":"kingtechnetflix127@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Jaron Jones","account":""},{"id":1761000000080,"billNumber":"5080","referenceNumber":"146","name":"Jasmine Williams","phone":"","email":"kingtechnetflix146@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Jasmine Williams","account":""},{"id":1761000000081,"billNumber":"5081","referenceNumber":"128","name":"Jason Taylor","phone":"","email":"kingtechnetflix128@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-24","expiry":"","status":"Active","profile":"Jason Taylor","account":""},{"id":1761000000082,"billNumber":"5082","referenceNumber":"72","name":"Javid Vandeyar","phone":"","email":"kingtechnetflix72@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-17","expiry":"","status":"Active","profile":"Javid Vandeyar","account":""},{"id":1761000000083,"billNumber":"5083","referenceNumber":"195","name":"Jeniffer Tombran","phone":"","email":"kingtechnetflix195@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Jeniffer Tombran","account":""},{"id":1761000000084,"billNumber":"5084","referenceNumber":"8","name":"Jeniffer Tombran","phone":"","email":"kingtechnetflix8@gmail.com","service":"Prime Video","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Jeniffer Tombran","account":""},{"id":1761000000085,"billNumber":"5085","referenceNumber":"63","name":"Jennifer Henry","phone":"","email":"kingtechnetflix63@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Jennifer Henry","account":""},{"id":1761000000086,"billNumber":"5086","referenceNumber":"132","name":"Jermin Jack","phone":"","email":"kingtechnetflix132@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-24","expiry":"","status":"Active","profile":"Jermin Jack","account":""},{"id":1761000000087,"billNumber":"5087","referenceNumber":"170","name":"Jennifer Williams","phone":"","email":"kingtechnetflix170@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Jennifer Williams","account":""},{"id":1761000000088,"billNumber":"5088","referenceNumber":"204","name":"Jewel Yaw","phone":"","email":"kingtechnetflix204@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Jewel Yaw","account":""},{"id":1761000000089,"billNumber":"5089","referenceNumber":"222","name":"John Saugh","phone":"","email":"kingtechnetflix222@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"John Saugh","account":""},{"id":1761000000090,"billNumber":"5090","referenceNumber":"86","name":"Jonathan King","phone":"","email":"kingtechnetflix86@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Jonathan King","account":""},{"id":1761000000091,"billNumber":"5091","referenceNumber":"","name":"Jorge Rodriguez","phone":"","email":"","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-31","expiry":"","status":"Active","profile":"Jorge Rodriguez","account":""},{"id":1761000000092,"billNumber":"5092","referenceNumber":"45","name":"Juanita Dundas","phone":"","email":"kingtechnetflix45@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Juanita Dundas","account":""},{"id":1761000000093,"billNumber":"5093","referenceNumber":"8","name":"Juel Richards","phone":"","email":"kingtechnetflix8@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Juel Richards","account":""},{"id":1761000000094,"billNumber":"5094","referenceNumber":"19","name":"Kamala Mahaba","phone":"","email":"kingtechnetflix19@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Kamala Mahaba","account":""},{"id":1761000000095,"billNumber":"5095","referenceNumber":"212","name":"Karina Arjune","phone":"","email":"kingtechnetflix212@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-24","expiry":"","status":"Active","profile":"Karina Arjune","account":""},{"id":1761000000096,"billNumber":"5096","referenceNumber":"9","name":"Kavita Ram","phone":"","email":"kingtechnetflix9@gmail.com","service":"Prime Video","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Kavita Ram","account":""},{"id":1761000000097,"billNumber":"5097","referenceNumber":"48","name":"Keianna Joseph","phone":"","email":"kingtechnetflix48@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Keianna Joseph","account":""},{"id":1761000000098,"billNumber":"5098","referenceNumber":"80","name":"Keisha Singh","phone":"","email":"kingtechnetflix80@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Keisha Singh","account":""},{"id":1761000000099,"billNumber":"5099","referenceNumber":"93","name":"Kenciya Murphy","phone":"","email":"kingtechnetflix93@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-17","expiry":"","status":"Active","profile":"Kenciya Murphy","account":""},{"id":1761000000100,"billNumber":"5100","referenceNumber":"76","name":"Kerline Jose","phone":"","email":"kingtechnetflix76@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-10","expiry":"","status":"Active","profile":"Kerline Jose","account":""},{"id":1761000000101,"billNumber":"5101","referenceNumber":"227","name":"Kevin Rambacchus","phone":"","email":"kingtechnetflix227@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Kevin Rambacchus","account":""},{"id":1761000000102,"billNumber":"5102","referenceNumber":"155","name":"Kimberly Daly","phone":"","email":"kingtechnetflix155@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Kimberly Daly","account":""},{"id":1761000000103,"billNumber":"5103","referenceNumber":"229","name":"Kris Singh","phone":"","email":"kingtechnetflix229@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-01","expiry":"","status":"Active","profile":"Kris Singh","account":""},{"id":1761000000104,"billNumber":"5104","referenceNumber":"161","name":"Krishna Lallji","phone":"","email":"kingtechnetflix161@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-08","expiry":"","status":"Active","profile":"Krishna Lallji","account":""},{"id":1761000000105,"billNumber":"5105","referenceNumber":"116","name":"Laticia Abrams","phone":"","email":"kingtechnetflix116@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Laticia Abrams","account":""},{"id":1761000000106,"billNumber":"5106","referenceNumber":"122","name":"Laticia Abrams","phone":"","email":"kingtechnetflix122@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Laticia Abrams","account":""},{"id":1761000000107,"billNumber":"5107","referenceNumber":"110","name":"Lauvia Avian","phone":"","email":"kingtechnetflix110@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Lauvia Avian","account":""},{"id":1761000000108,"billNumber":"5108","referenceNumber":"117","name":"Latoya Bakker","phone":"","email":"kingtechnetflix117@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Latoya Bakker","account":""},{"id":1761000000109,"billNumber":"5109","referenceNumber":"66","name":"Latoya Waldron","phone":"","email":"kingtechnetflix66@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Latoya Waldron","account":""},{"id":1761000000110,"billNumber":"5110","referenceNumber":"40","name":"Leauter Edwards Layne","phone":"","email":"kingtechnetflix40@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Leauter Edwards Layne","account":""},{"id":1761000000111,"billNumber":"5111","referenceNumber":"70","name":"Leola Jones","phone":"","email":"kingtechnetflix70@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Leola Jones","account":""},{"id":1761000000112,"billNumber":"5112","referenceNumber":"231","name":"Linden Carmicheal","phone":"","email":"kingtechnetflix231@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Linden Carmicheal","account":""},{"id":1761000000113,"billNumber":"5113","referenceNumber":"114","name":"Lisa Nunes","phone":"","email":"kingtechnetflix114@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-27","expiry":"","status":"Active","profile":"Lisa Nunes","account":""},{"id":1761000000114,"billNumber":"5114","referenceNumber":"10","name":"Madonna Cozier","phone":"","email":"kingtechnetflix10@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-23","expiry":"","status":"Active","profile":"Madonna Cozier","account":""},{"id":1761000000115,"billNumber":"5115","referenceNumber":"118","name":"Madonna George","phone":"","email":"kingtechnetflix118@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Madonna George","account":""},{"id":1761000000116,"billNumber":"5116","referenceNumber":"7","name":"Mahadeo Dekinandan","phone":"","email":"kingtechnetflix7@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Mahadeo Dekinandan","account":""},{"id":1761000000117,"billNumber":"5117","referenceNumber":"51","name":"Malika Bailey","phone":"","email":"kingtechnetflix51@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Malika Bailey","account":""},{"id":1761000000118,"billNumber":"5118","referenceNumber":"59","name":"Marcel Trotman","phone":"","email":"kingtechnetflix59@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-07","expiry":"","status":"Active","profile":"Marcel Trotman","account":""},{"id":1761000000119,"billNumber":"5119","referenceNumber":"5","name":"Mark Kunjebehary","phone":"","email":"kingtechnetflix5@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-27","expiry":"","status":"Active","profile":"Mark Kunjebehary","account":""},{"id":1761000000120,"billNumber":"5120","referenceNumber":"219","name":"Marvin Hookram","phone":"","email":"kingtechnetflix219@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Marvin Hookram","account":""},{"id":1761000000121,"billNumber":"5121","referenceNumber":"9","name":"Marvin Hookram","phone":"","email":"kingtechnetflix9@gmail.com","service":"Prime Video","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Marvin Hookram","account":""},{"id":1761000000122,"billNumber":"5122","referenceNumber":"98","name":"Matthew Drakes","phone":"","email":"kingtechnetflix98@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Matthew Drakes","account":""},{"id":1761000000123,"billNumber":"5123","referenceNumber":"92","name":"Max Balkarran","phone":"","email":"kingtechnetflix92@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-09","expiry":"","status":"Active","profile":"Max Balkarran","account":""},{"id":1761000000124,"billNumber":"5124","referenceNumber":"198","name":"Meola Jacobs","phone":"","email":"kingtechnetflix198@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Meola Jacobs","account":""},{"id":1761000000125,"billNumber":"5125","referenceNumber":"52","name":"Mesha Paul","phone":"","email":"kingtechnetflix52@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Mesha Paul","account":""},{"id":1761000000126,"billNumber":"5126","referenceNumber":"22","name":"Michael Bryan","phone":"","email":"kingtechnetflix22@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Michael Bryan","account":""},{"id":1761000000127,"billNumber":"5127","referenceNumber":"41","name":"Michelle Andries","phone":"","email":"kingtechnetflix41@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Michelle Andries","account":""},{"id":1761000000128,"billNumber":"5128","referenceNumber":"90","name":"Michelle Bowman","phone":"","email":"kingtechnetflix90@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Michelle Bowman","account":""},{"id":1761000000129,"billNumber":"5129","referenceNumber":"53","name":"Mikhail Nelson","phone":"","email":"kingtechnetflix53@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-17","expiry":"","status":"Active","profile":"Mikhail Nelson","account":""},{"id":1761000000130,"billNumber":"5130","referenceNumber":"233","name":"Mohamed Bacchus","phone":"","email":"kingtechnetflix233@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-31","expiry":"","status":"Active","profile":"Mohamed Bacchus","account":""},{"id":1761000000131,"billNumber":"5131","referenceNumber":"9","name":"Mohamed Bacchus","phone":"","email":"kingtechnetflix9@gmail.com","service":"Prime Video","plan":"Premium","amount":4000,"signupFee":0,"due":"2026-08-26","expiry":"","status":"Active","profile":"Mohamed Bacchus","account":""},{"id":1761000000132,"billNumber":"5132","referenceNumber":"33","name":"Mohammad Azeez","phone":"","email":"kingtechnetflix33@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Mohammad Azeez","account":""},{"id":1761000000133,"billNumber":"5133","referenceNumber":"175","name":"Mohammed Yassim","phone":"","email":"kingtechnetflix175@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Mohammed Yassim","account":""},{"id":1761000000134,"billNumber":"5134","referenceNumber":"113","name":"Muhammed Ali","phone":"","email":"kingtechnetflix113@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Muhammed Ali","account":""},{"id":1761000000135,"billNumber":"5135","referenceNumber":"143","name":"Nadia Chetram","phone":"","email":"kingtechnetflix143@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Nadia Chetram","account":""},{"id":1761000000136,"billNumber":"5136","referenceNumber":"185","name":"Nafeeza Ally","phone":"","email":"kingtechnetflix185@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Nafeeza Ally","account":""},{"id":1761000000137,"billNumber":"5137","referenceNumber":"36","name":"Naleeta Goberdhan","phone":"","email":"kingtechnetflix36@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Naleeta Goberdhan","account":""},{"id":1761000000138,"billNumber":"5138","referenceNumber":"81","name":"Nalisha Bangatt","phone":"","email":"kingtechnetflix81@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Nalisha Bangatt","account":""},{"id":1761000000139,"billNumber":"5139","referenceNumber":"158","name":"Navida Fiedtkou","phone":"","email":"kingtechnetflix158@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-07","expiry":"","status":"Active","profile":"Navida Fiedtkou","account":""},{"id":1761000000140,"billNumber":"5140","referenceNumber":"26","name":"Nawaz Esahack","phone":"","email":"kingtechnetflix26@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Nawaz Esahack","account":""},{"id":1761000000141,"billNumber":"5141","referenceNumber":"216","name":"Nazeema Ferreira","phone":"","email":"kingtechnetflix216@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Nazeema Ferreira","account":""},{"id":1761000000142,"billNumber":"5142","referenceNumber":"109","name":"Nigel Enmore","phone":"","email":"kingtechnetflix109@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-14","expiry":"","status":"Active","profile":"Nigel Enmore","account":""},{"id":1761000000143,"billNumber":"5143","referenceNumber":"150","name":"Nubia Williams","phone":"","email":"kingtechnetflix150@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Nubia Williams","account":""},{"id":1761000000144,"billNumber":"5144","referenceNumber":"131","name":"Nurendra Prasad","phone":"","email":"kingtechnetflix131@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Nurendra Prasad","account":""},{"id":1761000000145,"billNumber":"5145","referenceNumber":"157","name":"Nurendra Prasad","phone":"","email":"kingtechnetflix157@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Nurendra Prasad","account":""},{"id":1761000000146,"billNumber":"5146","referenceNumber":"188","name":"Nyron Thomas","phone":"","email":"kingtechnetflix188@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Nyron Thomas","account":""},{"id":1761000000147,"billNumber":"5147","referenceNumber":"215","name":"Odessa Ifill","phone":"","email":"kingtechnetflix215@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Odessa Ifill","account":""},{"id":1761000000148,"billNumber":"5148","referenceNumber":"103","name":"Odetta Coppin","phone":"","email":"kingtechnetflix103@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-12","expiry":"","status":"Active","profile":"Odetta Coppin","account":""},{"id":1761000000149,"billNumber":"5149","referenceNumber":"39","name":"Oneidys Tulsiram","phone":"","email":"kingtechnetflix39@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-12","expiry":"","status":"Active","profile":"Oneidys Tulsiram","account":""},{"id":1761000000150,"billNumber":"5150","referenceNumber":"46","name":"Otellie Clarke","phone":"","email":"kingtechnetflix46@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Otellie Clarke","account":""},{"id":1761000000151,"billNumber":"5151","referenceNumber":"14","name":"Pamela Scott","phone":"","email":"kingtechnetflix14@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-26","expiry":"","status":"Active","profile":"Pamela Scott","account":""},{"id":1761000000152,"billNumber":"5152","referenceNumber":"89","name":"Patricia Dasilva","phone":"","email":"kingtechnetflix89@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-31","expiry":"","status":"Active","profile":"Patricia Dasilva","account":""},{"id":1761000000153,"billNumber":"5153","referenceNumber":"136","name":"Pattrena De jonge","phone":"","email":"kingtechnetflix136@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-27","expiry":"","status":"Active","profile":"Pattrena De jonge","account":""},{"id":1761000000154,"billNumber":"5154","referenceNumber":"105","name":"Prakash Bahadur","phone":"","email":"kingtechnetflix105@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Prakash Bahadur","account":""},{"id":1761000000155,"billNumber":"5155","referenceNumber":"148","name":"Priya","phone":"","email":"kingtechnetflix148@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-10","expiry":"","status":"Active","profile":"Priya","account":""},{"id":1761000000156,"billNumber":"5156","referenceNumber":"67","name":"Pushpa Tiwari","phone":"","email":"kingtechnetflix67@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Pushpa Tiwari","account":""},{"id":1761000000157,"billNumber":"5157","referenceNumber":"1","name":"Quincy Nash","phone":"","email":"kingtechnetflix1@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Quincy Nash","account":""},{"id":1761000000158,"billNumber":"5158","referenceNumber":"196","name":"Rachelle Carmichael","phone":"","email":"kingtechnetflix196@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Rachelle Carmichael","account":""},{"id":1761000000159,"billNumber":"5159","referenceNumber":"11","name":"Rasheida Johnny","phone":"","email":"kingtechnetflix11@gmail.com","service":"Prime Video","plan":"Premium","amount":4000,"signupFee":0,"due":"2026-08-01","expiry":"","status":"Active","profile":"Rasheida Johnny","account":""},{"id":1761000000160,"billNumber":"5160","referenceNumber":"9","name":"Raul Singh","phone":"","email":"kingtechnetflix9@gmail.com","service":"Disney+","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-12","expiry":"","status":"Active","profile":"Raul Singh","account":""},{"id":1761000000161,"billNumber":"5161","referenceNumber":"200","name":"Rawl Williams","phone":"","email":"kingtechnetflix200@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Rawl Williams","account":""},{"id":1761000000162,"billNumber":"5162","referenceNumber":"30","name":"Rawl Williams","phone":"","email":"kingtechnetflix30@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Rawl Williams","account":""},{"id":1761000000163,"billNumber":"5163","referenceNumber":"5","name":"Rawl Williams","phone":"","email":"kingtechnetflix5@gmail.com","service":"Disney+","plan":"Standard","amount":2000,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Rawl Williams","account":""},{"id":1761000000164,"billNumber":"5164","referenceNumber":"174","name":"Rawle Ince","phone":"","email":"kingtechnetflix174@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-17","expiry":"","status":"Active","profile":"Rawle Ince","account":""},{"id":1761000000165,"billNumber":"5165","referenceNumber":"221","name":"Rayan Denny","phone":"","email":"kingtechnetflix221@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-08","expiry":"","status":"Active","profile":"Rayan Denny","account":""},{"id":1761000000166,"billNumber":"5166","referenceNumber":"140","name":"Raymond Defreitas","phone":"","email":"kingtechnetflix140@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Raymond Defreitas","account":""},{"id":1761000000167,"billNumber":"5167","referenceNumber":"194","name":"Rebecca Khemraj","phone":"","email":"kingtechnetflix194@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-01","expiry":"","status":"Active","profile":"Rebecca Khemraj","account":""},{"id":1761000000168,"billNumber":"5168","referenceNumber":"217","name":"Recardo Samaroo","phone":"","email":"kingtechnetflix217@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-01","expiry":"","status":"Active","profile":"Recardo Samaroo","account":""},{"id":1761000000169,"billNumber":"5169","referenceNumber":"6","name":"Reenuka Gomes","phone":"","email":"kingtechnetflix6@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-12","expiry":"","status":"Active","profile":"Reenuka Gomes","account":""},{"id":1761000000170,"billNumber":"5170","referenceNumber":"151","name":"Renatta Boyce","phone":"","email":"kingtechnetflix151@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Renatta Boyce","account":""},{"id":1761000000171,"billNumber":"5171","referenceNumber":"126","name":"Ricardo Bhagwandas","phone":"","email":"kingtechnetflix126@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Ricardo Bhagwandas","account":""},{"id":1761000000172,"billNumber":"5172","referenceNumber":"56","name":"Richard Moriah","phone":"","email":"kingtechnetflix56@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-25","expiry":"","status":"Active","profile":"Richard Moriah","account":""},{"id":1761000000173,"billNumber":"5173","referenceNumber":"85","name":"Rihanna Bourne","phone":"","email":"kingtechnetflix85@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-01","expiry":"","status":"Active","profile":"Rihanna Bourne","account":""},{"id":1761000000174,"billNumber":"5174","referenceNumber":"101","name":"Rihanna Gittens","phone":"","email":"kingtechnetflix101@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Rihanna Gittens","account":""},{"id":1761000000175,"billNumber":"5175","referenceNumber":"228","name":"Rihanna Gittens","phone":"","email":"kingtechnetflix228@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-01","expiry":"","status":"Active","profile":"Rihanna Gittens","account":""},{"id":1761000000176,"billNumber":"5176","referenceNumber":"100","name":"Rosanne Peters","phone":"","email":"kingtechnetflix100@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-03","expiry":"","status":"Active","profile":"Rosanne Peters","account":""},{"id":1761000000177,"billNumber":"5177","referenceNumber":"179","name":"Rudolph Calvan","phone":"","email":"kingtechnetflix179@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-29","expiry":"","status":"Active","profile":"Rudolph Calvan","account":""},{"id":1761000000178,"billNumber":"5178","referenceNumber":"65","name":"Rushell Sutherland","phone":"","email":"kingtechnetflix65@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Rushell Sutherland","account":""},{"id":1761000000179,"billNumber":"5179","referenceNumber":"202","name":"Ryan Jagnandan","phone":"","email":"kingtechnetflix202@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Ryan Jagnandan","account":""},{"id":1761000000180,"billNumber":"5180","referenceNumber":"108","name":"Sadie Tilku","phone":"","email":"kingtechnetflix108@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-07","expiry":"","status":"Active","profile":"Sadie Tilku","account":""},{"id":1761000000181,"billNumber":"5181","referenceNumber":"47","name":"Sadik Zaman","phone":"","email":"kingtechnetflix47@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Sadik Zaman","account":""},{"id":1761000000182,"billNumber":"5182","referenceNumber":"61","name":"Safraz Sattar","phone":"","email":"kingtechnetflix61@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-03","expiry":"","status":"Active","profile":"Safraz Sattar","account":""},{"id":1761000000183,"billNumber":"5183","referenceNumber":"110","name":"Sahana Haridat","phone":"","email":"kingtechnetflix110@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-07","expiry":"","status":"Active","profile":"Sahana Haridat","account":""},{"id":1761000000184,"billNumber":"5184","referenceNumber":"50","name":"Saif Ramah","phone":"","email":"kingtechnetflix50@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Saif Ramah","account":""},{"id":1761000000185,"billNumber":"5185","referenceNumber":"154","name":"Samanta Mohamed","phone":"","email":"kingtechnetflix154@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-18","expiry":"","status":"Active","profile":"Samanta Mohamed","account":""},{"id":1761000000186,"billNumber":"5186","referenceNumber":"87","name":"Samaya Simon","phone":"","email":"kingtechnetflix87@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Samaya Simon","account":""},{"id":1761000000187,"billNumber":"5187","referenceNumber":"166","name":"Sandeep Singh","phone":"","email":"kingtechnetflix166@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Sandeep Singh","account":""},{"id":1761000000188,"billNumber":"5188","referenceNumber":"20","name":"Sara Bissoondial","phone":"","email":"kingtechnetflix20@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-04","expiry":"","status":"Active","profile":"Sara Bissoondial","account":""},{"id":1761000000189,"billNumber":"5189","referenceNumber":"177","name":"Savitri Baldeo","phone":"","email":"kingtechnetflix177@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-16","expiry":"","status":"Active","profile":"Savitri Baldeo","account":""},{"id":1761000000190,"billNumber":"5190","referenceNumber":"29","name":"Sceon Pompey","phone":"","email":"kingtechnetflix29@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-24","expiry":"","status":"Active","profile":"Sceon Pompey","account":""},{"id":1761000000191,"billNumber":"5191","referenceNumber":"78","name":"Shahjahan Nazim","phone":"","email":"kingtechnetflix78@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Shahjahan Nazim","account":""},{"id":1761000000192,"billNumber":"5192","referenceNumber":"94","name":"Shamar Austin","phone":"","email":"kingtechnetflix94@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Shamar Austin","account":""},{"id":1761000000193,"billNumber":"5193","referenceNumber":"84","name":"Shaneeza Habib","phone":"","email":"kingtechnetflix84@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-21","expiry":"","status":"Active","profile":"Shaneeza Habib","account":""},{"id":1761000000194,"billNumber":"5194","referenceNumber":"71","name":"Sharda Balram","phone":"","email":"kingtechnetflix71@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Sharda Balram","account":""},{"id":1761000000195,"billNumber":"5195","referenceNumber":"32","name":"Sharda Hansraj","phone":"","email":"kingtechnetflix32@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Sharda Hansraj","account":""},{"id":1761000000196,"billNumber":"5196","referenceNumber":"218","name":"Shefane Boyce","phone":"","email":"kingtechnetflix218@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Shefane Boyce","account":""},{"id":1761000000197,"billNumber":"5197","referenceNumber":"193","name":"Shelley King","phone":"","email":"kingtechnetflix193@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Shelley King","account":""},{"id":1761000000198,"billNumber":"5198","referenceNumber":"119","name":"Sheniza Chappelle","phone":"","email":"kingtechnetflix119@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-20","expiry":"","status":"Active","profile":"Sheniza Chappelle","account":""},{"id":1761000000199,"billNumber":"5199","referenceNumber":"25","name":"Sherica Isaacs","phone":"","email":"kingtechnetflix25@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-28","expiry":"","status":"Active","profile":"Sherica Isaacs","account":""},{"id":1761000000200,"billNumber":"5200","referenceNumber":"5","name":"Sherryann Frasergomes","phone":"","email":"kingtechnetflix5@gmail.com","service":"Prime Video","plan":"Premium","amount":4000,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Sherryann Frasergomes","account":""},{"id":1761000000201,"billNumber":"5201","referenceNumber":"164","name":"Sherryann Gomes","phone":"","email":"kingtechnetflix164@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Sherryann Gomes","account":""},{"id":1761000000202,"billNumber":"5202","referenceNumber":"88","name":"Sherwin Joseph","phone":"","email":"kingtechnetflix88@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-17","expiry":"","status":"Active","profile":"Sherwin Joseph","account":""},{"id":1761000000203,"billNumber":"5203","referenceNumber":"88","name":"Sherwin Joseph","phone":"","email":"kingtechnetflix88@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-23","expiry":"","status":"Active","profile":"Sherwin Joseph","account":""},{"id":1761000000204,"billNumber":"5204","referenceNumber":"IPTV1","name":"Sherwin Joseph","phone":"","email":"","service":"Xtreme TV / IPTV","plan":"IPTV","amount":3200,"signupFee":0,"due":"2026-08-18","expiry":"","status":"Active","profile":"Sherwin Joseph","account":""},{"id":1761000000205,"billNumber":"5205","referenceNumber":"IPTV2","name":"Sherwin Joseph","phone":"","email":"","service":"Xtreme TV / IPTV","plan":"IPTV","amount":3200,"signupFee":0,"due":"2026-08-18","expiry":"","status":"Active","profile":"Sherwin Joseph","account":""},{"id":1761000000206,"billNumber":"5206","referenceNumber":"62","name":"Shirley Kaloo","phone":"","email":"kingtechnetflix62@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Shirley Kaloo","account":""},{"id":1761000000207,"billNumber":"5207","referenceNumber":"83","name":"Shivanie Nasirbage","phone":"","email":"kingtechnetflix83@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-22","expiry":"","status":"Active","profile":"Shivanie Nasirbage","account":""},{"id":1761000000208,"billNumber":"5208","referenceNumber":"11","name":"Shivram Dindial","phone":"","email":"kingtechnetflix11@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Shivram Dindial","account":""},{"id":1761000000209,"billNumber":"5209","referenceNumber":"172","name":"Shondel Wilson","phone":"","email":"kingtechnetflix172@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-09","expiry":"","status":"Active","profile":"Shondel Wilson","account":""},{"id":1761000000210,"billNumber":"5210","referenceNumber":"8","name":"Shontel Wilson","phone":"","email":"kingtechnetflix8@gmail.com","service":"Prime Video","plan":"Premium","amount":4000,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Shontel Wilson","account":""},{"id":1761000000211,"billNumber":"5211","referenceNumber":"31","name":"Simone Ifill Wilson","phone":"","email":"kingtechnetflix31@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Simone Ifill Wilson","account":""},{"id":1761000000212,"billNumber":"5212","referenceNumber":"23","name":"Stacey Williams","phone":"","email":"kingtechnetflix23@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-26","expiry":"","status":"Active","profile":"Stacey Williams","account":""},{"id":1761000000213,"billNumber":"5213","referenceNumber":"104","name":"Stafan Loncke","phone":"","email":"kingtechnetflix104@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Stafan Loncke","account":""},{"id":1761000000214,"billNumber":"5214","referenceNumber":"129","name":"Surujdai Parsram","phone":"","email":"kingtechnetflix129@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Surujdai Parsram","account":""},{"id":1761000000215,"billNumber":"5215","referenceNumber":"205","name":"Susie Boston","phone":"","email":"kingtechnetflix205@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-13","expiry":"","status":"Active","profile":"Susie Boston","account":""},{"id":1761000000216,"billNumber":"5216","referenceNumber":"214","name":"Suzanna Hunte","phone":"","email":"kingtechnetflix214@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-27","expiry":"","status":"Active","profile":"Suzanna Hunte","account":""},{"id":1761000000217,"billNumber":"5217","referenceNumber":"167","name":"Sylvia Underwood","phone":"","email":"kingtechnetflix167@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Sylvia Underwood","account":""},{"id":1761000000218,"billNumber":"5218","referenceNumber":"123","name":"Tandica Smith","phone":"","email":"kingtechnetflix123@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Tandica Smith","account":""},{"id":1761000000219,"billNumber":"5219","referenceNumber":"203","name":"Teshawna Carter","phone":"","email":"kingtechnetflix203@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Teshawna Carter","account":""},{"id":1761000000220,"billNumber":"5220","referenceNumber":"49","name":"Tevani Ramkissoon","phone":"","email":"kingtechnetflix49@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-08","expiry":"","status":"Active","profile":"Tevani Ramkissoon","account":""},{"id":1761000000221,"billNumber":"5221","referenceNumber":"152","name":"Timothy Persaud","phone":"","email":"kingtechnetflix152@gmail.com","service":"Netflix","plan":"Legacy Basic","amount":1600,"signupFee":0,"due":"2026-08-05","expiry":"","status":"Active","profile":"Timothy Persaud","account":""},{"id":1761000000222,"billNumber":"5222","referenceNumber":"139","name":"Tisha Romascind","phone":"","email":"kingtechnetflix139@gmail.com","service":"Netflix","plan":"Basic","amount":2000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Tisha Romascind","account":""},{"id":1761000000223,"billNumber":"5223","referenceNumber":"135","name":"Tony Marks","phone":"","email":"kingtechnetflix135@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-06","expiry":"","status":"Active","profile":"Tony Marks","account":""},{"id":1761000000224,"billNumber":"5224","referenceNumber":"223","name":"Toshana Loncke","phone":"","email":"kingtechnetflix223@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Toshana Loncke","account":""},{"id":1761000000225,"billNumber":"5225","referenceNumber":"187","name":"Tresha Lewis","phone":"","email":"kingtechnetflix187@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Tresha Lewis","account":""},{"id":1761000000226,"billNumber":"5226","referenceNumber":"2","name":"Treshanna Thompson","phone":"","email":"kingtechnetflix2@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-24","expiry":"","status":"Active","profile":"Treshanna Thompson","account":""},{"id":1761000000227,"billNumber":"5227","referenceNumber":"12","name":"Trevon Nelson","phone":"","email":"kingtechnetflix12@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-19","expiry":"","status":"Active","profile":"Trevon Nelson","account":""},{"id":1761000000228,"billNumber":"5228","referenceNumber":"95","name":"Tricia Franklin","phone":"","email":"kingtechnetflix95@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-03","expiry":"","status":"Active","profile":"Tricia Franklin","account":""},{"id":1761000000229,"billNumber":"5229","referenceNumber":"16","name":"Tricia Kippins","phone":"","email":"kingtechnetflix16@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Tricia Kippins","account":""},{"id":1761000000230,"billNumber":"5230","referenceNumber":"5","name":"Trishana Alphonso","phone":"","email":"kingtechnetflix5@gmail.com","service":"Disney+","plan":"Premium","amount":4000,"signupFee":0,"due":"2026-07-30","expiry":"","status":"Active","profile":"Trishana Alphonso","account":""},{"id":1761000000231,"billNumber":"5231","referenceNumber":"97","name":"Trishana Alphonso","phone":"","email":"kingtechnetflix97@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-03","expiry":"","status":"Active","profile":"Trishana Alphonso","account":""},{"id":1761000000232,"billNumber":"5232","referenceNumber":"190","name":"Tyreie Charles","phone":"","email":"kingtechnetflix190@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-15","expiry":"","status":"Active","profile":"Tyreie Charles","account":""},{"id":1761000000233,"billNumber":"5233","referenceNumber":"163","name":"Vanita Boodram","phone":"","email":"kingtechnetflix163@gmail.com","service":"Netflix","plan":"Legacy Standard","amount":2500,"signupFee":0,"due":"2026-08-08","expiry":"","status":"Active","profile":"Vanita Boodram","account":""},{"id":1761000000234,"billNumber":"5234","referenceNumber":"58","name":"Vashawun Wilkie","phone":"","email":"kingtechnetflix58@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Vashawun Wilkie","account":""},{"id":1761000000235,"billNumber":"5235","referenceNumber":"168","name":"Veronica Sinclair","phone":"","email":"kingtechnetflix168@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-11","expiry":"","status":"Active","profile":"Veronica Sinclair","account":""},{"id":1761000000236,"billNumber":"5236","referenceNumber":"120","name":"Yetunde Abel","phone":"","email":"kingtechnetflix120@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-17","expiry":"","status":"Active","profile":"Yetunde Abel","account":""},{"id":1761000000237,"billNumber":"5237","referenceNumber":"162","name":"Yougita","phone":"","email":"kingtechnetflix162@gmail.com","service":"Netflix","plan":"Premium","amount":3500,"signupFee":0,"due":"2026-08-09","expiry":"","status":"Active","profile":"Yougita","account":""},{"id":1761000000238,"billNumber":"5238","referenceNumber":"138","name":"Zoohaf Allen","phone":"","email":"kingtechnetflix138@gmail.com","service":"Netflix","plan":"Standard","amount":3000,"signupFee":0,"due":"2026-08-02","expiry":"","status":"Active","profile":"Zoohaf Allen","account":""}];
const initialAccounts = [];
const initialExpenses = [];
let customers = JSON.parse(localStorage.getItem("kt_customers")||"null") || structuredClone(initialCustomers);
let accounts = JSON.parse(localStorage.getItem("kt_accounts")||"null") || structuredClone(initialAccounts);
let expenses = JSON.parse(localStorage.getItem("kt_expenses")||"null") || structuredClone(initialExpenses);
let payments = JSON.parse(localStorage.getItem("kt_payments")||"[]");
let bulkReminderLog = JSON.parse(localStorage.getItem("kt_bulk_reminders")||"{}");
let bulkSelectedIds = [];
let bulkQueue = [];
let bulkQueueIndex = 0;
const money=n=>"$"+Number(n||0).toLocaleString()+" GYD";
const slug=s=>s.toLowerCase().replaceAll(" ","-");
const subscriptionPackages={
 "Netflix":[
  {name:"Basic",amount:2000,signupFee:0},
  {name:"Standard",amount:3000,signupFee:0},
  {name:"Premium",amount:3500,signupFee:0}
 ],
 "Disney+":[
  {name:"Basic Account",amount:2000,signupFee:1600},
  {name:"Premium Account",amount:4000,signupFee:1600}
 ],
 "Amazon Prime Video":[
  {name:"Basic Account",amount:2000,signupFee:1600},
  {name:"Premium Account",amount:4000,signupFee:1600}
 ],
 "HBO Max / Max":[
  {name:"Basic with Ads",amount:2300,signupFee:0},
  {name:"Standard",amount:2900,signupFee:0},
  {name:"Platinum",amount:3500,signupFee:0}
 ],
 "Xtreme TV / IPTV":[
  {name:"Enter package manually",amount:0,signupFee:0,manual:true}
 ]
};
function fillSubscriptionServices(){
 const service=document.getElementById("customerService");
 if(!service)return;
 service.innerHTML=Object.keys(subscriptionPackages).map(s=>`<option value="${s}">${s}</option>`).join("");
 updateSubscriptionPlans();
}
function updateSubscriptionPlans(){
 const service=document.getElementById("customerService");
 const plan=document.getElementById("customerPlan");
 if(!service||!plan)return;
 const list=subscriptionPackages[service.value]||[];
 plan.innerHTML=list.map((p,i)=>`<option value="${p.name}" data-index="${i}">${p.name}</option>`).join("");
 updateSubscriptionPrice();
}
function updateSubscriptionPrice(){
 const service=document.getElementById("customerService");
 const plan=document.getElementById("customerPlan");
 const amount=document.getElementById("customerAmount");
 const fee=document.getElementById("customerSignupFee");
 if(!service||!plan||!amount||!fee)return;
 const p=(subscriptionPackages[service.value]||[])[plan.selectedIndex]||{amount:0,signupFee:0};
 amount.value=p.amount||"";
 fee.value=p.signupFee||0;
 amount.readOnly=!p.manual;
 if(p.manual){amount.placeholder="Enter website package price";amount.focus()}else{amount.placeholder=""}
}

function dateOnly(value){return value?new Date(value+'T00:00:00'):null}
function daysFromToday(value){const d=dateOnly(value);if(!d)return null;const t=new Date();t.setHours(0,0,0,0);return Math.round((d-t)/86400000)}
function calculatedCustomerStatus(c){
  if(["Did Not Renew","Available"].includes(c.status)) return c.status;
  const expiryDays=daysFromToday(c.expiry);
  if(expiryDays!==null && expiryDays<0) return "Expired";
  const dueDays=daysFromToday(c.due);
  if(dueDays===null) return c.status||"Active";
  if(dueDays<0) return "Overdue";
  if(dueDays===0) return "Due Today";
  if(dueDays<=3) return "Due Soon";
  return "Active";
}
function accountUsed(a){
  const manual=Math.max(0,Number(a.manualUsed ?? a.used ?? 0));
  const assigned=Math.max(0,Number(a.assignedUsed||0));
  return Math.max(manual,assigned);
}
function availableSlots(a){return Math.max(0,Number(a.slots||0)-accountUsed(a))}
function calculatedAccountStatus(a){
  const expiryDays=daysFromToday(a.providerExpiry);
  if(expiryDays!==null && expiryDays<0) return "Expired";
  if(a.manualStatus==="Inactive" || a.status==="Inactive") return "Inactive";
  if(a.manualStatus==="Expired") return "Expired";
  return availableSlots(a)<=0?"Full":"Available";
}
function recalculateAccountUsage(){
  accounts.forEach(a=>{
    if(a.manualUsed===undefined)a.manualUsed=Math.max(0,Number(a.used||0));
    a.assignedUsed=customers.filter(c=>c.account===a.name && !["Did Not Renew","Available","Expired"].includes(c.status)).length;
    a.used=accountUsed(a);
    a.availableSlots=availableSlots(a);
  });
}
function refreshAutomaticStatuses(){
  customers.forEach(c=>c.status=calculatedCustomerStatus(c));
  recalculateAccountUsage();
  accounts.forEach(a=>a.status=calculatedAccountStatus(a));
}

const LIVE_SHEET_ID="1-SFws64HGIkEvK3vZCmNekilftCtpy4WdE6AKSDdKWU";
const DEFAULT_SYNC_URL="https://script.google.com/macros/s/AKfycbxZk5m3wTJsWv5ER3JdJIf3AoZqjirVs_T1GSBrZxM8mlIgRs_VxD5Ya7wFgbza4gjJ/exec";
const SYNC_INTERVAL=20000;
let syncBusy=false, lastSharedHash="";

let syncSaveTimer=null;
function saveLocalOnly(){
  localStorage.setItem("kt_customers",JSON.stringify(customers));
  localStorage.setItem("kt_accounts",JSON.stringify(accounts));
  localStorage.setItem("kt_expenses",JSON.stringify(expenses));
  localStorage.setItem("kt_payments",JSON.stringify(payments));
  localStorage.setItem("kt_bulk_reminders",JSON.stringify(bulkReminderLog));
}
const save=()=>{
  refreshAutomaticStatuses(); saveLocalOnly(); render();
  clearTimeout(syncSaveTimer);
  if(sharedReady()){
    syncSaveTimer=setTimeout(()=>pushSharedData().catch(()=>{}),700);
  }
};
function generateBillNumber(){
 const used=new Set(customers.map(c=>String(c.billNumber||"")));
 let number;
 do{number=String(Math.floor(1000+Math.random()*9000));}while(used.has(number));
 return number;
}
function ensureBillNumbers(){
 const used=new Set();
 customers.forEach(c=>{
   let n=String(c.billNumber||"");
   if(!/^\d{4}$/.test(n)||used.has(n)){
     do{n=String(Math.floor(1000+Math.random()*9000));}while(used.has(n));
     c.billNumber=n;
   }
   used.add(n);
 });
 localStorage.setItem("kt_customers",JSON.stringify(customers));
}

function toast(msg){let t=document.getElementById("toast");t.textContent=msg;t.style.display="block";setTimeout(()=>t.style.display="none",2200)}
function navigate(id){document.querySelectorAll(".page").forEach(x=>x.classList.toggle("active",x.id===id));document.querySelectorAll("[data-page]").forEach(x=>x.classList.toggle("active",x.dataset.page===id));document.getElementById("pageTitle").textContent={dashboard:"Dashboard",customers:"Customers",accounts:"Subscription Accounts",reminders:"Reminders",bulk:"Bulk Messages",payments:"Customer Payments",expenses:"Expenses",reports:"Reports",settings:"Settings"}[id];window.scrollTo(0,0)}
document.addEventListener("click",e=>{const p=e.target.closest("[data-page]");if(p)navigate(p.dataset.page);const o=e.target.closest("[data-open]");if(o){document.getElementById(o.dataset.open).classList.add("open");if(o.dataset.open==="customerModal")document.getElementById("customerBillNumber").value=generateBillNumber();}if(e.target.matches("[data-close]"))e.target.closest(".modal").classList.remove("open")});
document.getElementById("quickAdd").onclick=()=>{document.getElementById("customerBillNumber").value=generateBillNumber();document.getElementById("customerModal").classList.add("open")};
document.getElementById("settingsButton").onclick=()=>navigate("settings");

function openSection(page, filter=""){
 navigate(page);
 setTimeout(()=>{
   if(page==="customers"){
     const status=document.getElementById("statusFilter");
     if(status){
       status.value=[...status.options].some(o=>o.value===filter)?filter:"";
       renderCustomers();
     }
   }
   if(page==="reminders"){
     const reminder=document.getElementById("reminderFilter");
     if(reminder){
       if(filter==="Overdue"){
         reminder.value=[...reminder.options].some(o=>o.value==="Overdue")?"Overdue":"";
       }else if(filter==="Due Soon"){
         reminder.value=[...reminder.options].some(o=>o.value==="Due Soon")?"Due Soon":"";
       }else{
         reminder.value=[...reminder.options].some(o=>o.value===filter)?filter:"";
       }
       renderReminders();
     }
   }
   if(page==="accounts"){
     document.querySelectorAll("#accountCards .account-card").forEach(card=>{
       const badge=card.querySelector(".badge");
       const matches=!filter||badge?.textContent.trim()===filter;
       card.style.display=matches?"":"none";
     });
   }
 },20);
}

function whatsApp(c){
 let msg="";
 if(["Overdue","Expired","Did Not Renew"].includes(c.status)){
   msg=`👑 *KING TECH PAYMENT NOTICE*

Hello *${c.name}*,

Your subscription payment is currently *OVERDUE*.

🧾 *Bill Number:* #${c.billNumber}
📺 *Service:* ${c.service}
💰 *Amount Due:* ${money(c.amount)}
📅 *Due Date:* ${c.due}

To avoid interruption or restore your service, please complete payment as soon as possible.

💳 *MMG Pay Merchant*
*Merchant Number:* 7107260
*Merchant Name:* King Tech

📸 After payment, kindly send:
• A clear payment receipt
• Your bill number: *#${c.billNumber}*

If payment was already made, please send the receipt so we can update your account.

Thank you for choosing *King Tech* 👑`;
 }else if(c.status==="Due Today"){
   msg=`👑 *KING TECH PAYMENT REMINDER*

Hello *${c.name}*,

Your subscription payment is due *TODAY*.

🧾 *Bill Number:* #${c.billNumber}
📺 *Service:* ${c.service}
💰 *Amount Due:* ${money(c.amount)}
📅 *Due Date:* ${c.due}

💳 *MMG Pay Merchant*
*Merchant Number:* 7107260
*Merchant Name:* King Tech

📸 Please send your payment receipt with bill number *#${c.billNumber}* after paying.

Thank you for choosing *King Tech* 👑`;
 }else{
   msg=`👑 *KING TECH SUBSCRIPTION REMINDER*

Hello *${c.name}*,

This is a friendly reminder that your subscription payment is coming up.

🧾 *Bill Number:* #${c.billNumber}
📺 *Service:* ${c.service}
💰 *Amount Due:* ${money(c.amount)}
📅 *Payment Due:* ${c.due}

💳 *MMG Pay Merchant*
*Merchant Number:* 7107260
*Merchant Name:* King Tech

📸 Once payment is completed, please send a clear receipt and include bill number *#${c.billNumber}*.

Thank you for choosing *King Tech* 👑`;
 }

 openWhatsAppMessage(c.phone,msg);
}
function markPaid(id){const c=customers.find(x=>x.id===id);document.getElementById("paymentCustomer").value=id;document.querySelector("#paymentForm [name=amount]").value=c.amount;document.getElementById("paymentModal").classList.add("open")}
const PAYABLE_CUSTOMER_STATUSES=new Set(["Due Soon","Due Today","Overdue","Expired"]);
function isPayableCustomer(c){return PAYABLE_CUSTOMER_STATUSES.has(c.status)}
function removePayment(id){if(!confirm("Remove this payment record? The customer's current due date will not be changed."))return;payments=payments.filter(p=>p.id!==id);save();toast("Payment record removed")}
function removeExpense(id){if(!confirm("Remove this expense record?"))return;expenses=expenses.filter(x=>x.id!==id);save();toast("Expense removed")}
function render(){refreshAutomaticStatuses();
 const active=customers.filter(c=>c.status==="Active").length,due=customers.filter(c=>["Due Soon","Due Today"].includes(c.status)).length,over=customers.filter(c=>["Overdue","Expired"].includes(c.status)).length,slots=accounts.filter(a=>!["Expired","Inactive"].includes(a.status)).reduce((s,a)=>s+availableSlots(a),0);
 document.getElementById("stats").innerHTML=[
 [active,"Active Customers","Currently subscribed","customers","Active"],
 [due,"Payments Due Soon","Within three days","reminders","Due Soon"],
 [over,"Overdue / Expired","Needs follow-up","reminders","Overdue"],
 [slots,"Available Slots","Ready for new customers","accounts","Available"]
].map(x=>`<div class="stat clickable-card" onclick="openSection('${x[3]}','${x[4]}')"><span>${x[1]}</span><strong>${x[0]}</strong><small>${x[2]}</small></div>`).join("");
 const attention=customers.filter(isPayableCustomer).sort((a,b)=>String(a.due||"").localeCompare(String(b.due||""))).slice(0,8);
 document.getElementById("attentionRows").innerHTML=attention.map(c=>`<tr><td><div class="name">${c.name}</div><button class="icon-btn" style="margin-top:6px" onclick="editCustomer(${c.id})">Edit Customer</button><div class="muted">${c.phone||"Phone not added"}${c.email?` • ${c.email}`:""}${c.referenceNumber?` • Ref ${c.referenceNumber}`:""}</div></td><td>${c.service}</td><td>${c.due}</td><td><span class="badge ${slug(c.status)}">${c.status}</span></td><td><button class="icon-btn" onclick="whatsApp(customers.find(x=>x.id===${c.id}))">WhatsApp</button></td></tr>`).join("");
 document.getElementById("availabilityList").innerHTML=accounts.slice(0,5).map(a=>`<div class="notice clickable-card" onclick="openSection('accounts','${a.used>=a.slots?'Full':'Available'}')"><div><strong>${a.name}</strong><small>${a.used} of ${a.slots} slots used</small></div><span class="badge ${a.used>=a.slots?'full':'available'}">${availableSlots(a)} available</span></div>`).join("");
 renderCustomers(); renderAccounts(); renderReminders(); renderPayments(); renderExpenses(); renderReports(); fillSelects(); renderBulkMessages();
}
function renderCustomers(){
 const q=(document.getElementById("customerSearch")?.value||"").toLowerCase(),st=document.getElementById("statusFilter")?.value||"",sv=document.getElementById("serviceFilter")?.value||"";
 const rows=customers.filter(c=>(!q||[c.name,c.phone,c.email,c.referenceNumber,c.service].join(" ").toLowerCase().includes(q))&&(!st||c.status===st)&&(!sv||c.service===sv));
 document.getElementById("customerRows").innerHTML=rows.map(c=>`<tr><td><strong>#${c.billNumber}</strong></td><td><div class="name">${c.name}</div><div class="muted">${c.phone||"Phone not added"}${c.email?` • ${c.email}`:""}${c.referenceNumber?` • Ref ${c.referenceNumber}`:""}</div></td><td>${c.service}<div class="muted">${c.plan}${c.signupFee?` • Sign-up fee ${money(c.signupFee)}`:""}</div></td><td>${c.account||"—"}<div class="muted">${c.profile||""}</div></td><td>${money(c.amount)}</td><td>${c.due}</td><td>${c.expiry}</td><td><span class="badge ${slug(c.status)}">${c.status}</span></td><td><button class="icon-btn" onclick="editCustomer(${c.id})">Edit</button> <button class="icon-btn" onclick="markPaid(${c.id})">Paid</button> <button class="icon-btn" onclick="whatsApp(customers.find(x=>x.id===${c.id}))">Message</button></td></tr>`).join("")||`<tr><td colspan="9">No matching customers.</td></tr>`;
}
function renderAccounts(){document.getElementById("accountCards").innerHTML=accounts.map(a=>`<div class="account-card"><div class="account-top"><div><div class="name">${a.name}</div><div class="muted">${a.service}</div></div><span class="badge ${slug(a.status)}">${a.status}</span></div><div class="progress"><div style="width:${Math.min(100,a.used/a.slots*100)}%"></div></div><div class="kv"><div><small>Available slots</small><strong>${availableSlots(a)}</strong></div><div><small>Used slots</small><strong>${a.used}</strong></div><div><small>Provider cost</small><strong>${money(a.cost)}</strong></div><div><small>King Tech payment</small><strong>${a.providerDue}</strong></div><div><small>Account expiry</small><strong>${a.providerExpiry||"Not set"}</strong></div></div><div style="margin-top:14px"><div class="muted">Login</div><strong>${a.login}</strong><div class="muted" style="margin-top:7px">Password: •••••••••</div></div><div style="margin-top:14px"><button class="icon-btn" onclick="editAccount(${a.id})">Edit Account</button></div></div>`).join("")}
function renderReminders(){const f=document.getElementById("reminderFilter")?.value||"";const r=customers.filter(c=>isPayableCustomer(c)&&(!f||c.status===f)).sort((a,b)=>String(a.due||"").localeCompare(String(b.due||"")));document.getElementById("reminderRows").innerHTML=r.map(c=>`<tr><td><div class="name">${c.name}</div><div class="muted">Bill #${c.billNumber} • ${c.phone||"Phone not added"}</div></td><td>${c.service}</td><td>${c.due}</td><td>${money(c.amount)}</td><td><span class="badge ${slug(c.status)}">${c.status}</span></td><td>${c.phone?`<button class="primary" onclick="whatsApp(customers.find(x=>x.id===${c.id}))">Open WhatsApp</button>`:'<span class="muted">Add phone number</span>'}</td></tr>`).join("")||'<tr><td colspan="6">No reminders match this filter.</td></tr>'}
function renderPayments(){const payable=customers.filter(isPayableCustomer),dueTotal=payable.reduce((s,c)=>s+Number(c.amount||0),0),received=payments.reduce((s,p)=>s+Number(p.amount||0),0);document.getElementById("paymentSummary").innerHTML=[
 [money(received),"Payments Recorded","Manual confirmations","payments",""],
 [money(dueTotal),"Outstanding","Current unpaid total","reminders","Overdue"],
 [payments.length,"Transactions","Recorded in this device","payments",""],
 [customers.filter(c=>c.status==="Did Not Renew").length,"Did Not Renew","Slots can be reassigned","customers","Did Not Renew"]
].map(x=>`<div class="stat clickable-card" onclick="openSection('${x[3]}','${x[4]}')"><span>${x[1]}</span><strong>${x[0]}</strong><small>${x[2]}</small></div>`).join("");document.getElementById("paymentRows").innerHTML=payable.sort((a,b)=>String(a.due||"").localeCompare(String(b.due||""))).map(c=>`<tr><td>${c.name}<div class="muted">Bill #${c.billNumber}</div></td><td>${c.service}</td><td>${money(c.amount)}</td><td>${c.due}</td><td><span class="badge ${slug(c.status)}">${c.status}</span></td><td><button class="icon-btn" onclick="markPaid(${c.id})">Mark Paid</button></td></tr>`).join("")||'<tr><td colspan="6">No outstanding customer payments.</td></tr>';const history=[...payments].sort((a,b)=>String(b.createdAt||b.date||"").localeCompare(String(a.createdAt||a.date||"")));document.getElementById("paymentHistoryRows").innerHTML=history.map(p=>`<tr><td>${p.date||""}</td><td>${p.customerName||"Unknown"}<div class="muted">${p.billNumber?`Bill #${p.billNumber}`:""}</div></td><td>${p.service||"—"}</td><td>${money(p.amount)}</td><td>${p.agent||"—"}</td><td><button class="icon-btn" onclick="removePayment(${p.id})">Remove</button></td></tr>`).join("")||'<tr><td colspan="6">No payments recorded yet.</td></tr>'}
function renderExpenses(){document.getElementById("expenseRows").innerHTML=[...expenses].sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))).map(x=>`<tr><td>${x.date}</td><td>${x.description}</td><td>${x.category}</td><td>${money(x.amount)}</td><td><button class="icon-btn" onclick="removeExpense(${x.id})">Remove</button></td></tr>`).join("")||'<tr><td colspan="5">No expenses recorded yet.</td></tr>'}
function renderReports(){const income=payments.reduce((s,p)=>s+Number(p.amount||0),0),exp=expenses.reduce((s,x)=>s+Number(x.amount||0),0),profit=income-exp;document.getElementById("reportStats").innerHTML=[
 [money(income),"Income","Customer revenue","payments"],
 [money(exp),"Expenses","Recorded spending","expenses"],
 [money(profit),"Estimated Profit","Income minus expenses","reports"],
 [customers.length,"Customers","All records","customers"]
].map(x=>`<div class="stat clickable-card" onclick="openSection('${x[3]}')"><span>${x[1]}</span><strong>${x[0]}</strong><small>${x[2]}</small></div>`).join("");const services=[...new Set([...customers.map(c=>c.service),...payments.map(p=>p.service)].filter(Boolean))];document.getElementById("profitByService").innerHTML=services.map(s=>{const v=payments.filter(p=>p.service===s).reduce((a,p)=>a+Number(p.amount||0),0);return `<div class="notice"><strong>${s}</strong><span>${money(v)} received</span></div>`}).join("")||'<div class="notice"><strong>No revenue recorded yet</strong></div>';const serviceCounts=customers.reduce((m,c)=>(m[c.service]=(m[c.service]||0)+1,m),{}),topService=Object.entries(serviceCounts).sort((a,b)=>b[1]-a[1])[0]?.[0]||"—",upcomingProviderPayments=accounts.filter(a=>{const days=daysFromToday(a.providerDue);return days!==null&&days>=0&&days<=30}).length;document.getElementById("snapshot").innerHTML=`<div class="notice"><strong>Most customers</strong><span>${topService}</span></div><div class="notice"><strong>Available account slots</strong><span>${accounts.filter(a=>!["Expired","Inactive"].includes(a.status)).reduce((s,a)=>s+availableSlots(a),0)}</span></div><div class="notice"><strong>Provider payments in next 30 days</strong><span>${upcomingProviderPayments}</span></div>`}
function updateCustomerAccountOptions(selected=""){const ca=document.getElementById("customerAccount");if(!ca)return;const service=document.getElementById("customerService")?.value||"";const eligible=accounts.filter(a=>!["Expired","Inactive"].includes(a.status)&&(!service||a.service===service)&&(availableSlots(a)>0||a.name===selected));ca.innerHTML='<option value="">Not assigned</option>'+eligible.map(a=>`<option value="${a.name}">${a.name} — ${availableSlots(a)} available</option>`).join('');ca.value=eligible.some(a=>a.name===selected)?selected:""}
function fillSelects(){const services=[...new Set(customers.map(c=>c.service))];const sf=document.getElementById("serviceFilter");if(sf){const current=sf.value;sf.innerHTML='<option value="">All services</option>'+services.map(s=>`<option>${s}</option>`).join('');sf.value=current}updateCustomerAccountOptions(document.getElementById("customerAccount")?.value||"");const pc=document.getElementById("paymentCustomer");if(pc)pc.innerHTML=customers.map(c=>`<option value="${c.id}">${c.name} — ${c.service}</option>`).join("")}
document.getElementById("customerService").onchange=()=>{updateSubscriptionPlans();updateCustomerAccountOptions()};document.getElementById("customerPlan").onchange=updateSubscriptionPrice;
document.getElementById("customerSearch").oninput=renderCustomers;document.getElementById("statusFilter").onchange=renderCustomers;document.getElementById("serviceFilter").onchange=renderCustomers;document.getElementById("reminderFilter").onchange=renderReminders;
function editCustomer(id){
 const c=customers.find(x=>x.id===id);if(!c)return;
 const form=document.getElementById("customerForm");
 document.getElementById("customerModalTitle").textContent="Edit Customer";
 document.getElementById("customerSaveButton").textContent="Save Changes";
 form.editId.value=String(c.id);
 ["name","phone","email","referenceNumber","billNumber","service","plan","amount","signupFee","account","status","due","expiry"].forEach(k=>{if(form.elements[k])form.elements[k].value=c[k]??""});
 updateSubscriptionPlans();
 form.plan.value=c.plan||"";
 form.amount.value=c.amount||0;
 updateCustomerAccountOptions(c.account||"");
 document.getElementById("customerModal").classList.add("open");
}
function resetCustomerForm(){
 const form=document.getElementById("customerForm");form.reset();form.editId.value="";
 document.getElementById("customerModalTitle").textContent="Add Customer";
 document.getElementById("customerSaveButton").textContent="Save Customer";
 fillSubscriptionServices();
}
document.getElementById("customerForm").onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));const editId=Number(f.editId||0);delete f.editId;const existing=customers.find(x=>x.id===editId);if(f.account&&f.account!==existing?.account){const target=accounts.find(a=>a.name===f.account);if(!target||target.service!==f.service||availableSlots(target)<=0){toast("Choose an available account for this service");return}}const clean={...f,billNumber:String(f.billNumber),amount:+f.amount,signupFee:+(f.signupFee||0),profile:f.name};if(["Did Not Renew","Available","Expired"].includes(clean.status))clean.account="";if(editId){const i=customers.findIndex(x=>x.id===editId);if(i>=0)customers[i]={...customers[i],...clean};toast("Customer information updated")}else{customers.push({...clean,id:Date.now(),status:f.status||"Active"});toast("Customer added")}refreshAutomaticStatuses();e.target.closest(".modal").classList.remove("open");resetCustomerForm();save()};
function editAccount(id){const a=accounts.find(x=>x.id===id);if(!a)return;const form=document.getElementById("accountForm");document.getElementById("accountModalTitle").textContent="Edit Subscription Account";document.getElementById("accountSaveButton").textContent="Save Changes";form.editId.value=String(a.id);["service","name","login","password","slots","providerDue","providerExpiry","cost","status"].forEach(k=>{if(form.elements[k])form.elements[k].value=a[k]??""});form.elements.used.value=a.manualUsed??a.used??0;form.elements.status.value=a.manualStatus??a.status??"Available";document.getElementById("accountModal").classList.add("open")}
function resetAccountForm(){const form=document.getElementById("accountForm");form.reset();form.editId.value="";document.getElementById("accountModalTitle").textContent="Add Subscription Account";document.getElementById("accountSaveButton").textContent="Save Account"}
document.getElementById("accountForm").onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));const editId=Number(f.editId||0);delete f.editId;const clean={...f,slots:+f.slots,manualUsed:+f.used,used:+f.used,cost:+f.cost,manualStatus:f.status};if(editId){const i=accounts.findIndex(x=>x.id===editId);if(i>=0){const oldName=accounts[i].name;accounts[i]={...accounts[i],...clean};if(oldName!==clean.name)customers.forEach(c=>{if(c.account===oldName)c.account=clean.name});toast("Subscription account updated")}}else{accounts.push({...clean,id:Date.now()});toast("Subscription account added")}refreshAutomaticStatuses();e.target.reset();e.target.closest(".modal").classList.remove("open");resetAccountForm();save()};
document.getElementById("paymentForm").onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));const c=customers.find(x=>x.id==f.customerId);c.due=f.newDue;c.expiry=f.newExpiry;c.status="Active";payments.push({id:Date.now(),customerId:c.id,billNumber:c.billNumber,customerName:c.name,service:c.service,amount:+f.amount,date:new Date().toISOString().slice(0,10),newDue:f.newDue,newExpiry:f.newExpiry,agent:getAgentName(),createdAt:new Date().toISOString()});e.target.reset();e.target.closest(".modal").classList.remove("open");save();toast("Payment marked as received")};
document.getElementById("expenseForm").onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));expenses.unshift({...f,id:Date.now(),amount:+f.amount,agent:getAgentName(),createdAt:new Date().toISOString()});e.target.reset();e.target.closest(".modal").classList.remove("open");save();toast("Expense added")};
document.getElementById("resetData").onclick=()=>{
  if(!confirm("Clear the local copy on this device only? The shared spreadsheet will not be deleted.")) return;
  setSyncMode("local");
  customers=[]; accounts=[]; expenses=[]; payments=[];
  saveLocalOnly(); render(); updateSyncUI("Local copy cleared — shared database was not changed");
};
document.querySelectorAll("[data-modal=\"customerModal\"]").forEach(b=>b.addEventListener("click",resetCustomerForm));
ensureBillNumbers();
fillSubscriptionServices();
render();



function getAgentName(){return localStorage.getItem("kt_agent_name")||"King Tech Agent"}
function saveAgentName(){const v=document.getElementById("agentNameInput").value.trim();if(v){localStorage.setItem("kt_agent_name",v);toast("Agent name saved")}updateSyncUI()}
function getSyncUrl(){return (localStorage.getItem("kt_sync_url")||DEFAULT_SYNC_URL||"").trim()}
function deviceId(){let id=localStorage.getItem("kt_device_id");if(!id){id="device-"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);localStorage.setItem("kt_device_id",id)}return id}
function syncMode(){return localStorage.getItem("kt_sync_mode")||(localStorage.getItem("kt_migration_complete")==="yes"?"migrated":"local")}
function sharedReady(){return ["migrated","joined"].includes(syncMode())}
function setSyncMode(mode){localStorage.setItem("kt_sync_mode",mode);if(["migrated","joined"].includes(mode))localStorage.setItem("kt_migration_complete","yes");else localStorage.removeItem("kt_migration_complete")}

function syncPayload(){
  refreshAutomaticStatuses();
  return {schemaVersion:"2.0",sheetId:LIVE_SHEET_ID,deviceId:deviceId(),agent:getAgentName(),updatedAt:new Date().toISOString(),customers,accounts,payments,expenses,reminderHistory:Object.entries(bulkReminderLog||{}).map(([key,sentAt])=>({id:key,key,sentAt}))};
}
function hashData(data){try{return JSON.stringify(data).length+":"+(data.updatedAt||"")}catch{return String(Date.now())}}
function updateSyncUI(message){
  const url=getSyncUrl(), mode=syncMode();
  const badge=document.getElementById("syncStatusBadge"), text=document.getElementById("syncStatusText");
  const input=document.getElementById("syncUrlInput"), agent=document.getElementById("agentNameInput");
  if(input&&!input.value)input.value=url;if(agent&&!agent.value)agent.value=getAgentName();
  if(!badge||!text)return;
  const labels={migrated:"Migrated",joined:"Joined",local:url?"Not connected":"Local"};
  badge.textContent=labels[mode]||"Local";
  badge.className="badge "+(sharedReady()?"active":"due-soon");
  if(message){text.textContent=message;return}
  if(mode==="migrated")text.textContent="Original device connected — changes sync automatically every 20 seconds";
  else if(mode==="joined")text.textContent="Agent device joined — shared records refresh automatically every 20 seconds";
  else text.textContent=url?"Choose Migrate This Device or Join Shared Database":"Local mode — paste the Apps Script Web App URL to begin";
}
function apiJsonp(action,payload={}){
  const base=getSyncUrl();if(!base)return Promise.reject(new Error("Sync URL is not configured"));
  return new Promise((resolve,reject)=>{
    const callback="ktSyncCb_"+Date.now()+"_"+Math.random().toString(36).slice(2);
    const timer=setTimeout(()=>{cleanup();reject(new Error("Connection timed out"))},20000);
    const script=document.createElement("script");
    function cleanup(){clearTimeout(timer);delete window[callback];script.remove()}
    window[callback]=(result)=>{cleanup();if(!result||!result.ok)reject(new Error(result?.error||"Sync request failed"));else resolve(result)};
    const params=new URLSearchParams({action,callback,...Object.fromEntries(Object.entries(payload).map(([k,v])=>[k,typeof v==="string"?v:JSON.stringify(v)]))});
    script.src=base+(base.includes("?")?"&":"?")+params.toString();
    script.onerror=()=>{cleanup();reject(new Error("Could not reach Apps Script"))};
    document.head.appendChild(script);
  });
}
async function apiWrite(action,payload={}){
  const url=getSyncUrl();if(!url)throw new Error("Sync URL is not configured");
  await fetch(url,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action,...payload})});
  return {ok:true,queued:true};
}
function localCounts(){return {customers:customers.length,accounts:accounts.length,payments:payments.length,expenses:expenses.length}}
function sameCounts(a,b){return ["customers","accounts","payments","expenses"].every(k=>Number(a?.[k]||0)===Number(b?.[k]||0))}
function makeCheckpoint(label){
  const checkpoint={label,createdAt:new Date().toISOString(),data:syncPayload()};
  localStorage.setItem("kt_sync_checkpoint",JSON.stringify(checkpoint));
  return checkpoint;
}
async function connectSharedSync(){
  const input=document.getElementById("syncUrlInput");const url=input.value.trim();
  if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/.test(url)){toast("Paste the full Apps Script URL ending in /exec");return}
  localStorage.setItem("kt_sync_url",url);updateSyncUI("Testing connection — no local records will be changed…");
  try{
    await apiJsonp("ping",{sheetId:LIVE_SHEET_ID});
    await migrateExistingData();
    updateSyncUI("Migration verified — shared sync is now enabled");toast("Migration completed safely");
  }catch(e){
    console.error("Shared sync connection failed",e);
    localStorage.removeItem("kt_migration_complete");
    updateSyncUI("Migration stopped safely: "+e.message);toast("Migration stopped — local data was not replaced");
  }
}
async function migrateExistingData(){
  if(syncMode()==="migrated"){updateSyncUI("This device is already migrated");return}
  const counts=localCounts();
  if(counts.customers===0&&counts.accounts===0)throw new Error("No local records found to migrate");
  const migrationToken="mig-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,10);
  const migrationBackup={app:"King Tech Subscription Manager",version:"2.6-stable-migration",exportedAt:new Date().toISOString(),migrationToken,deviceId:deviceId(),agent:getAgentName(),data:syncPayload()};
  localStorage.setItem("kt_pre_migration_backup",JSON.stringify(migrationBackup));
  makeCheckpoint("Before first migration");
  updateSyncUI(`Uploading protected copy (${counts.customers} customers)…`);
  await apiWrite("migrate",{token:migrationToken,data:migrationBackup.data});
  let status=null;
  for(let attempt=1;attempt<=15;attempt++){
    await new Promise(r=>setTimeout(r,2000));
    try{status=await apiJsonp("getMigrationStatus",{token:migrationToken});if(status.completed)break}catch(_){ }
    updateSyncUI(`Waiting for spreadsheet confirmation (${attempt}/15)…`);
  }
  if(!status||!status.completed)throw new Error("Spreadsheet did not confirm the upload");
  if(!sameCounts(counts,status.counts))throw new Error(`Count check failed. Device: ${JSON.stringify(counts)}; Sheet: ${JSON.stringify(status.counts||{})}`);
  const verify=await apiJsonp("getSnapshot",{sheetId:LIVE_SHEET_ID});
  const remote={customers:verify.data?.customers?.length||0,accounts:verify.data?.accounts?.length||0,payments:verify.data?.payments?.length||0,expenses:verify.data?.expenses?.length||0};
  if(!sameCounts(counts,remote))throw new Error(`Final verification failed. Device: ${JSON.stringify(counts)}; Sheet: ${JSON.stringify(remote)}`);
  setSyncMode("migrated");
  localStorage.setItem("kt_last_migration",new Date().toISOString());
  localStorage.setItem("kt_last_verified_counts",JSON.stringify(counts));
  // Deliberately do not pull after migration. The device copy remains unchanged.
  return verify;
}
async function joinSharedDatabase(){
  const input=document.getElementById("syncUrlInput");const url=(input?.value||"").trim();
  if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/.test(url)){toast("Paste the full Apps Script URL ending in /exec");return}
  localStorage.setItem("kt_sync_url",url);
  updateSyncUI("Checking the shared database — this device will not upload anything…");
  try{
    await apiJsonp("ping",{sheetId:LIVE_SHEET_ID});
    const result=await apiJsonp("getSnapshot",{sheetId:LIVE_SHEET_ID});
    const d=result.data||{};
    const remoteCounts={customers:Array.isArray(d.customers)?d.customers.length:0,accounts:Array.isArray(d.accounts)?d.accounts.length:0,payments:Array.isArray(d.payments)?d.payments.length:0,expenses:Array.isArray(d.expenses)?d.expenses.length:0};
    if(remoteCounts.customers===0)throw new Error("The shared customer list is empty");
    const local=localCounts();
    const localTotal=local.customers+local.accounts+local.payments+local.expenses;
    if(localTotal>0&&!confirm(`This device currently has ${local.customers} customers, ${local.accounts} accounts, ${local.payments} payments and ${local.expenses} expenses. Replace only this device's local copy with the shared database containing ${remoteCounts.customers} customers and ${remoteCounts.accounts} accounts? A recovery checkpoint will be saved first.`)){
      updateSyncUI("Join cancelled — local data was not changed");return;
    }
    makeCheckpoint("Before joining shared database");
    localStorage.setItem("kt_pre_join_backup",JSON.stringify({app:"King Tech Subscription Manager",version:"2.6-stable-join",exportedAt:new Date().toISOString(),data:syncPayload()}));
    customers=d.customers||[];accounts=d.accounts||[];payments=d.payments||[];expenses=d.expenses||[];
    if(d.reminderLog&&typeof d.reminderLog==="object")bulkReminderLog=d.reminderLog;
    refreshAutomaticStatuses();saveLocalOnly();render();
    setSyncMode("joined");localStorage.setItem("kt_last_join",new Date().toISOString());
    updateSyncUI(`Joined successfully — ${remoteCounts.customers} customers loaded`);toast("Shared database joined");
  }catch(e){console.error("Join failed",e);setSyncMode("local");updateSyncUI("Join stopped safely: "+e.message);toast("Could not join — local copy kept")}
}
async function pushSharedData(){
  if(syncBusy||!getSyncUrl()||!sharedReady())return;
  syncBusy=true;
  try{updateSyncUI("Uploading changes…");await apiWrite("saveSnapshot",{data:syncPayload()});lastSharedHash=String(Date.now());updateSyncUI("Synced "+new Date().toLocaleTimeString())}
  catch(e){updateSyncUI("Offline/local copy saved — sync will retry")}
  finally{syncBusy=false}
}
async function pullSharedData(showToast=false){
  if(syncBusy||!getSyncUrl()||!sharedReady())return;
  syncBusy=true;
  try{
    updateSyncUI("Checking for updates…");const result=await apiJsonp("getSnapshot",{sheetId:LIVE_SHEET_ID});
    const d=result.data||{};
    const remoteCounts={customers:Array.isArray(d.customers)?d.customers.length:0,accounts:Array.isArray(d.accounts)?d.accounts.length:0,payments:Array.isArray(d.payments)?d.payments.length:0,expenses:Array.isArray(d.expenses)?d.expenses.length:0};
    const local=localCounts();
    if(remoteCounts.customers===0&&local.customers>0)throw new Error("Safety block: shared customer list is empty");
    if(remoteCounts.accounts===0&&local.accounts>0)throw new Error("Safety block: shared account list is empty");
    makeCheckpoint("Before shared download");
    if(Array.isArray(d.customers))customers=d.customers;
    if(Array.isArray(d.accounts))accounts=d.accounts;
    if(Array.isArray(d.payments))payments=d.payments;
    if(Array.isArray(d.expenses))expenses=d.expenses;
    if(d.reminderLog&&typeof d.reminderLog==="object")bulkReminderLog=d.reminderLog;
    refreshAutomaticStatuses();saveLocalOnly();render();lastSharedHash=result.hash||"";
    updateSyncUI("Updated "+new Date().toLocaleTimeString());if(showToast)toast("Shared list refreshed")
  }catch(e){updateSyncUI("Protected local copy kept: "+e.message);if(showToast)toast("Local copy protected")}
  finally{syncBusy=false}
}
function exportBackup(silent=false){
  const backup={app:"King Tech Subscription Manager",version:"2.0",exportedAt:new Date().toISOString(),deviceId:deviceId(),agent:getAgentName(),data:syncPayload()};
  const blob=new Blob([JSON.stringify(backup,null,2)],{type:"application/json"});
  const objectUrl=URL.createObjectURL(blob);const a=document.createElement("a");a.href=objectUrl;a.download=`king-tech-backup-${new Date().toISOString().slice(0,10)}.json`;a.style.display="none";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(objectUrl),3000);if(!silent)toast("Backup exported")
}
async function importBackup(){
  const file=document.getElementById("backupFile").files[0];if(!file){toast("Choose a backup file");return}
  try{const raw=JSON.parse(await file.text());const d=raw.data||raw;
    if(!Array.isArray(d.customers)||!Array.isArray(d.accounts))throw new Error("Invalid backup");
    if(!confirm(`Import ${d.customers.length} customers and ${d.accounts.length} accounts?`))return;
    customers=d.customers;accounts=d.accounts;payments=d.payments||[];expenses=d.expenses||[];
    if(d.reminderLog)bulkReminderLog=d.reminderLog;refreshAutomaticStatuses();save();toast("Backup imported")
  }catch(e){toast("Backup file could not be imported")}
}
window.addEventListener("online",()=>{updateSyncUI("Internet restored");if(sharedReady())pushSharedData()});
window.addEventListener("offline",()=>updateSyncUI("Offline — changes are saved on this device"));
setInterval(()=>{if(getSyncUrl()&&navigator.onLine&&sharedReady())pullSharedData(false)},SYNC_INTERVAL);
setTimeout(()=>{updateSyncUI();if(getSyncUrl()&&navigator.onLine&&sharedReady())pullSharedData(false)},800);

function todayKey(){
  const d=new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function bulkEligibleCustomers(){
  const status=document.getElementById("bulkStatusFilter")?.value||"";
  const service=document.getElementById("bulkServiceFilter")?.value||"";
  const duplicateMode=document.getElementById("bulkDuplicateMode")?.value||"skip";
  const today=todayKey();
  return customers.filter(c=>{
    const payable=isPayableCustomer(c);
    const matchesStatus=!status||c.status===status;
    const matchesService=!service||c.service===service;
    const duplicateOk=duplicateMode==="allow"||bulkReminderLog[c.id]!==today;
    return payable&&matchesStatus&&matchesService&&duplicateOk;
  });
}
function renderBulkMessages(){
  const serviceSelect=document.getElementById("bulkServiceFilter");
  if(!serviceSelect)return;
  const current=serviceSelect.value;
  const services=[...new Set(customers.map(c=>c.service).filter(Boolean))].sort();
  serviceSelect.innerHTML='<option value="">All services</option>'+services.map(s=>`<option>${s}</option>`).join("");
  serviceSelect.value=current;

  const eligible=bulkEligibleCustomers();
  const today=todayKey();
  document.getElementById("bulkEligibleCount").textContent=eligible.length;
  document.getElementById("bulkSelectedCount").textContent=bulkSelectedIds.length;
  document.getElementById("bulkSentTodayCount").textContent=Object.values(bulkReminderLog).filter(v=>v===today).length;
  document.getElementById("bulkMissingPhoneCount").textContent=eligible.filter(c=>!String(c.phone||"").replace(/\D/g,"")).length;

  const rows=document.getElementById("bulkCustomerRows");
  rows.innerHTML=eligible.map(c=>`
    <tr>
      <td><input type="checkbox" ${bulkSelectedIds.includes(c.id)?"checked":""} onchange="toggleBulkCustomer(${c.id},this.checked)"></td>
      <td><strong>${c.name}</strong><div class="muted">${c.phone||"No WhatsApp number"} • Bill #${c.billNumber}</div></td>
      <td>${c.service}</td>
      <td><span class="badge ${slug(c.status)}">${c.status}</span></td>
      <td>${money(c.amount)}</td>
      <td>${bulkReminderLog[c.id]||"Never"}</td>
    </tr>`).join("")||'<tr><td colspan="6" class="muted">No customers match the selected filters.</td></tr>';
}
function toggleBulkCustomer(id,checked){
  if(checked&&!bulkSelectedIds.includes(id))bulkSelectedIds.push(id);
  if(!checked)bulkSelectedIds=bulkSelectedIds.filter(x=>x!==id);
  renderBulkMessages();
}
function toggleBulkSelectAll(checked){
  const ids=bulkEligibleCustomers().map(c=>c.id);
  bulkSelectedIds=checked?[...new Set([...bulkSelectedIds,...ids])]:bulkSelectedIds.filter(id=>!ids.includes(id));
  renderBulkMessages();
}
function selectBulkFiltered(){
  bulkSelectedIds=[...new Set(bulkEligibleCustomers().map(c=>c.id))];
  renderBulkMessages();
  toast(`${bulkSelectedIds.length} customers selected`);
}
function clearBulkSelection(){
  bulkSelectedIds=[];
  document.getElementById("bulkSelectAll").checked=false;
  renderBulkMessages();
}
function buildBulkMessage(c,forcedType){
  const type=forcedType==="automatic"?(["Overdue","Expired"].includes(c.status)?"overdue":c.status==="Due Today"?"today":"friendly"):forcedType;
  if(type==="overdue")return `👑 *KING TECH PAYMENT NOTICE*

Hello *${c.name}*,

Your subscription payment is currently *OVERDUE*.

🧾 *Bill Number:* #${c.billNumber}
📺 *Service:* ${c.service}
💰 *Amount Due:* ${money(c.amount)}
📅 *Due Date:* ${c.due}

To avoid interruption or restore your service, please complete payment as soon as possible.

💳 *MMG Pay Merchant*
*Merchant Number:* 7107260
*Merchant Name:* King Tech

📸 After payment, please send a clear receipt and bill number *#${c.billNumber}*.

Thank you for choosing *King Tech* 👑`;
  if(type==="today")return `👑 *KING TECH PAYMENT REMINDER*

Hello *${c.name}*,

Your subscription payment is due *TODAY*.

🧾 *Bill Number:* #${c.billNumber}
📺 *Service:* ${c.service}
💰 *Amount Due:* ${money(c.amount)}
📅 *Due Date:* ${c.due}

💳 *MMG Pay Merchant*
*Merchant Number:* 7107260
*Merchant Name:* King Tech

📸 Please send your payment receipt with bill number *#${c.billNumber}* after paying.

Thank you for choosing *King Tech* 👑`;
  return `👑 *KING TECH SUBSCRIPTION REMINDER*

Hello *${c.name}*,

This is a friendly reminder that your subscription payment is coming up.

🧾 *Bill Number:* #${c.billNumber}
📺 *Service:* ${c.service}
💰 *Amount Due:* ${money(c.amount)}
📅 *Payment Due:* ${c.due}

💳 *MMG Pay Merchant*
*Merchant Number:* 7107260
*Merchant Name:* King Tech

📸 Once payment is completed, please send a clear receipt and include bill number *#${c.billNumber}*.

Thank you for choosing *King Tech* 👑`;
}
function previewBulkMessage(){
  const c=customers.find(x=>bulkSelectedIds.includes(x.id))||bulkEligibleCustomers()[0];
  if(!c){toast("Select at least one customer first");return}
  const type=document.getElementById("bulkMessageType").value;
  alert(buildBulkMessage(c,type));
}
function startBulkQueue(){
  const selected=customers.filter(c=>bulkSelectedIds.includes(c.id));
  const duplicateMode=document.getElementById("bulkDuplicateMode").value;
  const today=todayKey();
  bulkQueue=selected.filter(c=>{
    const hasPhone=!!String(c.phone||"").replace(/\D/g,"");
    const duplicateOk=duplicateMode==="allow"||bulkReminderLog[c.id]!==today;
    return hasPhone&&duplicateOk;
  });
  bulkQueueIndex=0;
  if(!bulkQueue.length){toast("No selected customers have a valid WhatsApp number");return}
  document.getElementById("bulkQueueCard").style.display="block";
  renderBulkCurrent();
  document.getElementById("bulkQueueCard").scrollIntoView({behavior:"smooth"});
}
function renderBulkCurrent(){
  if(!bulkQueue.length||bulkQueueIndex>=bulkQueue.length){
    document.getElementById("bulkQueueProgress").textContent="Queue completed.";
    document.getElementById("bulkCurrentCustomer").innerHTML='<div class="success-box">All queued reminders have been processed.</div>';
    return;
  }
  const c=bulkQueue[bulkQueueIndex];
  document.getElementById("bulkQueueProgress").textContent=`Customer ${bulkQueueIndex+1} of ${bulkQueue.length}`;
  document.getElementById("bulkCurrentCustomer").innerHTML=`<div class="account-card"><div class="name">${c.name}</div><div class="muted">${c.phone} • ${c.service} • Bill #${c.billNumber}</div><div style="margin-top:10px"><span class="badge ${slug(c.status)}">${c.status}</span> <strong>${money(c.amount)}</strong></div></div>`;
}
function sendCurrentBulkCustomer(){
  const c=bulkQueue[bulkQueueIndex];
  if(!c)return;
  const type=document.getElementById("bulkMessageType").value;
  openWhatsAppMessage(c.phone,buildBulkMessage(c,type));
}
function markBulkCurrentSent(){
  const c=bulkQueue[bulkQueueIndex];
  if(!c)return;
  bulkReminderLog[c.id]=todayKey();
  bulkQueueIndex++;
  save();
  renderBulkMessages();
  renderBulkCurrent();
}
function skipBulkCurrent(){
  if(bulkQueueIndex<bulkQueue.length)bulkQueueIndex++;
  renderBulkCurrent();
}
function cancelBulkQueue(){
  bulkQueue=[];
  bulkQueueIndex=0;
  document.getElementById("bulkQueueCard").style.display="none";
  toast("Bulk queue cancelled");
}
["bulkStatusFilter","bulkServiceFilter","bulkMessageType","bulkDuplicateMode"].forEach(id=>{
  document.addEventListener("change",e=>{
    if(e.target?.id===id){
      if(id==="bulkStatusFilter"||id==="bulkServiceFilter"||id==="bulkDuplicateMode"){
        bulkSelectedIds=[];
        renderBulkMessages();
      }
    }
  });
});


function openWhatsAppMessage(phone,message){
  const cleanPhone=String(phone||"").replace(/\D/g,"");
  if(!cleanPhone){
    toast("Add the customer's WhatsApp number first");
    return;
  }

  const encodedText=encodeURIComponent(message);
  const ua=navigator.userAgent||navigator.vendor||window.opera||"";
  const isAndroid=/android/i.test(ua);
  const isIOS=/iPad|iPhone|iPod/.test(ua)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);

  const universalLink=`https://wa.me/${cleanPhone}?text=${encodedText}`;
  const appLink=`whatsapp://send?phone=${cleanPhone}&text=${encodedText}`;
  const androidBusinessIntent=`intent://send?phone=${cleanPhone}&text=${encodedText}#Intent;scheme=whatsapp;package=com.whatsapp.w4b;end`;

  if(isAndroid){
    window.location.href=androidBusinessIntent;
    setTimeout(()=>{
      if(!document.hidden) window.location.href=universalLink;
    },1200);
    return;
  }

  if(isIOS){
    window.location.href=appLink;
    setTimeout(()=>{
      if(!document.hidden) window.location.href=universalLink;
    },1000);
    return;
  }

  window.open(universalLink,"_blank","noopener,noreferrer");
}



let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const button = document.getElementById('installAppButton');
  if (button) button.style.display = 'inline-flex';
});
window.addEventListener('appinstalled', () => {
  const button = document.getElementById('installAppButton');
  if (button) button.style.display = 'none';
  deferredInstallPrompt = null;
});
async function installKingTechApp() {
  if (!deferredInstallPrompt) {
    alert('Open this app from its live HTTPS website in Chrome, then use Chrome menu → Add to Home screen or Install app.');
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
}
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
}
