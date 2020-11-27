
module.exports = {
	name: 'ping',
	aliases: ['work', 'hi'],
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		message.channel.send(`🏓Latency is \`${Date.now() - message.createdTimestamp}\`ms. API Latency is \`${Math.round(client.ws.ping)}\`ms`);
	},
};