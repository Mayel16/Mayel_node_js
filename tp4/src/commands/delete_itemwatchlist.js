const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('delete_item')
        .setDescription('supprimer un item'),
    async execute(interaction) {
        // Je supprime un item à partir de son nom donc il faut que le nom existe dans la base
        const resp = await axios.get('http://localhost:3000/add/delete/jude');
        const res = resp.data;
        console.log(res)
        await interaction.reply(JSON.stringify(res));
    },
};