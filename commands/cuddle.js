const {emotecolor} = require('../style.json');
module.exports={
    name: 'cuddle',
    description: 'hugs a given user',
    args: true,
    aliases: ['huddle','snuggle'],
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        
        var hugMsg = ["are cuddling, you guys look cute", "are huddling","are snuggling"]
        const { cuddle } = require("discord-emotes");


        cuddle().then(
            function(value){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} and ${message.mentions.users.first().username} ${hugMsg[Math.floor(Math.random() * hugMsg.length)]}`)
                .setImage(value)
                .setColor(emotecolor)
                message.channel.send(embed);
            },
        function(error){console.log(error)} 
    );
    }
}