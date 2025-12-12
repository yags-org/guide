---
title: Project Setup
description: Setuping up your up.
sidebar_position: 4
---

# Project Setup

## Configuration files

Once you add your bot to a server, the next step is to start coding and get it online! Let's start by creating a config file for your client token and a main file for your bot application.

As explained in the "What is a token, anyway?" section, your token is essentially your bot's password, and you should protect it as best as possible. This can be done through a config.json file or by using environment variables (a .env file)


Open your application in the [Discord Developer Portal](https://discord.dev) and go to the "Bot" page to copy your token.

## Using config.json
Storing data in a config.json file is a common way of keeping your sensitive values safe. Create a config.json file in your project directory and paste in your token. You can access your token inside other files by using ``require()``.

```json
{
	"token": "your-token-goes-here"
}
```

## Using dotenv
```
TOKEN=
```

## Usage

```javascript
const { token } = require('./config.json');

console.log(token);
```

:::danger
If you're using Git, you should not commit files containing secrets. Exclude them by ``.gitignore``.
:::

## Gitignore 
You can specify files that Git should ignore in its versioning systems with a .gitignore file. Create a .gitignore file in your project directory and add the names of the files and folders you want to ignore. The following example ignores the config.json and .env files as well as the node_modules directory.

```
node_modules
.env
config.json
```
:::info
.gitignore files can specify intricate patterns and help with your general development flow. Apart from keeping your credentials safe, you should exclude node_modules from version control as well, its contents can be restored from the entries in your package.json and package-lock.json files.
:::





