const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const { request } = require('undici')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Recherche un mot dans l\'Urban Dictionary.')
        .addStringOption(option =>
            option.setName('mot')
                .setDescription('Le mot qu\'on veut rechercher.')
                .setRequired(true)),
    async execute(interaction) {
        const mot = interaction.options.getString('mot')
        const req = await request(`https://api.urbandictionary.com/v0/define?term=${mot}`)
        const { list } = await req.body.json()

        for (let i = 0; i < list.length; ++i) {
            const Embed = new EmbedBuilder()
            .setColor(0x800080)
            .setTitle(`Voici la définition ${i + 1}: `)
            .addFields(
                {
                    name: mot,
                    value: list[i].definition
                },
            )
            await interaction.channel.send({ embeds:[Embed] })
        }
    }
}