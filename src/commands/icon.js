const { EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const config = require("../data/config.json");

module.exports = {
    
    data: new SlashCommandBuilder()
    .setName('icon')
    .setDescription('mostra o icon do usuário')
    .addUserOption(option => option.setName('user').setDescription('usuário alvo').setRequired(true)),
    
    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatar = user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true });

            const embed = new EmbedBuilder()
                .setTitle(`${user.username}'s icon`)
                .setImage(avatar)
                .setColor(config.color)
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }) });

            await interaction.reply({ embeds: [embed], ephemeral: false });

        },

};