const DIG = require("discord-image-generation");
module.exports = {
	name: 'present',
	aliases: ['fact','facts'],
	description: 'Generate a presentation meme',
	cooldown: 5,
	async execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv) {
        const Discord = require('discord.js');
        let text
        if (!args.length){
            text = 'Ik i and arcane r good couples Arcane loves me\n She is mine'
        }
        else{
            text = args.join(' ')
            
        }
        let img = await new DIG.LisaPresentation().getImage(text);
            // Add the image as an attachement
            let attach = new Discord.MessageAttachment(img, "NotGaySavage.png");;
            message.channel.send(attach)
        // Make the image
       
	},
};
