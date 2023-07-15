const { SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
    .setName('cls')
    .setDescription('deleta mensagens')
    .addIntegerOption(option =>option.setName('amount').setDescription('quantidade a ser deletada').setRequired(true)),

    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');

        if (amount <= 0 || amount > 100) {
            return await interaction.reply({ content: 'Apenas de 1 a 100', ephemeral: true });
        }
        
        await interaction.channel.bulkDelete(amount, true)
            .then(deleted => {
                return interaction.reply({content:`${deleted.size} mensagens deletadas.`, ephemeral: true});
            })
            .catch(error => {
                return interaction.reply({ content: 'Erro ao deletar as mensagens.', ephemeral: true });
            });
    },
};
