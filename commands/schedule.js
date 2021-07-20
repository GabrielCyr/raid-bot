module.exports = {
    name: 'schedule',
    aliases: ['whenthefuckdoweraidagain'],
    description: 'Outputs the determined schedule.',
    execute(message, args) {
        if (args === undefined || args.length == 0) {
            message.channel.send("Please enter the name of a schedule!");
            return;
        }
        var fs = require('fs');
        try {
            const schedule = fs.readFileSync(`./schedules/${args[0]}.txt`, 'utf8');
            message.channel.send(schedule);
        } catch {
            message.channel.send("Could not find a schedule with that name!");
        }
    }
}