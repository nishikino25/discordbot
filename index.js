// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js'); //顯示正在做...模式

// 引入 dotenv 套件並加載環境變數
require('dotenv').config();
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
  client.user.setStatus('online'); //設置狀態為在線
    // client.user.setStatus('idle'); //設置狀態為閒置
    // client.user.setStatus('dnd'); //設置狀態為請勿打擾
    // client.user.setStatus('invisible'); //設置狀態為離線（隱形）

  client.user.setActivity('你的電腦', { type: ActivityType.Watching }); //將機器人的行為設置為正在玩iTHome
    // client.user.setActivity('前綴後面的文字', { type: ActivityType.Watching }); //將機器人的行為設置為正在看
    // client.user.setActivity('前綴後面的文字', { type: ActivityType.Listening }); //將機器人的行為設置為正在聽
    // client.user.setActivity('前綴後面的文字', { type: ActivityType.Streaming }); //將機器人的行為設置為正在直播
    // client.user.setActivity('前綴後面的文字', { type: ActivityType.Playing }); //將機器人的行為設置為正在玩
    // client.user.setActivity('前綴後面的文字', { type: ActivityType.Competing }); //將機器人的行為設置為競爭
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);

});

// When the client receives a message that is not a command
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'test') {
    await interaction.reply('Ping Pong!');
  }  

});

// Log in to Discord with your client's token
client.login(DISCORD_TOKEN);
console.log('Starting Discord bot...');