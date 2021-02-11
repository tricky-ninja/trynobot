module.exports={
    name: 'slap',
    description: 'slapss a given user',
    args: true,
    aliases: ['thappad','punch','beat'],
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        
        var hugMsg = ["slapped", "beated","punched"]
        const { slap } = require("discord-emotes");


        slap().then(
            function(value){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} ${hugMsg[Math.floor(Math.random() * hugMsg.length)]} ${message.mentions.users.first().username}`)
                .setImage(value)
                message.channel.send(embed);
            },
        function(error){console.log(error)} 
    );
    }
}