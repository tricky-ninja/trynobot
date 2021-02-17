const DIG = require("discord-image-generation");
module.exports = {
	name: 'hitler',
	aliases: ['dictator'],
	description: 'Generate a SpiderMan meme',
	cooldown: 5,
	async execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv) {
        const Discord = require('discord.js');
        if (message.mentions.users.size){
            let avatar = message.mentions.users.first().displayAvatarURL({ dynamic: true, format: 'png' });
            let img = await new DIG.Hitler().getImage(avatar);
            // Add the image as an attachement
            let attach = new Discord.MessageAttachment(img, "Hitler.png");;
            message.channel.send(attach)
        }
        else{
            let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new DIG.Hitler().getImage(avatar);
            // Add the image as an attachement
            let attach = new Discord.MessageAttachment(img, "Hitler.png");;
            message.channel.send(attach)
        }
        // Make the image
       
	},
};