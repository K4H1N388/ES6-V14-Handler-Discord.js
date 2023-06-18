// Command Handler
export const command_data = {
    name: "ping", // Command Name
    description: "Ping Pong!", // Command Description
    cooldown: 5, // Command Cooldown
    permissions: { // Command Permissions
        user: [], // User Permissions
        bot: [] // Bot Permissions
    },
    async execute(interaction) { // Command Execution
        await interaction.reply(`Websocket ping: ${interaction.client.ws.ping}`) // Interaction Reply
    }
}

// Slash Command Handler
export const slash_data = {
    name: command_data.name, // Slash Command Name
    description: command_data.description // Slash Command Description
}