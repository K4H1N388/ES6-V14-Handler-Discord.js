// İmport Packages
import { Collection } from "discord.js";
const cooldowns = new Collection();

export default (command, user_id) => {

    // Check if the user is the owner
    if (user_id == process.env.OWNER) return false;
    // Check if the command has a cooldown
    if (!cooldowns.has(command.command_data.name)) cooldowns.set(command.command_data.name, new Collection());

    // Cooldown duration calculation
    const now = Date.now();
    const timestamps = cooldowns.get(command.command_data.name);
    const cooldownAmount = (command.command_data.cooldown || parseInt(process.env.DEFAULT_COOLDOWN) < 1 ? 3 : parseInt(process.env.DEFAULT_COOLDOWN)) * 1000;

    // If the user has a cooldown, return the time left
    if (timestamps.has(user_id)) {
        const expiration = timestamps.get(user_id) + cooldownAmount;
        if (now < expiration) {
            const timeLeft = Math.round((expiration - now) / 1000);
            return timeLeft;
        }

        return false;
    }

    // If the user does not have a cooldown, set a cooldown and return false
    timestamps.set(user_id, now);
    setTimeout(() => timestamps.delete(user_id), cooldownAmount);
    return false;
    
}