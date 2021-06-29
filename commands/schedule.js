module.exports = {
    name: 'schedule',
    aliases: ['whenthefuckdoweraidagain'],
    description: 'Outputs the determined schedule.',
    execute(message, args) {
        message.channel.send(
            'CURRENT SCHEDULE\nTuesday 9h-11h30 PM EST\nWednesday 8h-11h PM EST\nThursday 9h-11h30 PM EST');
    }
}