const fs = require('fs');
const Discord = require('discord.js');
const { setPriority } = require('os');
//const { prefix, token } = require('./config.json');
const prefix = '&'
const client = new Discord.Client();
client.commands = new Discord.Collection();
const Canvas = require('canvas');
var d = Math.random();
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
client.on('message', async message => {
	d = Math.random();
    if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const tuser = message.mentions.users.first();
const commandName = args.shift().toLowerCase();
const devonly = ['711074637689389127', '751736021661778004'];
const dev = client.users.cache.get('711074637689389127');
const command = client.commands.get(commandName)
	|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

if (command.guildOnly && message.channel.type === 'dm') {
	return message.reply('I can\'t execute that command inside DMs!');
}


if (command.join){
	const applyText = (canvas, text) => {
		const ctx = canvas.getContext('2d');
	
		// Declare a base size of the font
		let fontSize = 70;
	
		do {
			// Assign the font to the context and decrement it so it can be measured again
			ctx.font = `${fontSize -= 10}px sans-serif`;
			// Compare pixel width of the text to the canvas minus the approximate avatar size
		} while (ctx.measureText(text).width > canvas.width - 300);
	
		// Return the result to use in the actual canvas
		return ctx.font;
	};
	const canvas = Canvas.createCanvas(700, 257);
	// ctx (context) will be used to modify a lot of the canvas

	const ctx =  canvas.getContext('2d');
	const background = await Canvas.loadImage('https://discordjs.guide/assets/img/2vsIPEP.3f295fd2.png')
	// This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);


	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Your profile,', canvas.width / 2.5, canvas.height / 3.5);




	ctx.font = applyText(canvas, message.author.username);
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText(message.author.username, canvas.width / 2.5, canvas.height / 1.7);


	ctx.font = '22px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(' Level: NaN    Money: NaN', canvas.width / 2.5, canvas.height / 1.3);


	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

	const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
	// Move the image downwards vertically and constrain its height to 200, so it's a square
	ctx.drawImage(avatar, 25, 25, 200, 200)
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	message.channel.send(`${message.author.username}'s profile!`, attachment);
            
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
		if (command.log){
					
			if (!args.length) {
				return message.channel.send(`You didn't provide any feedback, ${message.author}!`);
			}
			const nameEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(`${message.author.username} send a feedback`)
	
	.setDescription(`Username: ${message.author.username}\nId: ${message.author.id}\nServer: ${message.guild}\nFeedback: ${args.join(" ")}`);
			dev.send(nameEmbed);
			message.reply('Successfully sent your feedback to my developers').then(sentMessage => {
				sentMessage.react('👍');
			
							})
	
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
		
	
		if (d < 0.76)	{
			try {
				command.execute(message, args);
				message.channel.send("Checkout our music bot Wania\nInvite link: https://discord.com/oauth2/authorize?client_id=776393670965461002&permissions=37223488&scope=bot")
			} catch (error) {
				console.error(error);
				message.reply(`there was an error \n Error: ${error.message}`);
				const user = client.users.cache.get('711074637689389127');
			user.send(`there was an error \n Error: ${error.message} \n Author: ${message.author}\nServer: ${message.guild}`);
			}
			return
		}	
	
try {
	command.execute(message, args);
	console.log(d)
} catch (error) {
	console.error(error);
	message.reply(`there was an error \n Error: ${error.message}`);
	const user = client.users.cache.get('711074637689389127');
user.send(`there was an error \n Error: ${error.message} \n Author: ${message.author}\nServer: ${message.guild}`);
}
});
client.login(process.env.TOKEN);