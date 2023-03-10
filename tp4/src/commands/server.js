const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Renvoie le nom du serv et le nombre de membres.'),
    async execute(interaction) {
        await interaction.reply(
            `Nom du serv: ${interaction.guild.name}\nNombre de membres: ${interaction.guild.memberCount}`);
    },
};