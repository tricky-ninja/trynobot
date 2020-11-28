module.exports={
    name: 'kiss',
    description: 'kisses a user',
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
            .setAuthor(`${message.author.username} kisses ${taggedUser.username} in the lips`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media.tenor.com/images/4e60141bcd020d90cb7880bcaac8c419/tenor.gif");
           
            message.channel.send(loveEmbed); 
    }
}