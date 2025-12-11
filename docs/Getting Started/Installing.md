---
title: Installing Yags
description: A guide to install yags on your system.
sidebar_position: 1
---

# Installing NodeJS
- [NodeJS 18.0.0](https://nodejs.org/en/download/) or higher

## For windows
Download latest version of NodeJS from [NodeJS's Website](https://nodejs.org/en/download)

## For MacOS
Download latest version of NodeJS from [NodeJS's Website](https://nodejs.org/en/download)

## For Linux
Download latest version of NodeJS from [NodeJS's Website](https://nodejs.org/en/download)

# Installing Yags

To use Yags, you'll need to install it via npm (Node's package manager). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.

Navigate to a suitable place on your machine and create a new folder named discord-bot (or whatever you want). Next you'll need to open your terminal.

## Initiating a project folder 


```bash
# NPM
npm init

# PNPM
pnpm init

# Yarn
yarn init

# Bun
bun init
```

This is the next command you'll be running. This command creates a ``package.json`` file for you, which will keep track of the dependencies your project uses, as well as other info.

This command will ask you a sequence of questions–you should fill them out as you see fit. If you're not sure of something or want to skip it as a whole, leave it blank and press enter.

To get started quickly, you can run the following command to have it fill out everything for you.

```bash
# NPM
npm init -y

# PNPM
pnpm init

# Yarn
yarn init -y

# Bun
bun init -y
```
Once you're done with that, you're ready to install Yags!

# Installing Yags

```
# Using NPM
npm install yags.js

# Using Yarn
yarn add yags.js

# Using PNPM
pnpm add yags.js

# Using Bun
bun add yags.js
```


And that's it! With all the necessities installed, you're almost ready to start coding your bot.
