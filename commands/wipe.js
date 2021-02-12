const {emotecolor} = require('../style.json');
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
        const taggedUser = message.mentions.users.first()
        var wipes =["https://media.tenor.com/images/36ba64b1cdaef5680f5697dd5e625921/tenor.gif","https://media.tenor.com/images/306449563f717f54c91e6a6bc59b1824/tenor.gif","https://media.tenor.com/images/c872189fb9f115a2a3c65c57d82f62f0/tenor.gif","https://tenor.com/view/hug-anime-tear-gif-14566831","https://media.tenor.com/images/5fb67e10b9e329b87423671fd6d66629/tenor.gif"]
        var wipe = Math.floor(Math.random() * wipes.length)

    var wipeMsg = ["is releving", "is there for", "is caring for"]
    var wipeN = Math.floor(Math.random() * wipeMsg.length)

        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${wipeMsg[wipeN]} ${taggedUser.username}`, message.author.displayAvatarURL())
            .setColor(emotecolor)
            .setImage(wipes[wipe]);
           
            message.channel.send(loveEmbed); 
    }
}