module.exports = {
	name: 'credits',
	aliases: ['developers'],
	description: 'Display credits',
	execute(message) {
        const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(6601338)
.setTitle("This bot is made by")
.setDescription(`**TrickyNinja#7497**\nCheckout github.com/Xhackers7`);
message.channel.send(nameEmbed);
	},
};
