module.exports = {
	name: 'credits',
	aliases: ['developers'],
	description: 'Display credits',
	execute(message) {
        const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(6601338)
.setTitle("This bot is made by")
.setDescription(`This bot is made by TrickyNinja`);
message.channel.send(nameEmbed);
	},
};
