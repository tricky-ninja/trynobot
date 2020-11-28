module.exports={
    name: 'wave',
    description: 'waves a user',
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
            .setAuthor(`${message.author.username} is waving at ${taggedUser.username}`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media.tenor.com/images/8fd75e974da8aa9e506efad228ce5acc/tenor.gif");
           
            message.channel.send(loveEmbed); 
    }
}