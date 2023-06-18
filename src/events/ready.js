import commandRegister from "../utils/commandRegister.js" // Import the command register function

export default client => {
    client.once("ready", async () => { // Event to run when the bot is ready
        console.log("Bot is ready!") // Log "Bot is ready!" to the console

        // Save the bot's application commands
        if (parseInt(process.env.COMMAND_SAVE)) commandRegister(client) // If the COMMAND_SAVE environment variable is true, save the commands
    })
}