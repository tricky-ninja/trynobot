module.exports={
    name: 'kiss',
    description: 'kisses a user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        const taggedUser = message.mentions.users.first();

        var kisses = ["https://media.tenor.com/images/4e60141bcd020d90cb7880bcaac8c419/tenor.gif","https://media.tenor.com/images/a496f6c08cdf01c97365e917d7a229dc/tenor.gif",
    "https://media.tenor.com/images/dd777838018ab9e97c45ba34596bb8de/tenor.gif","https://media.tenor.com/images/68d59bb29d7d8f7895ce385869989852/tenor.gif",
    "https://media.tenor.com/images/be2b3298bc9880b9ffcdc7a47635fff6/tenor.gif","https://media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif",
    "https://media.tenor.com/images/5a94586497b63e7b62545ee3ac01b2c1/tenor.gif","https://media.tenor.com/images/a47e482b7483e0b157323a5cd61595da/tenor.gif",
    "https://media.tenor.com/images/f2cef6ceb6f7d898142a423822fec28d/tenor.gif","https://media.tenor.com/images/4b75a7e318cb515156bb7bfe5b3bbe6f/tenor.gif",
    "https://media.tenor.com/images/faadbe17f1b4fbf399be38eaddff6e05/tenor.gif","https://media.tenor.com/images/d2fa4d8a14db8b1301efe79146cd64eb/tenor.gif"]
        
        var kiss = Math.floor(Math.random() * kisses.length)
    
        var kissMsg = ["in the lips", "cute", "enjoy"]
    
        var kissN = Math.floor(Math.random() * kissMsg.length)

        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} kisses ${taggedUser.username} ${kissMsg[kissN]}`)
            .setColor(16732321)
            .setImage(kisses[kiss]);
           
            message.channel.send(loveEmbed); 
    }
}