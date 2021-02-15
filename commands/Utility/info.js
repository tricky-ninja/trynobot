module.exports = {
    name: 'info',
    aliases: ['information', 'details'],
    description: 'Display information about a user',
    execute(message) {
        if (!message.mentions.users.size) {
            const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(13800508)
.setTitle(`${message.author.username}'s info`)
.setDescription(`Username: ${message.author.username}\n Id: ${message.author.id}`);
        message.channel.send(nameEmbed)
        }
        else{
        const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(13800508)
.setTitle(`${message.mentions.users.first().username}'s info`)
.setDescription(`Username: ${message.mentions.users.first().username}\n Id: ${message.mentions.users.first().id}`);
        message.channel.send(nameEmbed)
        }
    }
}