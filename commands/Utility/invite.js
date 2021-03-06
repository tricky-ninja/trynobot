
module.exports = {
	name: 'invite',
	aliases: ['inv', 'add'],
	description: 'Invite me to your server',
	cooldown: 5,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		message.channel.send(`Hey Pls support me by adding me to your server\nHere is the link: <https://discord.com/api/oauth2/authorize?client_id=778527592353366018&permissions=8&scope=applications.commands%20bot>`);
	},
};