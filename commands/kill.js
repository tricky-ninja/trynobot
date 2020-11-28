module.exports={
    name: 'kill',
    description: 'kills a user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        const taggedUser = message.mentions.users.first();
        
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} killed ${taggedUser.username} oof`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media.tenor.com/images/f2815deb4991c4153a50801a7c95ac2c/tenor.gif");
           
            message.channel.send(loveEmbed); 
    }
}