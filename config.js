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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347013029177";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_02_11_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVwOU04d0dHMEpFd3pPMVBOK3drV0ZUc0lKVklVVmV4RW1WVHpkS0V6Z2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1CY0k5aThGU0xhdHZIQk9LZFE0eXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE1YWM2Y2MtZjFhZi00N2IxLWI3N2ItZGEzOTQxNWFkYzAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMTExLFxuICAgICAgMjA5LFxuICAgICAgMTg5LFxuICAgICAgMTMxLFxuICAgICAgMTIsXG4gICAgICA3LFxuICAgICAgMzQsXG4gICAgICAyMDksXG4gICAgICAxMDUsXG4gICAgICAyNDcsXG4gICAgICAyMTIsXG4gICAgICA0NyxcbiAgICAgIDIxMyxcbiAgICAgIDIyMixcbiAgICAgIDEzMSxcbiAgICAgIDE1MyxcbiAgICAgIDE3MyxcbiAgICAgIDIzLFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDE0NSxcbiAgICAgIDUzLFxuICAgICAgMTk4LFxuICAgICAgODgsXG4gICAgICAxNTcsXG4gICAgICA4NSxcbiAgICAgIDEwMSxcbiAgICAgIDI0LFxuICAgICAgMjIsXG4gICAgICAyNDcsXG4gICAgICAyNTEsXG4gICAgICAzNSxcbiAgICAgIDkzLFxuICAgICAgMTc5LFxuICAgICAgODksXG4gICAgICA1OCxcbiAgICAgIDIzLFxuICAgICAgMTkwLFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVM1MThGR1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTMwMjkxNzc6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTgzOTU3MTc1NTIzNToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNM3Vrd2dRNGJMNXRnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZWZWE3V3JQNEpIQ2FuTThvYnpIUXFXeWRCSk83VWxpTHl5QWFuK2wrMTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib0sya2JqRTNoaUl0L0hEdWlDdmRRdEdQL05jdEdOemMwblFZUXZqUHBXYjh0V3ZCMVFBaHI3Mno0VEZLSEk0MjlURTM1UmRUbHVhTjk4aVdPaWJ2QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieW5MUlJKcjkxL3kzWTNldWpsalVZS0liRVd6cFNkY2FDcDg3K0kyL2wvY0w2YndpaTM2STM3TnlyV0RYMDU3akNBdTk5N1VQeWJyWlhQNzVIS0wrZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMzAyOTE3NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1ODQ3OTEwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
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
 
