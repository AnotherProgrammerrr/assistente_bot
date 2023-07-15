const { EmbedBuilder, SlashCommandBuilder} = require("discord.js");
const config = require("../data/config.json");

module.exports = {
    
    data: new SlashCommandBuilder()
    .setName('math')
    .setDescription('realiza um calculo')
    .addStringOption(option => option.setName('calc').setDescription('calculo a ser efetuado').setRequired(true)),
    
    async execute(interaction) {
        	const calc = interaction.options.getString('calc');

            if(calc.match(/[a-zA-Z]/)){
                await interaction.reply("Operação inválida.");
            }
            
            else{
                result = eval(calc)

                if(String(result) == "NaN"){
                    result = "Você não pode quebrar esse bloco."
                }
    
                const embed = new EmbedBuilder()
                    .setTitle(`Math`)
                    .setDescription(`${calc} = ${result}`)
                    .setColor(config.color)
                    .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ size: 2048, format: 'png', dynamic: true }) });
                    
                await interaction.reply({ embeds: [embed], ephemeral: false });
                }

        },

};