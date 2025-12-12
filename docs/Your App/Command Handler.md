---
title: Command Handler
description: This guide tells you how to build a command handler
sidebar_position: 6
---

# Command Handling
Unless your bot project is small, it's not a very good idea to have a single file with a giant ``if/else`` if chain for commands. If you want to implement features into your bot and make your development process a lot less painful, you'll want to implement a command handler. Let's get started on that!

## Building a commnad handler using Yags

Here's a basic command handler made using Yags
```javascript
const fs = require("fs");

module.exports = class CommandHandler {
    constructor(client, options = {}) {
        this.client = client;
        this.prefix = options.prefix || "!";
        this.commands = new Map();

        this.loadCommands();
        this.registerListener();
    }

    loadCommands() {
        const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);

            if (!command.name || !command.execute) {
                console.warn(`⚠️ Command "${file}" is missing a name or execute() function.`);
                continue;
            }

            this.commands.set(command.name, command);
            console.log(`Loaded command: ${command.name}`);
        }
    }

    registerListener() {
        this.client.on("messageCreate", (msg) => {
            if (!msg.content.startsWith(this.prefix)) return;

            const args = msg.content.slice(this.prefix.length).trim().split(/\s+/);
            const commandName = args.shift().toLowerCase();

            const command = this.commands.get(commandName);
            if (!command) return; // silently ignore unknown commands

            try {
                command.execute(this.client, msg, args);
            } catch (err) {
                console.error(err);
                msg.channel.createMessage("❌ Error while running this command.");
            }
        });
    }
};
```
This a simple commnad handler.
