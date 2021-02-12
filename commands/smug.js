const {emotecolor} = require('../style.json');
module.exports={
    name: 'smug',
    description: 'Smugs a given user',
    aliases: ['pride'],
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
       
        
        var hugMsg = ["is smuging"]
        const { smug } = require("discord-emotes");


        smug().then(
            function(value){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} ${hugMsg[Math.floor(Math.random() * hugMsg.length)]}`)
                .setImage(value)
                .setColor(emotecolor)
                message.channel.send(embed);
            },
        function(error){console.log(error)} 
    );
    }
}