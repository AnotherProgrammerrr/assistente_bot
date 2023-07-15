const { SlashCommandBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('responde com pong (se estiver com vontade)'),

	async execute(interaction, args) {
		await interaction.reply('não.', args);

	},
	
};
