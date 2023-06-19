import { EmbedBuilder } from "discord.js" // Import Embed Builder

// Command Handler
export const command_data = {
    name: "avatar", // Command Name
    description: "Show your or target avatar", // Command Description
    cooldown: 5, // Command Cooldown
    permissions: { // Command Permissions
        user: [], // User Permissions
        bot: [] // Bot Permissions
    },
    async execute(interaction, db) { // Command Execution
        const user = interaction.options.getUser("user") || interaction.user // Get User
        const avatar = user.avatarURL({ dynamic: true, size: 4096 }) // Get Avatar
        const embed = new EmbedBuilder() // Create Embed
            .setTitle(`${user.tag}'s Avatar`) // Set Embed Title
            .setImage(avatar) // Set Embed Image
            .setColor("Random") // Set Embed Color
            .setTimestamp() // Set Embed Timestamp
        return interaction.reply({ embeds: [embed] }) // Interaction Reply
    }
}

// Slash Command Handler
export const slash_data = {
    name: command_data.name, // Slash Command Name
    description: command_data.description, // Slash Command Description
    dm_permission: false,
    options: [ // Slash Command Options
        {
            name: "user", // Option Name
            description: "User to show avatar", // Option Description
            type: 6, // Option Type
            required: false // Option Required
        }
    ]
}
