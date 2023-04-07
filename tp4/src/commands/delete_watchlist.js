const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete_watchlist')
        .setDescription('supprimer une watchlist'),
    async execute(interaction) {
        // Je supprime une watchlist à partir de son id donc il faut que l'id existe dans la base
        const resp = await axios.get('http://localhost:3000/watchlist/delete/15');
        const res = resp.data;
        console.log(res)
        await interaction.reply(JSON.stringify(res));
    },
};