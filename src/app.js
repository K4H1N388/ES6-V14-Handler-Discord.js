// İmport Packages
import { Client, Collection } from "discord.js";
import { QuickDB } from "quick.db";
import { readdirSync } from "fs";
import 'dotenv/config';

// Bug Hunter
process.on("uncaughtException", (err) => console.error(err.stack));
process.on("unhandledRejection", (err) => console.error(err.stack));

// Initialize Client
const client = new Client({
    intents: 3276543,
    partials: ["User", "GuildMember", "Message"]
})

// Initialize Database
const db = new QuickDB();

// Assignments
client.commands = new Collection();

// Event Loader
readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(m => m.default)
    event(client, db)
})

// Command Loader
readdirSync("./commands").forEach(category => {

    readdirSync(`./commands/${category}`).forEach(async file => {
        const command = await import(`./commands/${category}/${file}`)
        client.commands.set(command.command_data.name, command)
    })

})

// Login
client.login(process.env.TOKEN);