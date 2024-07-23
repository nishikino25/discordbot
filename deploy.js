const { REST, Routes } = require('discord.js');

// 引入 dotenv 套件並加載環境變數
require('dotenv').config();
const { CLIENT_ID, GUILD_ID, DISCORD_TOKEN } = process.env;


const commands = [
  {
    name: 'test',
    description: 'Replies with Pong!',
  },
  {
    name: 'ping',
    description: '得知機器人的延遲資訊',
  },
];

// var CLIENT_ID = process.env.CLIENT_ID;
// var GUILD_ID = process.env.GUILD_ID;
// var DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);
console.log(`Loaded environment variables:`);
console.log(`DISCORD_TOKEN: ${DISCORD_TOKEN}`);
console.log(`CLIENT_ID: ${CLIENT_ID}`);
console.log(`GUILD_ID: ${GUILD_ID}`);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    //指定伺服器註冊指令
    // await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    //全域註冊指令
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log('Successfully reloaded application (/) commands.');

  } catch (error) {
    console.error(error);
  }
})();
