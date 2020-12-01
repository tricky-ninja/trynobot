//const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
	name: 'help',
	aliases: ['h', 'start'],
	description: 'List all of my commands or info about a specific command.',
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
const { commands } = message.client;

if (!args.length) {




const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Here is a list of my commands')

	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription(`${commands.map(command => command.name).join(', ')}\n\n`)
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setAuthor('Some footer text here', 'https://i.imgur.com/wSTFkRM.png','https://discord.js.org/')
	

    



return message.author.send(exampleEmbed)
	.then(() => {
		if (message.channel.type === 'dm') return;
		message.reply('I\'ve sent you a DM with all my commands!');
	})
	.catch(error => {
		console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
		message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
	});

}
const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('that\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true });


	},
};
