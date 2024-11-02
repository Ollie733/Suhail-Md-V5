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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_48_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNixcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSm1aZHZXZ0JYa0x4YklpblVkWHNRZEswQTJJOTRZa2NSWFFHMXVKaDM3TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidjhZV2pzckRTWmVCRFdWQ1RoU0Zpd1wiLFxuICBcInBob25lSWRcIjogXCJkYTY2YjNkZi1lODgwLTQzNjAtOGY1ZS1lNDFkMWNhMTE1MmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgNTUsXG4gICAgICAxMDIsXG4gICAgICAxNzgsXG4gICAgICAyNDQsXG4gICAgICAxODEsXG4gICAgICA2MyxcbiAgICAgIDIzNyxcbiAgICAgIDE2NSxcbiAgICAgIDI2LFxuICAgICAgMjQ0LFxuICAgICAgNixcbiAgICAgIDEyMyxcbiAgICAgIDE1MixcbiAgICAgIDc1LFxuICAgICAgMjIyLFxuICAgICAgMjEwLFxuICAgICAgMTQ4LFxuICAgICAgMTc1LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDEwMSxcbiAgICAgIDExMCxcbiAgICAgIDc2LFxuICAgICAgMjIwLFxuICAgICAgOTAsXG4gICAgICA5MixcbiAgICAgIDE5MSxcbiAgICAgIDI0LFxuICAgICAgMjQxLFxuICAgICAgMTMsXG4gICAgICAxOTYsXG4gICAgICA5MyxcbiAgICAgIDE0NixcbiAgICAgIDQzLFxuICAgICAgMTIyLFxuICAgICAgNDksXG4gICAgICAyMzIsXG4gICAgICAzOCxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxNkI5SkZIR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMzc5OTQwNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDk2NjI5NTA1MDY2ODQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbTgzcm9IRUxPNGs3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInM2K0VmS3lPUG1Cb09HaWRJK2g2Tk9qNHlKVmdzSTJYYWJBcCtuRE1HQ0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTWF3Z1pUVUVLU3dCSnBZbEFoVjllOXphRmg1MmRUWnJzcGlMVUUyS2FXUnF1eS9DNjh2ZmtJOThIVDN6SlJpK3htRHNxbVJzNEFPNHhhbTlpNTNPQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFpONEJySW1QMDBveVhDNHV4VURRdUxZSm9PcFR6SDdQTEJaTXdPUjBMYkVzM045aHVMSFp3elJsdmswMEZ5eU1tN3FnMXdTYk1oRmRYdUJGVUpHaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMzc5OTQwNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDY4OTE5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
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
