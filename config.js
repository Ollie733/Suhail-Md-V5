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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349114238804";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114238804";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2349114238804";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_02_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakJjMVdmdzJRRjEvbzBoRnVtNDB4SCtwNGF4bWpqYnJsQVNYdkROMEY2MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVJHRG1BZ3ZRVy00enhSNjN2b2V2d1wiLFxuICBcInBob25lSWRcIjogXCIzNjkzMDVkNC1jZDlkLTRiNTctYmUxYi1kMjI4ZGZjMmFhNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTQ2LFxuICAgICAgMTE1LFxuICAgICAgMTY3LFxuICAgICAgOTksXG4gICAgICAxNDgsXG4gICAgICAxMDMsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICAxMTIsXG4gICAgICAxMjAsXG4gICAgICAxNTUsXG4gICAgICAyMTgsXG4gICAgICAzMCxcbiAgICAgIDE0MSxcbiAgICAgIDE5MSxcbiAgICAgIDE0MCxcbiAgICAgIDExNSxcbiAgICAgIDMzLFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTMwLFxuICAgICAgOTQsXG4gICAgICA4LFxuICAgICAgMTEzLFxuICAgICAgMTk5LFxuICAgICAgMTUwLFxuICAgICAgMjA1LFxuICAgICAgMjAxLFxuICAgICAgMTE3LFxuICAgICAgNDUsXG4gICAgICAyNSxcbiAgICAgIDQwLFxuICAgICAgMjE4LFxuICAgICAgMTg1LFxuICAgICAgNzQsXG4gICAgICA4MCxcbiAgICAgIDE1OSxcbiAgICAgIDE5OCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5XNlBUMUFYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDcyMzY1MzcyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxNDc0NzUwMzg2MzA2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGZFd2NJQ0VPK1V1cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwUGpYYm4yVkQyaXFhUDYvRTZiSmZMdVprZ24xaWNlRWJYNlJxNGRSU2lVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBrbitqd2huTS8zNUVwWVZvbVlzcGErRWs4VXR3ck14L1REdllaenpBQzl3YWoyeHRkaVBIcWZjOEhGZVlzWmFicFg3SmFVc0dPODNIeWNYcUF6akN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxVOWE2Tml6K3dkVkp2dHdFUlVyWGtPb0JTUHFCS0thODZxb3FzWlFoQ2o2NC9qeEhkd2hrOGJIQ05wOVgzS0ZLQ0gvUkZ5cFBjYm9CQUFCbmFyQ2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzIzNjUzNzI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTAzMzQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRXFwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFcXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4U3ZXWkIvenFlRk9wL2ZvOHlIWUpwRHQ1ODNNSk1EMDJHU2VBM2pVeHQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3NjM1NjY2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMTAzMzUxMjg3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Grandpa Cyril",


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
