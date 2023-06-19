import ButtonHandler from "../utils/handlers/ButtonHandler.js"; // Import the button handler
import ModalHandler from "../utils/handlers/ModalHandler.js"; // Import the modal handler
import AutocompleteHandler from "../utils/handlers/AutocompleteHandler.js"; // Import the autocomplete handler
import StringSelectMenuHandler from "../utils/handlers/StringSelectMenuHandler.js"; // Import the string select menu handler
import ChannelSelectMenuHandler from "../utils/handlers/ChannelSelectMenuHandler.js"; // Import the channel select menu handler
import CooldownChecker from "../utils/checkers/cooldown.js"; // Import the cooldown checker
import permissionChecker from "../utils/checkers/permission.js"; // Import the permission checker

export default client => {
    client.on("interactionCreate", async interaction => { // The event where requests will be answered
        if (interaction.isCommand()) { // If the request is a command
            const command = client.commands.get(interaction.commandName);
            if (!command) return; // If the command does not exist, return
            try {

                // CoolDown Check
                let cooldown = await CooldownChecker(command, interaction.user.id);
                if (cooldown) return interaction.reply({ content: `You are on cooldown! Please wait ${cooldown} second(s) before using this command again!`, ephemeral: true }); // If the user is on cooldown, send a message

                // Permission Check
                let permissionCheck = await permissionChecker({
                    userPermissions: {
                        user: interaction.member,
                        perms: command.command_data.permissions?.user || []
                    },
                    botPermissions: {
                        user: interaction.guild.members.me,
                        perms: command.command_data.permissions?.bot || []
                    }
                })

                if (!permissionCheck.bot) return interaction.reply({ content: `I do not have the required permissions to execute this command!`, ephemeral: true }); // If the bot does not have the required permissions, send a message
                else if (!permissionCheck.user) return interaction.reply({ content: `You do not have the required permissions to execute this command!`, ephemeral: true }); // If the user does not have the required permissions, send a message

                // Execute the command
                await command.command_data.execute(interaction);
            } catch (error) { // Catch the error
                console.error(error); // Log the error
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true }); // If there is an error, send a message
            }
        } else if (interaction.isButton()) ButtonHandler(interaction) // If the request is a button
        else if (interaction.isModalSubmit()) ModalHandler(interaction) // If the request is a modal
        else if (interaction.isAutocomplete()) AutocompleteHandler(interaction) // If the request is an autocomplete
        else if (interaction.isStringSelectMenu()) StringSelectMenuHandler(interaction) // If the request is a string select menu
        else if (interaction.isChannelSelectMenu()) ChannelSelectMenuHandler(interaction) // If the request is a channel select menu
    })
}
