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

  if (interaction.commandName === 'ping') {
    //對使用者進行回應，告訴使用者我們正在測量延遲，同時讓此訊息用於計算機器人回應的延遲時間
    const msg = await interaction.reply({
      content: "正在計算延遲......", //設定訊息的內容
      fetchReply: true //告訴API我們將會對這個指令做出進一步的回應
    });
    //將ping變數設定為「成功回應的時間」與「指令發送的時間」之間隔
    const ping = msg.createdTimestamp - interaction.createdTimestamp;
    interaction.editReply(`機器人延遲：${ping} ms\n API延遲：${client.ws.ping} ms`) 
  }

  if (interaction.commandName === 'bot-info') {
    // await interaction.reply(`機器人名稱：${client.user.tag}\n機器人ID：${client.user.id}`);
    await interaction.reply(
      `機器人名稱：${client.user.username}\n`+
      `機器人ＩＤ：${client.user.id}\n`+
      `機器人製作者：[nishikino25](https://github.com/nishikino25)\n`+
      `機器人建立時間：<t:${~~(client.user.createdTimestamp/1000)}:R>\n`+
      `機器人邀請連結：[link](https://discord.com/oauth2/authorize?client_id=1226076108278206464&permissions=8&integration_type=0&scope=bot+applications.commands)\n`+
      `機器人版本：v1.0\n`+
      `機器人所在伺服器數量：${client.guilds.cache.size}\n`+
      `機器人上線時間：${msToHMS(client.uptime)}`
    );
  }

  if (interaction.commandName === 'user-info') {
    await interaction.reply(`使用者名稱：${interaction.user.tag}\n使用者ID：${interaction.user.id}`);
  }

  if (interaction.commandName === 'server-info') {
    await interaction.reply(`伺服器名稱：${interaction.guild.name}\n伺服器ID：${interaction.guild.id}`);
  }

});

// Log in to Discord with your client's token
client.login(DISCORD_TOKEN);
console.log('Starting Discord bot...');

function msToHMS(ms) {
  let seconds = ms / 1000; //將毫秒轉換為秒
  const hours = parseInt( seconds / 3600 ); //將可以轉為小時的秒轉換為小時
  seconds = seconds % 3600; //去除已轉換為小時的秒
  const minutes = parseInt( seconds / 60 ); //將可以轉為分鐘的秒轉換為分鐘
  seconds = seconds % 60; //去除已轉換為分鐘的秒
  return(`${hours}:${minutes}:${~~(seconds)}`); //回傳轉換後的結果，秒數進行四捨五入
}
