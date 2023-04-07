const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('watchlist_modification')
        .setDescription('modifier une watchlist'),
    async execute(interaction) {
        const data = {
            id_item: "15",
            status: "finito",
            id_users: "15",
            note: "****",
            };
        // Je modifie une watchlist à partir de son id donc il faut que l'id existe dans la base
        const resp = await axios.post('http://localhost:3000/watchlist/update/15', data);
        console.log(resp.data);
        await interaction.reply(JSON.stringify(resp.data));
    },
};