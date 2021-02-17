const {emotecolor} = require('../../style.json');
module.exports={
    name: 'cat',
    description: 'hugs a given user',
    aliases: ['meow','kitty'],
    

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');

        
        var hugMsg = ["Cute", "Aww","Adorable"]
        const { cat } = require("discord-emotes");


        cat().then(
            function(value){
                const embed = new Discord.MessageEmbed()
                .setTitle(`Here is your cat ${hugMsg[Math.floor(Math.random() * hugMsg.length)]}!`)
                .setImage(value)
                .setColor(emotecolor)
                message.channel.send(embed);
            },
        function(error){console.log(error)} 
    );
    }
}