module.exports={
    name: 'hug',
    description: 'hugs a given user',
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
            .setAuthor(`${message.author.username} is hugging ${taggedUser.username}`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media.tenor.com/images/ecf4840ba6fac22be773e586493d5283/tenor.gif");
           
            message.channel.send(loveEmbed); 
    }
}