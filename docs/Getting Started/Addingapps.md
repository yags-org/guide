---
title: Adding apps
description: Adding your app to your server
sidebar_position: 3
---


# Adding Your App
After you set up a bot application, you'll notice that it's not in any servers yet. So how does that work?

Before you're able to see your bot in your own (or other) servers, you'll need to add it by creating and using a unique invite link using your bot application's client id.

# Bot invite links
The basic version of one such link looks like this:

```
https://discord.com/api/oauth2/authorize?client_id=123456789015345678&permissions=0&scope=bot%20applications.commands
```

The structure of the URL is quite simple:

``https://discord.com/api/oauth2/authorize`` is Discord's standard structure for authorizing an OAuth2 application (such as your bot application) for entry to a Discord server.
- client_id=... is to specify which application you want to authorize. You'll need to replace this part with your client's id to create a valid invite link.
- permissions=... describes what permissions your bot will have on the server you are adding it to.
- scope=bot%20applications.commands specifies that you want to add this application as a Discord bot, with the ability to create slash commands.

# Creating and using your invite link
To create an invite link, head back to the developer portal page under the "Applications" section, click on your bot application, and open the OAuth2 page.

In the sidebar, you'll find the OAuth2 URL generator. Select the ``bot`` and ``applications.commands`` options. Once you select the bot option, a list of permissions will appear, allowing you to configure the permissions your bot needs.

Grab the link via the "Copy" button and enter it in your browser. You should see something like this (with your bot's username and avatar):

![image-url](pathname://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrariIvKhykrbo6usErKOfPbu1OdJ9v3tZ6MIPnAVLA&s=10)

Choose the server you want to add it to and click "Authorize". Do note that you'll need the "Manage Server" permission on a server to add your bot there. This should then present you a nice confirmation message:

![image-url](pathname://https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnjSSYH8Xg7aAxYUOPlw8lf7rlQjLMNY6DwQBcBBsQg&s=10)

Congratulations! You've successfully added your bot to your Discord server. 
