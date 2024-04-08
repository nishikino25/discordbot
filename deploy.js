const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTIyNjA3NjEwODI3ODIwNjQ2NA.GpESEK.NAVtZ8DrkgdAKCIhh1lYzAQ3P3fTpQMwAmfP2M');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    var CLIENT_ID="1226076108278206464";
    var GUILD_ID="936558760300781588";

    // await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();