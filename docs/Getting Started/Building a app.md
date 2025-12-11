---
title: Creating a app
description: A guide to create a app.
sidebar_position: 2
---

# Creating your app (formerly bots)
Now that you've installed Node and Yags you're almost ready to start coding! The next step you need to take is setting up an actual Discord bot application via Discord's Developer Portal.

It's not hard innit, just follow these steps 

1. Go to [Discord Developer Portal](https://discord.dev) and login your account.
2. Click on "New Application" button.
3. Enter a name, accept [Discord's Terms](https://discord.com/terms) and hit create!

Once you created your app, you can edit it's name, description, and avatar here. Once you've done that, then congratulations—you're now the proud owner of a shiny new Discord bot! You're not entirely done, though.

# Getting your app's (bot) token.
Firstly let's understand, what's a bot token?. A bot token is a password like string that can be used to login in your bot, like you login in your discord account using a email and password. Keep your bot token safe like your account password.

Tokens look like this: NzkyNzE1NDU0MTk2MDg4ODOy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I (this a example token). If it's any shorter and looks more like this: kxbsDRU5UGAaiO7ar9GFMHSlmTwYaIYn, you copied your client secret instead. Make sure to copy the token if you want your bot to work!

# What if my token gets leaked?
Let's imagine that you have a bot on over 1,000 servers, and it took you many, many months of coding and patience to get it on that amount. Your bot's token gets leaked somewhere, and now someone else has it. That person can:

1. Spam every server your bot is on;
2. DM spam as many users as possible;
3. Delete as many channels as possible;
4. Kick or ban as many server members as possible;
5. Make your bot leave all of the servers it has joined;
6. All that and much, much more. Sounds pretty terrible, right? So make sure to keep your bot's token as safe as possible!

And if your token gets leaked, don't worry just reset it from the developer portal

After creating a bot user, you'll see a section like this:

![The Image of Developer Portal]([image-url](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnukxlfGV_eEAd49UqQi1hxprdjl0uJD0eio0YmkBtKQ&s=10))

In this panel, you can give your bot a avatar, set its username, and make it public or private. Your bot's token will be revealed when you press the "Reset Token" button and confirm. When we ask you to paste your bot's token somewhere, this is the value that you need to put in. If you happen to lose your bot's token at some point, you need to come back to this page and reset your bot's token again which will reveal the new token, invalidating all old ones.

