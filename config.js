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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_57_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZWazUva2F5YThLOG1Ndnl6ZFM1V3ZxTVNtVGtSd2hqZ3FOOENvWGpXY0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFrUmNMbXhXUmlleGlZdmxxZUNrZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGMxMTVkZTgtNTY5My00NjdmLWFjODQtMDZkOGY5MzBjMmNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjA1LFxuICAgICAgNjcsXG4gICAgICAyMzgsXG4gICAgICAxMzcsXG4gICAgICAyNDUsXG4gICAgICA4OSxcbiAgICAgIDI0NyxcbiAgICAgIDE3NCxcbiAgICAgIDIyOSxcbiAgICAgIDE5MSxcbiAgICAgIDIzNyxcbiAgICAgIDYxLFxuICAgICAgMjIyLFxuICAgICAgMTYxLFxuICAgICAgMzgsXG4gICAgICAxMTIsXG4gICAgICAxNTgsXG4gICAgICAyNDcsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMTA0LFxuICAgICAgMTYxLFxuICAgICAgMTUwLFxuICAgICAgNzksXG4gICAgICAxOTgsXG4gICAgICAyMjMsXG4gICAgICA2LFxuICAgICAgMjUzLFxuICAgICAgMjE4LFxuICAgICAgMjQ4LFxuICAgICAgMjU0LFxuICAgICAgMTU3LFxuICAgICAgMTcwLFxuICAgICAgMTczLFxuICAgICAgOTUsXG4gICAgICA5MSxcbiAgICAgIDI2LFxuICAgICAgMzYsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUE4WTM3Q0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjM3OTk0MDU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ5NjYyOTUwNTA2Njg0OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWk4M3JvSEVNYVJnTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzNitFZkt5T1BtQm9PR2lkSStoNk5PajR5SlZnc0kyWGFiQXArbkRNR0NBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldJREJGSk9KUnF2eGVKV2QrTmVhaEhoM014VmJIUlVHRjFqbnZzSlRuS09IYXRpVXdpU05yYjRPZkpuYXk2aC9JOEZDT2N5YzNpUUkrWUs2Y1l6c0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVNMzBmbkVzdEdxYWNDYlJLUWszSnhoMjZ5RjNtOTBpMUs2THdaaDlWaklzT0hnM3FRZG5ySk5lVDZuYmlkM3JaTVdnSjNVamd3ZWN1UFU0eEVCQURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjM3OTk0MDU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDE1MjY0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVuWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW5ZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUXdDTCtNQmNXMVJRYXp1L1pRRk1ZZHFscHQ3VDFTWWw4NGMvTnpYYUZmMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDAyMjMwODU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwMTUxNDg2NDc5XCJ9Igp9"  // PUT your SESSION_ID 


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
