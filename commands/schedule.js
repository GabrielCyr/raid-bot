module.exports = {
    name: 'schedule',
    aliases: ['whenthefuckdoweraidagain'],
    description: 'Outputs the determined schedule.',
    execute(message, args) {
        var fs = require('fs');
        try {
            const schedule = fs.readFileSync(`./schedules/${args[0]}.txt`, 'utf8');
            message.channel.send(schedule);
        } catch {
            message.channel.send("Could not retrieve a file with that name!");
        }

        //message.channel.send(
        //    'CURRENT SCHEDULE\nTuesday 9h-11h30 PM EST\nWednesday 8h-11h PM EST\nThursday 9h-11h30 PM EST');
    }
}