module.exports={
    name: 'smile',
    aliases: ['laugh', 'happy'],
    description: 'makes you smile',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        var smileMsg=["is happy","is smiling","is laughing"]
        var smileN=Math.floor(Math.random() * smileMsg.length)
       var smiles =["https://media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif","https://media.tenor.com/images/65affef767eec1db4f67f8c71d33141c/tenor.gif","https://media.tenor.com/images/769fede93ec2f2293dadca1e0449eb50/tenor.gif","https://media.tenor.com/images/3efbb11e9aa38cd4d69b4b00ade41b85/tenor.gif","https://media.tenor.com/images/ef34332bec620cc4e5fc14fe3d3c4fb6/tenor.gif","https://media.tenor.com/images/7a15e5fa64b4b2b4dde8554339d3cfa0/tenor.gif","https://media.tenor.com/images/638a648136ae945f6150d674194d0cc8/tenor.gif","https://media.tenor.com/images/057904f47ce116db162c6d8d7b1433df/tenor.gif"]
       var smile = Math.floor(Math.random() * smiles.length)
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${smileMsg[smileN]}`)
            .setColor('RANDOM')
            .setImage(smiles[smile]);
           
            message.channel.send(loveEmbed); 
    }
}