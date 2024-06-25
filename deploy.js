const { REST, Routes } = require('discord.js');
const { DISCORD_TOKEN,CLIENT_ID,GUILD_ID } = require('./config.json');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

// const rest = new REST({ version: '10' }).setToken('your_discord_token');
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
var CLIENT_ID = process.env.CLIENT_ID;
var GUILD_ID = process.env.GUILD_ID;

console.log(process.env.DISCORD_TOKEN, CLIENT_ID, GUILD_ID);


(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    // var CLIENT_ID="your_discord_clientid";
    // var GUILD_ID="your_discord_guild id";

    // await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
