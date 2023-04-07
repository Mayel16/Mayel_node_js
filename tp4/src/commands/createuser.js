const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('create_user')
        .setDescription('créer un utilisateur'),
    async execute(interaction) {
        const data = {
            name: 'Mayel',
        };
        const resp = await axios.post('http://localhost:3000/create', data);
        console.log(resp.data);
        await interaction.reply(JSON.stringify(resp.data));
    },
};