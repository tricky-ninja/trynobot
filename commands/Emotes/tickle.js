const {emotecolor} = require('../style.json');
module.exports={
    name: 'tickle',
    description: 'tickles a given user',
    args: true,
    aliases: ['lol','rub'],
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        
        var hugMsg = ["tickles"]
        const { tickle } = require("discord-emotes");


        tickle().then(
            function(value){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} ${hugMsg[Math.floor(Math.random() * hugMsg.length)]} ${message.mentions.users.first().username}`)
                .setImage(value)
                .setColor(emotecolor)
                message.channel.send(embed);
            },
        function(error){console.log(error)} 
    );
    }
}