# Discord.js v14 Advanced Handler
A advanced handler for discord.js v14.

## Installation
- First of all, you need to install [Node.js](https://nodejs.org/en/) v18 or higher.
- download the repository and unzip it.
- open the folder in your code editor.
- open a terminal and type `npm install` to install all the packages.
- open the `.env` file and fill in the required fields.
- Run the bot by opening the file named `start.bat` or by typing `node .` in the terminal.

## Features
- Permission Checks.
- Cooldowns.
- İnteraction Handlers. (slash commands, buttons, select menus etc.)
- Customizable.
- Easy to use.
- Supports all types of commands.
**And more!**

## Usage
- Create a new file in the `commands` folder.
- Copy and paste the code below into the file.
```js
export const command_data = {
    name: "command_name", // Command Name
    description: "command_description", // Command Description
    cooldown: 5, // Command Cooldown
    permissions: { // Command Permissions
        user: [], // User Permissions
        bot: [] // Bot Permissions
    },
    async execute(interaction) { // Command Execution
        // your code here
    }
}

export const slash_data = {
    name: command_data.name, // Slash Command Name
    description: command_data.description, // Slash Command Description
}
```
- Fill in the required fields.
- Save the file.
- Restart the bot.
- Done!

## Support and Contact
- [Discord Server](https://discord.gg/8SdRngdHag)
- [Discord Profile](https://discord.com/users/673210759274299413)
- [Github] (https://github.com/K4H1N388)
- [Instagram] (https://www.instagram.com/brterdm._/)
