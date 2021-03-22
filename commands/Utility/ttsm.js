module.exports = {
	name: 'ttsm',
	aliases: ['saym'],
	description: 'Speaks out messages in malayalam',
    args: true,
    usage: '<message>',
    cooldown: 5,
    guildOnly: true,
    async execute(message, args) {
        const Discord = require('discord.js');
       if (!message.member.voice.channel) return message.reply(`You need to join a vc to use that command`)
       const googleTTS = require('google-tts-api'); // CommonJS

// get audio URL
const url = googleTTS.getAudioUrl(args.join(' '), {
  lang: 'ml-IN',
  slow: false,
  host: 'https://translate.google.com',
});
console.log(url); 
const connection = await message.member.voice.channel.join();    
const dispatcher = connection.play(url); 
dispatcher.on('finish', () => {
	connection.disconnect();
});
}


}