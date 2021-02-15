
const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
	name: 'profile',
	description: 'Displays your profile',
    cooldown: 5,
	guildOnly: true,
	join: true,
	async execute(message) {
		
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
	
		if (message.mentions.users.size){
	
		
			
			
				
			// ctx (context) will be used to modify a lot of the canvas
		
			
			// This uses the canvas dimensions to stretch the image onto the entire canvas
			ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
			// Use helpful Attachment class structure to process the file for you
			ctx.strokeStyle = '#74037b';
			ctx.strokeRect(0, 0, canvas.width, canvas.height);
		
		
			ctx.font = '28px sans-serif';
			ctx.fillStyle = '#ffffff';
			ctx.fillText('Profile of,', canvas.width / 2.5, canvas.height / 3.5);
		
		
		
		
			ctx.font = applyText(canvas, message.mentions.users.first().username);
			// Select the style that will be used to fill the text in
			ctx.fillStyle = '#ffffff';
			// Actually fill the text with a solid color
			ctx.fillText(message.mentions.users.first().username, canvas.width / 2.5, canvas.height / 1.7);
		
		
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
		
			const avatar = await Canvas.loadImage(message.mentions.users.first().displayAvatarURL({ format: 'jpg' }));
			// Move the image downwards vertically and constrain its height to 200, so it's a square
			ctx.drawImage(avatar, 25, 25, 200, 200)
			const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
			message.channel.send(`${message.mentions.users.first().username}'s profile!`, attachment);
			return		
		}
	
	
	
	
	
	
		
			
		
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
				
	

	

	},
};