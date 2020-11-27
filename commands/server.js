module.exports = {
	name: 'server',
	aliases: ['guild', 'sinfo'],
	description: 'Display server info',
	guildOnly: true,

	execute(message) {
        const Discord = require('discord.js');
		const nameEmbed = new Discord.MessageEmbed()
.setColor(5517983)
.setTitle("ServerInfo")
.setDescription(`ServerName: ${message.guild.name}\nTotal memebers ${message.guild.memberCount}`);
message.channel.send(nameEmbed);
	},
};