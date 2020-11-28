module.exports={
    name: 'wipe',
    description: 'relievs a given user',
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
        if (taggedUser.bot){
            return message.reply('Why are you loving the bots :thinking:')
        }
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} is relieving ${taggedUser.username}`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media.tenor.com/images/36ba64b1cdaef5680f5697dd5e625921/tenor.gif");
           
            message.channel.send(loveEmbed); 
    }
}