const {emotecolor} = require('../../style.json');
module.exports={
    name: 'kill',
    description: 'kills a user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
        }
        const taggedUser = message.mentions.users.first();
        var kills =["https://media.tenor.com/images/f2815deb4991c4153a50801a7c95ac2c/tenor.gif","https://media.tenor.com/images/2c36ce3abcc2e2135f3a5575f0bcd882/tenor.gif",
        "https://media.tenor.com/images/208d60c258b75fa3ab713f768200293c/tenor.gif","https://media.tenor.com/images/e4f4de39be542c0820a7725b767ec1a0/tenor.gif",
        "https://media.tenor.com/images/5101680b2eb80e2bd3da6039cb1c2eb9/tenor.gif","https://media.tenor.com/images/16623d39acb89d455a5c6e4efec8da8f/tenor.gif"]
    
    var kill = Math.floor(Math.random() * kills.length)

    var killMsg = ["oh my", "cruel", "oof", "call the cops"]
    var killN = Math.floor(Math.random() * killMsg.length)

        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} killed ${taggedUser.username} ${killMsg[killN]}`)
            .setColor(emotecolor)
            .setImage(kills[kill]);
           
            message.channel.send(loveEmbed); 
    }
}