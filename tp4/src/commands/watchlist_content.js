const {SlashCommandBuilder} = require('discord.js')
const {request} = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('watchlist_content')
        .setDescription('Renvoie le contenu d\'une watchlist'),
    async execute(interaction) {
        // je recherche le contenu d'une watchlist à partir de son id donc il faut que l'id existe dans la base
        const movie = await request('http://localhost:3000/watchlist/findcontent/15')
        const res = movie.data;
        console.log(res)
        await interaction.reply(JSON.stringify(res))
    }
}