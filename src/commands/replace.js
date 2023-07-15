const { EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const config = require("../data/config.json");

module.exports = {
    
    data: new SlashCommandBuilder()
    .setName('replace')
    .setDescription('substitui elementos em uma string')
    .addStringOption(option => option.setName('a').setDescription('elemento para substituir').setRequired(true))
    .addStringOption(option => option.setName('b').setDescription('elemento que vai substituir').setRequired(true))
    .addStringOption(option => option.setName('in').setDescription('string').setRequired(true)),

    async execute(interaction){

        const string = interaction.options.getString('in');
        const result = string.replaceAll(interaction.options.getString('a'), interaction.options.getString('b'));
        
            const embed = new EmbedBuilder()
                .setTitle(`Replace`)
                .setDescription(`${result}`)
                .setColor(config.color)
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }) });

            await interaction.reply({ embeds: [embed], ephemeral: false });

        },

};