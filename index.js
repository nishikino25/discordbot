// const { Client, GatewayIntentBits } = require('discord.js');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js'); //顯示正在做...模式

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
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
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

// client.login('token');   
client.login('your_discord_token');
