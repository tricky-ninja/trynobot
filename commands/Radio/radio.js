module.exports = {
	name: 'radio',
	aliases: ['pr'],
	description: 'Plays a stream from radio',
    cooldown: 5,
    guildOnly: true,
    async execute(message, args) {
        const Discord = require('discord.js');
        const radio = require('discord-radio-player')
        if (!message.member.voice.channel) return message.reply('You must join a vc to use this command!')
        let serchT
        if (!args.length){
            serchT = 'cnn'
        }
        else {
            serchT = args.join(' ')
        }
        const search = await radio.Radio.search({searchterm:serchT,limit:1})
        if (!search[0]) return message.reply(`Can't find that stream`)
        let streamUrl = search[0].url_resolved
        let stream = radio.Radio.getStream(streamUrl,{volume:2},{bassboost:80}, {'8d':true})
        message.member.voice.channel.join().then(c=>c.play(stream,{type:'opus'})).then(
            message.reply(`Currently playing: <${streamUrl}>`)
        )
      
}


}
