/**********************************************Copyright***********************************************************
									 This work is licensed under the
			 Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. 
			 To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/4.0/.
*******************************************************************************************************************/

const fs = require('fs');
const Discord = require('discord.js');
const { setPriority } = require('os');
//const { prefix, token } = require('./config.json');
const prefix = '&'
const client = new Discord.Client();
client.commands = new Discord.Collection();
const Keyv = require('keyv');
const prefixes = new Keyv('sqlite://database.sqlite');
const Canvas = require('canvas');
const images = require('./files/images')
var d = Math.random();
const DIG = require("discord-image-generation");


let sv
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
const cooldowns = new Discord.Collection()

client.once('ready', () => {
        const statusList = [
        'Wishing you a Happy republic day',
        '&help',
        'Love India'
          ]
      
      setInterval(function () {
          let changingStatus = statusList[Math.floor(Math.random() * statusList.length)];
          
      
        }, 10000)
		client.user.setActivity('&help | Tryno Bot', {type: 'LISTENING' });
	console.log(`Ready to serve ${client.guilds.cache.size} servers`);
});
client.on('message', async message => {

	if (message.author.bot) return;
	d = Math.random();
	let args;
	let pre;
	let guildPrefix;
	d = Math.random();
	if (message.guild) {
		if (message.content.startsWith(prefix)){
			pre = prefix;
			}else {
				// check the guild-level prefix
				 guildPrefix = await prefixes.get(message.guild.id);
				if (message.content.startsWith(guildPrefix)) pre = guildPrefix;
			}
			if (!pre) return;
				args = message.content.slice(prefix.length).trim().split(/\s+/);
		} else {
			// handle DMs
			const slice = message.content.startsWith(prefix) ? prefix.length : 0;
			args = message.content.slice(slice).split(/\s+/);
		}
	

	const tuser = message.mentions.users.first();
	const commandName = args.shift().toLowerCase();
	const devonly = ['711074637689389127', '751736021661778004', '739502238032068659', '689845214273339589', '689418782934040592'];
	const maindevs = ['711074637689389127', '751736021661778004']
	const dev = client.users.cache.get('711074637689389127');
	const dev2 = client.users.cache.get('751736021661778004');
	const dev3 = client.users.cache.get('689845214273339589');
	const dev4 = client.users.cache.get('689418782934040592');
	const dev5 = client.users.cache.get('739502238032068659');

const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

if (command.guildOnly && message.channel.type === 'dm') {
	return message.reply('I can\'t execute that command inside DMs!');
}


if (command.join){


	
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
		if (command.devonly){
			if (!devonly.includes(message.author.id)) {
				message.channel.send(`You are not a developer!`)
				return
			}
		}
		if (command.maindevonly){
			if (!maindevs.includes(message.author.id)){
				message.channel.send(`Only main devs have the permision to do that`)
				return
			}
		}
		if (command.log){
					
			if (!args.length) {
				return message.channel.send(`You didn't provide any feedback, ${message.author}!`);
			}
			var tick = Math.random() * 1000000000000000000
			const nameEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(`${message.author.username} send a feedback`)
	
	.setDescription(`Username: ${message.author.username}\nId: ${message.author.id}\nServer: ${message.guild}\nFeedback: ${args.join(" ")}\nToken: ${tick}`);
			dev.send(nameEmbed);
			dev2.send(nameEmbed);
			dev3.send(nameEmbed);
			dev4.send(nameEmbed);
			dev5.send(nameEmbed);
			message.reply('Successfully sent your feedback to my developers').then(sentMessage => {
				sentMessage.react('👍');
			
							})
							message.author.send(`Your token: ${tick}`)
	
}
if (command.wtd){
    var msgg = args.slice(1)
	var user = args[0]
	var tok = args.slice(1,2)
    const nameEmbed = new Discord.MessageEmbed()
.setColor(13800508)
.setTitle(`The developers sent a reply to your feedback`)
.setDescription(`Token: ${tok}\nReply: ${args.slice(2).join(' ')}`);
client.users.cache.get(user).send(nameEmbed)
.then(message.channel.send('Done!'))
dev.send(`${message.author.username} replied to ${client.users.cache.get(user).username} with the token ${tok}\n Reply: ${args.slice(2).join(' ')}`)
dev2.send(`${message.author.username} replied to ${client.users.cache.get(user).username} with the token ${tok}\n Reply: ${args.slice(2).join(' ')}`)
dev3.send(`${message.author.username} replied to ${client.users.cache.get(user).username} with the token ${tok}\n Reply: ${args.slice(2).join(' ')}`)
dev4.send(`${message.author.username} replied to ${client.users.cache.get(user).username} with the token ${tok}\n Reply: ${args.slice(2).join(' ')}`)
dev5.send(`${message.author.username} replied to ${client.users.cache.get(user).username} with the token ${tok}\n Reply: ${args.slice(2).join(' ')}`)
 
}
if (command.devc){
			dev.send(`${message.author.username}: ${args.join(" ")}`);
			dev2.send(`${message.author.username}: ${args.join(" ")}`);
			dev3.send(`${message.author.username}: ${args.join(" ")}`);
			dev4.send(`${message.author.username}: ${args.join(" ")}`);
			dev5.send(`${message.author.username}: ${args.join(" ")}`);
			
}
if (command.awtd){
	 msgg = args.slice(1)
	 user = args[0]
	 tok = args.slice(1,2)
	const nameEmbedmsg = new Discord.MessageEmbed()
.setColor(13800508)
.setTitle(`The developers sent a reply to your feedback`)
.setDescription(`Token: ${tok}\nReply: ${args.slice(2).join(' ')}`);
client.users.cache.get(user).send(nameEmbedmsg)
.then(message.channel.send('Private reply done!'))
dev.send(`${message.author.username} replied to  ${client.users.cache.get(user).username} with the token ${tok}\n Reply: ${args.slice(2).join(" ")}`)
dev2.send(`Token ${tok} of ${client.users.cache.get(user).username} has been closed by a dev`)
dev3.send(`Token ${tok} of ${client.users.cache.get(user).username} has been closed by a dev`)
dev4.send(`Token ${tok} of ${client.users.cache.get(user).username} has been closed by a dev`)
dev5.send(`Token ${tok} of ${client.users.cache.get(user).username} has been closed by a dev`)
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
		
	
		
	if (message.author.id === '689845214273339589'){
         sv = Math.random();
 


}
if (message.author.id === '806579471988818000') return 

		try {
			command.execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv, DIG);
			console.log(d)
		} catch (error) {
			console.error(error);
			message.channel.send(`\`\`\`${error}\`\`\``);
			const user = client.users.cache.get('711074637689389127');
		user.send(`\`\`\`there was an error \n Error: ${error.message} \n Author: ${message.author.username}\nServer: ${message.guild}\`\`\``);
		user.send(`\`\`\`${error}\`\`\``)
		}
});
client.login(process.env.TOKEN);
