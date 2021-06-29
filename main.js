const Discord = require('discord.js');
const Client = new Discord.Client();
const fs = require('fs');

// Prefix to use bot commands
const prefix = '!';

Client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    Client.commands.set(command.name, command);
}

Client.once('ready', () => {
    console.log('Raid-schedule-bot is online!');
});

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
const token = fs.readFileSync('./bot-token');
Client.login(token.toString());