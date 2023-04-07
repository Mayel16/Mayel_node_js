const {SlashCommandBuilder} = require('discord.js')
const {request} = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('movie')
        .setDescription('Renvoie des films'),
    async execute(interaction) {
        // Afficher les films de l'api
        // const cat = await request('http://www.omdbapi.com/?i=tt3896198&apikey=9a78a4e7')
        // Affichage du film "coco" qui est en locale avec le filtre sur le nom
        const movie = await request('http://localhost:3000/add/find/jude')
        const res = movie.data;
        console.log(res)
        await interaction.reply(JSON.stringify(res))
    }
}