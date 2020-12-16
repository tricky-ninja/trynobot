
module.exports = {
	name: 'truth',
	aliases: ['t'],
	description: 'Truth question for truth or dare',
	cooldown: 5,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const luhv = require('luhv');

luhv.truth(question => {
    message.channel.send(question);
});
    },
    
};