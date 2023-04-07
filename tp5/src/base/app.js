// Votre fichier app.js
const fs = require('node:fs');
const path = require('node:path');

const { Client, Events, GatewayIntentBits } = require('discord.js');
const conf = require('../conf.json');
const TOKEN = conf.token;

// Créer un nouveau client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commandPath = path.join(__dirname, 'events');
const eventFiles = fs
    .readdirSync(commandPath)
    .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(commandPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}



client.commands.set(command.data.name, command);
console.log(
    `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
);

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(
            `Aucune commande ${interaction.commandName} n'a été trouvée.`
        );
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'Erreur dans l\'exécution de la commande !',
            ephemeral: true,
        });
    }
});
// Le token permet à votre client de se connecter à Discord
client.login(TOKEN);