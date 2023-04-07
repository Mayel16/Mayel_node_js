const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('add_item')
        .setDescription('créer un item'),
    async execute(interaction) {
        const data = {
            name: "mayems",
            date: "2023-10-19",
            resume: "testtttttttefcs",
            note: "****",
            realisateur: "mayel_real_madrid"
            };
        const resp = await axios.post('http://localhost:3000/add', data);
        console.log(resp.data);
        await interaction.reply(JSON.stringify(resp.data));
    },
};