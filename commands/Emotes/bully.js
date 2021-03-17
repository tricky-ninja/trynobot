const {emotecolor} = require('../../style.json');
module.exports={
    name: 'bully',
    description: 'bullies a given user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        var bullys =["https://media.tenor.com/images/57193f6e682485579d187adb42ce3a35/tenor.gif", "https://media.tenor.com/images/9bf7bd0dcc88594f68ab9b9b1407e30d/tenor.gif","https://media.tenor.com/images/a6ba47d5df4bfc7aea47f9d1f4def1e0/tenor.gif","https://media.tenor.com/images/71ec1ce5f2748696aadcbb6bf1d9a662/tenor.gif","https://media.tenor.com/images/785bc5e5c6b0ec2a2d1104278fb10e94/tenor.gif","https://media.tenor.com/images/6f937479462e704b3074bca16a5a536e/tenor.gif","https://media.tenor.com/images/aba7e2adf6be6990aa9361bf3fbeba05/tenor.gif","https://media.tenor.com/images/36978228ff101d83cc041530c383aaaa/tenor.gif"]
        var bully =  Math.floor(Math.random() * bullys.length)
       var bullyMsg = ["Ha Ha","Deserves it"]
       var bullyN= Math.floor(Math.random() * bullyMsg.length)
       const taggedUser = message.mentions.users.first();
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} is bullying ${taggedUser.username}. ${bullyMsg[bullyN]}`)
            .setColor(emotecolor)
            .setImage(bullys[bully]);
           
            message.channel.send(loveEmbed); 
    }
}