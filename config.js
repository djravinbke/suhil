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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_18_52_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICA0MixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDY1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjlsNGE0MFRUckJyNjV4ejVSMlVsRUtZeWJKR0ZLNVdzL0lEZUFaWTVWYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDg0MzAzNjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5RDUyOUFCOEYzMzI1NUE0RjEyMEM1OEQ1RTgyMDFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI3OTE1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwODQzMDM2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUVDMEMzQzEwMTREOTdFMkVENTFFN0M3RTQ0OUM2QkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjc5MTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5pM3psSTRfUjBLcEJ3NGRiQlgxUkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk1ZDRlNjQtZTNlNC00ODFiLTg2YzgtYmE5NTk0MTE3MjI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTIxLFxuICAgICAgMTkzLFxuICAgICAgMTIxLFxuICAgICAgMTg0LFxuICAgICAgMjIzLFxuICAgICAgMTEsXG4gICAgICAyNTUsXG4gICAgICAxMzYsXG4gICAgICA2NixcbiAgICAgIDQxLFxuICAgICAgMjA5LFxuICAgICAgMjEzLFxuICAgICAgMTk2LFxuICAgICAgMjI5LFxuICAgICAgMTQ0LFxuICAgICAgMjI2LFxuICAgICAgMjA2LFxuICAgICAgMTAsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAyMDYsXG4gICAgICAxMDcsXG4gICAgICAxNzMsXG4gICAgICAyMzMsXG4gICAgICA4OSxcbiAgICAgIDIzNixcbiAgICAgIDAsXG4gICAgICAyMTAsXG4gICAgICAxMTgsXG4gICAgICAyMzEsXG4gICAgICAxODksXG4gICAgICAxMjksXG4gICAgICAxMjgsXG4gICAgICAyMzEsXG4gICAgICAxMjQsXG4gICAgICAyMTgsXG4gICAgICAxODMsXG4gICAgICAyMjcsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQzhEVjZTRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA4NDMwMzYyOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MDA5ODI2NzY4OTA3MzoxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJESiBSQVZJTiBCXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNnbzk4SEVPckpuN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwSnFLMHdiYmVrQUhwSzRqTHNpUkFwN2lvRWhtVk1sQVFCekZzRDNWaFZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9KTkUwdlIxbU5Odjlud1g1TzlBSGlZajhJSjcyOVUzODN1OGVmWTVQSDVJSjBlRi95bTNpSVlnOGtZTDlhOTRnemozSFlRNXg4SlhGQ056QnBvQUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjR6VzQ0TzZEWUdvelQ5QnpaQ2J1d1BiV3FWT2ZBM1pMalVLcEpQdFZEanlXTVpIL2JMME1STW42OXhBbVNxMWdkcXprazJuL0R4RWdETkExZFI3T2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODQzMDM2MjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjc5MTUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSW5zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJbnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJQ004d281VVhWYTVmS2VBNDZ6Mzd2am1yWENHa1h6enNQSFRoeFJTeUlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzg4NTUyNTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI3OTE1Mjk2OFwifSIKfQ==


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
