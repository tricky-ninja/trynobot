const fs = require('fs');
const Discord = require('discord.js');
//const { prefix, token } = require('./config.json');
const prefix = '&'
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}
const cooldowns = new Discord.Collection()

client.once('ready', () => {
	client.user.setActivity('&help', {type: 'LISTENING' });
	
	console.log('Ready!');
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const tuser = message.mentions.users.first();
const commandName = args.shift().toLowerCase();
const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

if (command.guildOnly && message.channel.type === 'dm') {
	return message.reply('I can\'t execute that command inside DMs!');
}

if (command.args && !args.length) {
	let reply = `You didn't provide any argument, ${message.author}!`;
	
			if (command.usage) {
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}
	
			return message.channel.send(reply);
	
		}else if (command.tuser){
			reply = `You didn't mentioned any user, ${message.author}!`;
			if (command.usage) {
				reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
			}
	
			return message.channel.send(reply);
		}
		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());
		}
	
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;
	
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	
			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
			}
		}
	
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		
		
	
try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply(`there was an error \n Error: ${error.message}`);
	const user = client.users.cache.get('711074637689389127');
user.send(`there was an error \n Error: ${error.message} \n Author: ${message.author}\nServer: ${message.guild}`);
}
});
client.login(process.env.TOKEN);