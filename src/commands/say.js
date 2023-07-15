const { EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const config = require("../data/config.json");

module.exports = {

    data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('imprime mensagens na tela')
    .addStringOption(option => option.setName('output').setDescription('mensagem').setRequired(true)),

    async execute(interaction) {
        const message = interaction.options.getString('output');

        const embed = new EmbedBuilder()
            .setTitle(`Say`)
            .setDescription(`${message}`)
            .setColor(config.color)
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }) });
            
        await interaction.reply({ embeds: [embed], ephemeral: false });

    },
};
