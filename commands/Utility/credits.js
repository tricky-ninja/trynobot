module.exports = {
	name: 'credits',
	aliases: ['developers'],
	description: 'Display credits',
	execute(message) {
        const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(6601338)
.setTitle("This bot is made by")
.setDescription(`Name: Sreyas\nDiscord: Tricky Gamer#7497\nGithub: Xhackers7`);
message.channel.send(nameEmbed);
	},
};