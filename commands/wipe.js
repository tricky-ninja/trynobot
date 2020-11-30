module.exports={
    name: 'wipe',
    description: 'relievs a given user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
        }
       
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} is relieving ${taggedUser.username}`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media.tenor.com/images/36ba64b1cdaef5680f5697dd5e625921/tenor.gif");
           
            message.channel.send(loveEmbed); 
    }
}