module.exports = {
    name: 'today',
    aliases: ['whatdayisittodayyoupieceofshit'],
    description: 'Outputs the current day of the week.',
    execute(message, args) {
        var now = new Date();
        var day = now.toLocaleDateString('en-US', { weekday: 'long' })
        message.channel.send(
            'Today is ' + day + '!');
    }
}