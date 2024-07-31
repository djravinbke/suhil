const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254708430362";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  //ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1o5elJQYVM0aXNWWFNnZ1hhdlpzTndHTm9FZDJEcFJIR0lpTXJlUHpFMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDg0MzAzNjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZDNEE0RDFFREVFRkFGQzlDRkRDN0E1Mjg3M0NEQ0Q4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQwODI5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsamZORG8yMFF5eU52eERVS2NOUXdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5Yjc5NmZlLTkzY2MtNDY5NC1hZGI3LTBlYjAzY2I2MzdjZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDYzLFxuICAgICAgMTk4LFxuICAgICAgMTAxLFxuICAgICAgMjExLFxuICAgICAgMTYsXG4gICAgICAzOCxcbiAgICAgIDE1NyxcbiAgICAgIDEyNSxcbiAgICAgIDIxMCxcbiAgICAgIDEzNyxcbiAgICAgIDY2LFxuICAgICAgMjUxLFxuICAgICAgMTU2LFxuICAgICAgMTM4LFxuICAgICAgMTE1LFxuICAgICAgMTc4LFxuICAgICAgMTc4LFxuICAgICAgMTU0LFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTQyLFxuICAgICAgNDYsXG4gICAgICAxMTAsXG4gICAgICAxNDIsXG4gICAgICAyNCxcbiAgICAgIDI0OCxcbiAgICAgIDU4LFxuICAgICAgOTUsXG4gICAgICAzMyxcbiAgICAgIDI0MixcbiAgICAgIDUzLFxuICAgICAgMjQ5LFxuICAgICAgMjEwLFxuICAgICAgMTY2LFxuICAgICAgNTksXG4gICAgICAxMTIsXG4gICAgICAxNDgsXG4gICAgICAyMTcsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVhNQVY1V0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwODQzMDM2MjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDAwOTgyNjc2ODkwNzM6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlnbzk4SEVOKzZwN1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwSnFLMHdiYmVrQUhwSzRqTHNpUkFwN2lvRWhtVk1sQVFCekZzRDNWaFZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJlQ0E0VzBVQVc3NXRsUUdIY295WnNUTWgrNWFlUW9HTEZseGFDQlNDMTZ6amh6TWJEOFBkYVY0V3c1WWJ6OHNOR0c5SnpIRTM0dHpsNGp6Mnc3Y0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNiKzFEZ01ac0s5S2gyWDNObDBFanFwUzVla0F4RU5aSHVqblNQT1BjWlJLQnhVYXJuTTlhUVN4QVhCWklFc0E1bGVyMFFKVXpHZ3JaNThsQTdHNWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQzMDM2MjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDA4MjkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFVjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5TGp6MlpvaTlBSDJLLzRqaUViMkx4R3F1VUw2bGFhU2xvaEJPdXVTdHk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzg4NTUyNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQwNjI1MzQ4NVwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
