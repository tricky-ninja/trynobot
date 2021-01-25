const DIG = require("discord-image-generation");
module.exports = {
	name: 'trash',
	aliases: ['garbage', 'recycle'],
	description: 'Generate a trash meme',
	cooldown: 5,
	async execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv) {
        const Discord = require('discord.js');
        if (message.mentions.users.size){
            let avatar1 = message.mentions.users.first().displayAvatarURL({ dynamic: false, format: 'png' });
            let img1 = await new DIG.Delete().getImage(avatar1)
            // Add the image as an attachement
            let attach1 = new Discord.MessageAttachment(img1, "delete.png");;
            message.channel.send(attach1)
        }
        else{
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Delete().getImage(avatar)
        // Add the image as an attachement
        let attach = new Discord.MessageAttachment(img, "delete.png");;
        message.channel.send(attach)
        }
        // Make the image
       
	},
};