const {emotecolor} = require('../../style.json');
module.exports={
    name: 'kiss',
    description: 'kisses a given user',
    args: true,
    aliases: ['kissss'],
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        
        var hugMsg = ["is kissing", "kisses","kissed"]
        const { kiss } = require("discord-emotes");


        kiss().then(
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