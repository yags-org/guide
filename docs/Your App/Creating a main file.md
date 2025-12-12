---
title: Creating a main file
description: Creating a main file for your bot
sidebar_position: 5
---

# Creating a main file

Open your code editor and create a new file. We suggest that you save the file as ``index.js``, but you may name it whatever you wish.

Here's the base code to get you started:


```javascript
// Import Yags
const Yag = require("yags.js");
const { token } = require("./config.json");

// Create a Yag client
const client = new Yag(token, {
    intents: ["guilds"]
});

// When the bot is ready
client.on("ready", () => {
    console.log(`Ready! Logged in as ${client.user.username}`);
});

// Connect the bot
client.connect();
```
This is how you create a client instance for your Discord bot and log in to Discord.

# Running your application
Open your terminal and run ``node index.js`` to start the process. If you see "Ready!" after a few seconds, you're good to go! The next step is to start adding slash commands to develop your app's functionality.
