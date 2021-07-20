// Include command files
let pf = require("./commands/pf.js");
let schedule = require("./commands/schedule.js");
let today = require("./commands/today.js");
let ttr = require("./commands/ttr.js");
let ultimate = require("./commands/ultimate.js");

// Discord.js things
const Discord = require('discord.js');
const Client = new Discord.Client();
Client.commands = new Discord.Collection();

// Set commands for command files
Client.commands.set(pf.name, pf);
Client.commands.set(schedule.name, schedule);
Client.commands.set(today.name, today);
Client.commands.set(ttr.name, ttr);
Client.commands.set(ultimate.name, ultimate);

Client.once('ready', () => {
    console.log('Raid-schedule-bot is online!');
});

// Prefix to use bot commands
const prefix = '!';

// Checks messages for commands
Client.on('message', (message) => {
    // The DN Module
    if(message.content.toLowerCase().includes("deez nuts")) {
        message.channel.send('GOTTEM!');
    }

    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = Client.commands.get(commandName) || Client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) {
        return;
    }

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
})

const fs = require('fs');
const token = fs.readFileSync('./bot-token');
Client.login(token.toString());