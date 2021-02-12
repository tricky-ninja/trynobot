const {emotecolor} = require('../style.json');
module.exports={
    name: 'scream',
    description: 'makes you scream',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        var screamMsg=["is screaming","is screaming for help","stop screaming pls"]
        var screamN=Math.floor(Math.random() * screamMsg.length)
       var screams =["https://media.tenor.com/images/95d7e016f484d13bff622a5fa4f4fee9/tenor.gif","https://media.tenor.com/images/1cd275b10bf94b8d82c206eb3c99aae1/tenor.gif","https://media.tenor.com/images/1a74764c0139b0921159669e88b40831/tenor.gif","https://media.tenor.com/images/3fb93d15ab1a6eb4c2249ae16df37642/tenor.gif","https://media.tenor.com/images/7a4b6d87d88b696e072f1cda9f920c7c/tenor.gif"]
       var scream = Math.floor(Math.random() * screams.length)
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${screamMsg[screamN]}`)
            .setColor(emotecolor)
            .setImage(screams[scream]);
           
            message.channel.send(loveEmbed); 
    }
}