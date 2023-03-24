const { SlashCommandBuilder } = require('discord.js')
const { request } = require('undici')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Renvoie une image de chat.'),
    async execute(interaction) {
        const cat = await request('https://aws.random.cat/meow')
        const { file } = await cat.body.json()
        
		await interaction.reply( {files: [file] })
    }
}