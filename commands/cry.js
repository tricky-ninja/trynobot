module.exports={
    name: 'cry',
    description: 'makes you cry',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        var cryMsg=["is crying","is crying\nFriends lets relive them","is bursting into tears"]
        var cryN=Math.floor(Math.random() * cryMsg.length)
       var crys =["https://media.tenor.com/images/82c7523a9b203fc4e938d2d027540dea/tenor.gif","https://media.tenor.com/images/7cba9943d6449423bd9da78929bf6337/tenor.gif","https://media.tenor.com/images/a901f319531c79f6115e270ef510fdb3/tenor.gif","https://media.tenor.com/images/0a22069465be63d91946ced3359a3bfb/tenor.gif","https://media.tenor.com/images/09893b5192295d98cc1077e887e4b0a5/tenor.gif","https://media.tenor.com/images/1e227efd3fd0ce3cf625c52c6b3b2d3b/tenor.gif","https://media.tenor.com/images/8516e63ed64f255bea993cf52a80194a/tenor.gif"]
       var cry = Math.floor(Math.random() * crys.length)
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${cryMsg[cryN]}`)
            .setColor('RANDOM')
            .setImage(crys[cry]);
           
            message.channel.send(loveEmbed); 
    }
}