const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('watchlist_add')
        .setDescription('créer une watchlist'),
    async execute(interaction) {
        const data = {
            id_item: "15",
            status: "finito",
            id_users: "15",
            note: "****",
            };
        const resp = await axios.post('http://localhost:3000/watchlist', data);
        console.log(resp.data);
        await interaction.reply(JSON.stringify(resp.data));
    },
};