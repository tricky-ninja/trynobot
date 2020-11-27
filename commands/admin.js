module.exports = {
    name: 'admin',
    aliases: ['owner', 'leader'],
    description: 'Ping server owner',
    guildOnly: true,

    execute(message, args) {
        const Discord = require('discord.js');
        const client = new Discord.Client();
        message.channel.send(`${message.guild.owner} is the admin`)
        
    }
}