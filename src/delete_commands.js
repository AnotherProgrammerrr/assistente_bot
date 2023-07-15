const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./data/config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);


(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
		.then(() => console.log('Deleted all guild commands.'))
		.catch(console.error);

		await rest.put(Routes.applicationCommands(clientId), { body: [] })
		.then(() => console.log('Deleted all application commands.'))
		.catch(console.error);

	} catch (error) {
		console.error(error);
	}
})();
