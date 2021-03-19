module.exports = {
	name: 'news',
	aliases: ['pn'],
	description: 'Plays a news from BBC',
    cooldown: 5,
    guildOnly: true,
    async execute(message, args) {
        const Discord = require('discord.js');
        const radio = require('discord-radio-player')
        message.channel.send('Latest news from BBC')
        const search = await radio.Radio.search({searchterm:'bbc',limit:1})
        let streamUrl = search[0].url_resolved
        let stream = radio.Radio.getStream(streamUrl,{volume:2}, {'8d':true})
        message.member.voice.channel.join().then(c=>c.play(stream,{type:'opus'}))
      
}


}