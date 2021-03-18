const {emotecolor} = require('../../style.json');
module.exports = {
	name: 'server',
	aliases: ['guild', 'sinfo'],
	description: 'Display server info',
	guildOnly: true,

	execute(message) {
        const Discord = require('discord.js');
		const nameEmbed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name}`)
.setColor(emotecolor)
.setDescription(`**ServerName \n	**↳ ${message.guild.name}\n\n**Total members\n		**↳  ${message.guild.memberCount}\n\n**Date of creation \n**	↳  ${message.guild.createdAt}\n\n**Server region \n	**↳  ${message.guild.region}`);
message.channel.send(nameEmbed);
	},
};