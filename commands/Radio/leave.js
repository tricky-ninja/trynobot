
module.exports = {
	name: 'leave',
	aliases: ['dc'],
	description: 'Leaves VC',
    cooldown: 5,
    devonly: true,
    guildOnly: true,
    async execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv, DIG) {
        const Discord = require('discord.js');
        const radio = require('discord-radio-player')
        console.log(message.member.voice.channel)
        if (message.member.voice.channel) {
             client.leaveVoiceChannel();
             message.channel.createMessage(`Thanks for tuning in!`); 
            }
        else{
            message.reply('Sorry, Join a vc')
        }
          
}


}