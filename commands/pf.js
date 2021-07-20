module.exports = {
    name: 'pf',
    aliases: ['partyfinder'],
    description: 'Tags raiders to signal that the pf is up.',
    execute(message, args) {
        const roleId = '829559287478878209';// TEA members'829559287478878209' Test'859888623616262145';
        const pw = args[0] ? args[0] : 'none';
        message.channel.send('<@&' + roleId +'> Pf is up! Password: ' + pw );
    }
}