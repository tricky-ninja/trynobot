const {emotecolor} = require('../../style.json');
module.exports={
    name: 'waifu',
    description: 'punches a given userwaifu',
    guildOnly: true,

	

    async execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        const { Random } = require("something-random-on-discord")
const random = new Random();

        
        
        var hugMsg = ["punches","punched"]
        let data = await random.getAnimeImgURL("waifu")
        
                const embed = new Discord.MessageEmbed()
                .setTitle(`Here is your waifu!`)
                .setImage(data)
                .setColor(emotecolor)
                message.channel.send(embed);
        
        
    
    }
}