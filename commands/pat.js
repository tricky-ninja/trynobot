module.exports={
    name: 'pat',
    description: 'pats a given user',
    args: true,
    aliases: ['pat','pet','cute'],
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        
        var hugMsg = ["pats", "pets"]
        const { pat } = require("discord-emotes");


        pat().then(
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