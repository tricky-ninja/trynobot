const {emotecolor} = require('../../style.json');
module.exports={
    name: 'punch',
    description: 'punches a given user',
    args: true,
    aliases: ['thappad','beat'],
    usage: '<@username>',
    guildOnly: true,

	

    async execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        const { Random } = require("something-random-on-discord")
const random = new Random();

        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't mention anyone, ${message.author}!`);
        }
        
        var hugMsg = ["punches","punched"]
        let data = await random.getAnimeImgURL("punch")
        
                const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} ${hugMsg[Math.floor(Math.random() * hugMsg.length)]} ${message.mentions.users.first().username}`)
                .setImage(data)
                .setColor(emotecolor)
                message.channel.send(embed);
        
        
    
    }
}