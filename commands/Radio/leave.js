
module.exports = {
	name: 'leave',
	aliases: ['dc'],
	description: 'Leaves VC',
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv, DIG) {
        const Discord = require('discord.js');
        const radio = require('discord-radio-player')
       
        if (message.member.voice.channel) {
            
            message.member.voice.channel.leave()
          
            
                
           
            }
        else{
            message.reply('Sorry, Join a vc')
        }
          
}


}
