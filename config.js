//GIFTED-MD//
//BASED ON ASTA-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3647aeca79bcc25555c99.jpg";
global.devs = "254700143167";
global.sudo = process.env.SUDO || "254700143167";
global.owner = process.env.OWNER_NUMBER || "254700143167";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254700143167";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254700143167";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://sessiongenerator-97b069cd3eac.herokuapp.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "SUHAIL_22_11_08_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZ0LzA4NDcra0kyNmc3aG1pZVZrVzA5bmxIekxVaVJDRTJQd0ZUcXUva3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc2WHF1WkVuU3J5d3dZT0VPMmZfbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzQzMTI4MjgtNDRlZS00YjFmLWJlNzktMjMzNThlMWRkZThiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTAzLFxuICAgICAgNTQsXG4gICAgICAxNDMsXG4gICAgICAyMzksXG4gICAgICAyMDksXG4gICAgICA2NCxcbiAgICAgIDIxNCxcbiAgICAgIDI1MixcbiAgICAgIDM3LFxuICAgICAgMTE1LFxuICAgICAgMTM4LFxuICAgICAgMTQyLFxuICAgICAgMTcwLFxuICAgICAgMjEyLFxuICAgICAgMjA4LFxuICAgICAgMjIwLFxuICAgICAgMTM3LFxuICAgICAgNzEsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxODMsXG4gICAgICAxODAsXG4gICAgICAxMTAsXG4gICAgICAxMzgsXG4gICAgICAyNTEsXG4gICAgICAxOTksXG4gICAgICAzMCxcbiAgICAgIDE4MSxcbiAgICAgIDEzNixcbiAgICAgIDAsXG4gICAgICAyMixcbiAgICAgIDM3LFxuICAgICAgMTcxLFxuICAgICAgMjMzLFxuICAgICAgMTcyLFxuICAgICAgMTExLFxuICAgICAgMjU0LFxuICAgICAgMTA2LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZKRzRRS1dHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NTY4MDYzMTk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUaGUgTWFuXCIsXG4gICAgXCJsaWRcIjogXCI0NDU0MzMwNzE5MDQyMzoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYTV5cm9CRVAyejc3VUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm15dE9heWsrc1NhbnZCK1YrZHJmczhNVjdURUhaVjUra3kxYlI4Nm14aWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRXhDZkxkd3ZvcHVEUDFiOEdjdE56bmwrNUMrbURLUHN5aXR5aU5LaGZnYTNqbXZpdXlpNkZUUzNYWUNiWHFQb2dJWXFvdC9VTGVDajlJUGFmUkhaQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS01LbDAxNkVOd0ZzSTNBZE5iRHhzWmUrUUV1eXdBdkg3LzVzRlo5WGZ6d1ZzY282eStLcnFTd1NVS0RocVBCT3k5eU1Ec2dCU2tEM0J3V3diN2ZNQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjU2ODA2MzE5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzNTg3MDcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnRmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGdGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1VWFZNDZzTkNVZFpEb0FpUS9vUmVBSjVPZmdQaUdZelAza1hnZ2ZyMjU4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5MTI5MDAyMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3NjEzNjYzODNcIn0iCn0="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉*",
  author: process.env.PACK_AUTHER || "Silva Tech",
  packname: process.env.PACK_NAME || "silva-Md♥️",
  botname: process.env.BOT_NAME || "𝑺𝒊𝒍𝒗𝒂-𝒕𝒆𝒄𝒉",
  ownername: process.env.OWNER_NAME || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "SILVA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
