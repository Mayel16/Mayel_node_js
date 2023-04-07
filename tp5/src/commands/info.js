const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Renvoie des informations sur l\'user mentionné ou le serv.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Renvoie des informations sur l\'user mentionné.')
                .addUserOption((option) =>
                    option
                        .setName('cible')
                        .setDescription('L\'user dont vous voulez les informations.')
                        .setRequired(false),
                ))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Renvoie le nom du serv et le nombre de membres.')),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'user') {
            const user = interaction.options.getUser('cible') || interaction.member.user;
            const date = new Date(user.createdAt);
            await interaction.reply(`Nom d'user: ${user.username}\nA rejoint le serveur le: ${date}`);
        } else if (subcommand === 'server') {
            await interaction.reply(
                `Nom du serv: ${interaction.guild.name}\nNombre de membres: ${interaction.guild.memberCount}`);
        }
    }
}