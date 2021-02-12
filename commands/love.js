const {emotecolor} = require('../style.json');
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
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
        }
        const taggedUser = message.mentions.users.first();
        if (taggedUser.bot){
            return message.reply('Why are you loving the bots :thinking:')
        }
        var loves =["https://media1.tenor.com/images/1dc3fcce5f6b3c57276e7f29d871bd46/tenor.gif?itemid=9246757","https://tenor.com/view/hug-love-anime-kevyox-gif-14407779","https://media.tenor.com/images/eaa5b897b36a259f1e22548c78a8891a/tenor.gif","https://media.tenor.com/images/ef8fa995228fb2ce2a45b111f5f02faf/tenor.gif","https://media.tenor.com/images/c135121741b49c8a999f9c76f1012c52/tenor.gif","https://media.tenor.com/images/8e2ab891dfb725ea701630ebf57d290a/tenor.gif"]
        var love = Math.floor(Math.random() * loves.length)

    var loveMsg = ["loves", "shows love", "is loving", "likes"]
    var loveN = Math.floor(Math.random() * loveMsg.length)
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${loveMsg[loveN]} ${taggedUser.username}`)
            .setColor(emotecolor)
            .setImage(loves[love]);
           
            message.channel.send(loveEmbed); 
    }
}