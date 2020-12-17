
module.exports = {
	name: 'dare',
	aliases: ['d'],
	description: 'Dare challenge for truth or dare',
	cooldown: 2,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const luhv = require('luhv');

luhv.dare(question => {
    message.channel.send(question);
});
    },
    
};