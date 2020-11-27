module.exports={
    name: 'love',
    aliases: ['l', 'heart'],
    description: 'loves a given user',
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
            .setAuthor(`${message.author.username} is loving ${taggedUser.username}`, message.author.displayAvatarURL())
            .setColor(16732321)
            .setImage("https://media1.tenor.com/images/1dc3fcce5f6b3c57276e7f29d871bd46/tenor.gif?itemid=9246757");
           
            message.channel.send(loveEmbed); 
    }
}