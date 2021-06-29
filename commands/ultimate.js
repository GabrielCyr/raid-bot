module.exports = {
    name: 'ultimate',
    aliases: [],
    description: 'Outputs time since last ultimate.',
    execute(message, args) {
        var now = new Date();
        var tea = new Date(2019, 10, 10)

        // get total seconds between the times
        var delta = Math.abs(tea - now) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        message.channel.send(
            'It has been ' + days + ' days since the last ultimate was released.');
    }
}