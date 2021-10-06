module.exports = {
	name: 'credits',
	aliases: ['developers'],
	description: 'Display credits',
	execute(message) {
        const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(6601338)
.setTitle("This bot is made by")
.setDescription(`Name: Sreyas, Github: Xhackers7, Discord: TrickyNinja#7497\nGithub: R4ndom1, Discord: BlackHole703#9822\nName: Arshal, Github: arshalabbas, Discord: LoL🐼Panda#3361\nName: Vasim, Github: muhammadvasim, Discord: I AM RADAL#9042`)
.setFooter(`More people are also involved in this bot, the above mentioned ones are the main devs who did most of the work\n**TrynoBot | Copyright© 2021**`);
message.channel.send(nameEmbed);
	},
};
