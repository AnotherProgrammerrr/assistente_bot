const { EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const config = require("../data/config.json");

module.exports = {
    
    data: new SlashCommandBuilder()
    .setName('bubble')
    .setDescription('organiza listas bagunçadas pelo primeiro caractere')
    .addStringOption(option => option.setName('list').setDescription('lista para ser organizada').setRequired(true)),
    
    async execute(interaction){

        const list = ' ' + interaction.options.getString('list');

            function bubbleSort(str) {
                let nomes = str.split(","); 
                let n = nomes.length;
                for (let i = 0; i < n; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (nomes[j] > nomes[j+1]) {
                    let temp = nomes[j];
                    nomes[j] = nomes[j+1];
                    nomes[j+1] = temp;
                        }
                    }
                }
                return nomes.join("\n");
            }
          
            const embed = new EmbedBuilder()
                .setTitle(`Bubble Sort`)
                .setDescription(`${bubbleSort(list)}`)
                .setColor(config.color)
                .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }) });

            await interaction.reply({ embeds: [embed], ephemeral: false });

        },

};