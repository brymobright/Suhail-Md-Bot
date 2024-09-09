const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026435425";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_02_51_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIwLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWYVpIY2VUTWxlYnBjRDhMcjhKcXFNczlTNFlMSG9UcE9TcG1QZ3dwNEVrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfQnZXc09QLVJ6NkRLWlpuNlRDSVdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI5YzcyODZmLTljYzEtNDc0Mi1hOTcxLTkzZTg1Y2ZmNzFjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA4NixcbiAgICAgIDE3MyxcbiAgICAgIDEzLFxuICAgICAgOCxcbiAgICAgIDk1LFxuICAgICAgODgsXG4gICAgICA0MyxcbiAgICAgIDQwLFxuICAgICAgNzYsXG4gICAgICA4MSxcbiAgICAgIDE2NCxcbiAgICAgIDEzMixcbiAgICAgIDE0MyxcbiAgICAgIDM1LFxuICAgICAgMjQwLFxuICAgICAgMjE1LFxuICAgICAgMTczLFxuICAgICAgMjIyLFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDI1NCxcbiAgICAgIDU3LFxuICAgICAgOSxcbiAgICAgIDIzOCxcbiAgICAgIDI0LFxuICAgICAgMjQ1LFxuICAgICAgOTIsXG4gICAgICAxODYsXG4gICAgICAxOTcsXG4gICAgICAyMjAsXG4gICAgICAyNDYsXG4gICAgICAxMTMsXG4gICAgICA4MCxcbiAgICAgIDc1LFxuICAgICAgMTEzLFxuICAgICAgMjE2LFxuICAgICAgMjIxLFxuICAgICAgNjIsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1BMWENZRTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0MzU0MjU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIHwnZCBIPCdkIPwnZCi8J2QoPCdkKLwnZCt8J2QmvCdkKXwnZCsIPCdkIjwnZCn8J2QnC5cIixcbiAgICBcImxpZFwiOiBcIjE2Nzk2Nzg5OTg0MDYxODozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2KzRjRUdFS0RGK2JZR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEd3cEJMcGxRNzE2M1h1SDVyM2hKR0dKWVJ3YWdBQ1pLNTJDcVRGTmdVUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5VEV0RDlkQkV0WXV2bDNteTlNMDlkYzJIUWdYVDlreFkweGpTY0JOU1ViNEt1R2RiYXh5SlRCc3R1T3ZDRDl3TWVITEtrcVdERkRFMUZ1RWFjc21CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDTjJsMzV6aHN5U1RTSy9mK2pwRGNKSDJlcXlNVmh4OElZd29uU1V0WTJGb1o3Y1RCaHBRMWpEK1ZaMnY0NTNWUFNaMDhMbDdSZHpBdFR1djRWR2toUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NDM1NDI1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTg1MDI3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
