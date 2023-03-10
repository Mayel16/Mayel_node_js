const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Renvoie des informations sur l\'user mentionné.')
        .addUserOption((option) =>
            option
                .setName('cible')
                .setDescription('L\'user dont vous voulez les informations.')
                .setRequired(false),
        ),
        async execute(interaction) {
            const user = interaction.options.getUser('cible') || interaction.member.user;
            const date = new Date(user.createdAt);
            await interaction.reply(`Nom d'user: ${user.username}\nA rejoint le serveur le: ${date}`);
        },
};