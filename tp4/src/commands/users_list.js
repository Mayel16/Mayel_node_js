const {SlashCommandBuilder} = require('discord.js')
const {request} = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('users_list')
        .setDescription('Renvoie la liste des users'),
    async execute(interaction) {
        const movie = await request('http://localhost:3000/create/find/')
        const res = movie.data;
        console.log(res)
        await interaction.reply(JSON.stringify(res))
    }
}