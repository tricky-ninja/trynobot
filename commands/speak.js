const { args } = require('./hug');
const ytdl = require('ytdl-core');
module.exports = {
	name: 'speak',
	aliases: ['askvc', 'voice'],
    description: 'Answers to the meaning of life through vc',
    usage: '<question(yes/no)>',
    cooldown: 5,
    sp: true,
	async execute (message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
        var facts = ["audio/durandam.mp4"];
        const vc = message.member.voice.channel;
var fact = Math.floor(Math.random() * facts.length);
if (!args.length){
    message.reply("Pls provide an argument")
}else{
    if(vc) {
        const connection  = await vc.join();
    
    
	const dispatcher = connection.play(`${facts[fact]}`, { filter: 'audioonly' });
	message.reply(`This command is under construction if you have any funny meme sounds send it via \`&dev\``)
    dispatcher.on('finish', () => vc.leave());
}    
 else{
    message.reply("Join vc first");
}
}
},
};