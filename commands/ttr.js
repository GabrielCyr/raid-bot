module.exports = {
    name: 'ttr',
    aliases: ['timetoraid', 'raid', 'whenisraid', 'whenthefuckisraidyoupieceofshit'],
    description: 'Outputs time until next raid.',
    execute(message, args) {
        var now = new Date();
        
        var nextTuesday = new Date();
        nextTuesday.setDate(nextTuesday.getDate() + (7 + 2 - now.getDay()) % 7);
        nextTuesday.setHours(21);
        nextTuesday.setMinutes(0);
        nextTuesday.setMilliseconds(0);
        var nextRaid = nextTuesday;

        var nextWednesday = new Date();
        nextWednesday.setDate(nextWednesday.getDate() + (7 + 3 - now.getDay()) % 7);
        nextTuesday.setHours(20);
        nextTuesday.setMinutes(0);
        nextTuesday.setMilliseconds(0);
        if(Math.abs(nextRaid - now) > Math.abs(nextWednesday - now)) {
            nextRaid = nextWednesday;
        }

        var nextThursday = new Date();
        nextThursday.setDate(nextThursday.getDate() + (7 + 4 - now.getDay()) % 7);
        nextTuesday.setHours(21);
        nextTuesday.setMinutes(0);
        nextTuesday.setMilliseconds(0);
        if(Math.abs(nextRaid - now) > Math.abs(nextThursday - now)) {
            nextRaid = nextThursday;
        }

        // get total seconds between the times
        var delta = Math.abs(nextRaid - now) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        if(args.includes('aria')) {
            message.channel.send(
                'There\'s only ' + days + ' days, ' + hours + ' hours and ' + minutes + ' minutes left until Aria has to stop playing Ark!');
        } else {
            message.channel.send(
                'There are ' + days + ' days, ' + hours + ' hours and ' + minutes + ' minutes left until raid!');
        }
    }
}