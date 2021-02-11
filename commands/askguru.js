const { args } = require('./hug');

module.exports = {
	name: 'askguru',
	aliases: ['ask', 'guru','8ball'],
    description: 'Answers to the meaning of life',
    usage: '<question(yes/no)>',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const luhv = require('luhv');
if (!args.length){
	message.reply("Pls provide an argument")
}else{
	luhv.eightBall(result => {
message.channel.send(`**:8ball: ${result} **`)
	});

}	
},
};