
module.exports = {
	name: 'dare',
	aliases: ['d'],
	description: 'Dare challenge for truth or dare',
	cooldown: 5,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		var dares = ["Shave your arms and send me a pic.","Record yourself singing a song and post it on YouTube.","Mix a drop of every condiment in your house and drink/eat it.","Message someone you haven’t talked to in at least 1 year on Facebook or Instagram and take a screenshot.","Try to lick your own foot!","Do a three-way prank call to somebody so I can listen.","Text your crush and ask them out on a date.","Fill up the bath and get in with your current outfit still on.","Pick the third number on your contacts list and message them a silly poem.","Open up all your windows and sing an entire song as loud as you can.","Put ice cubes down your pants and try to shake them out and send me a video."," Take a video of yourself doing a crazy dance and post it to social media.","Ask a neighbor if they have fifty cents.","Walk around the block and talk to yourself the entire time, even when people are around.","Drink or eat a teaspoon of soap.","Close your eyes and reach into your fridge or food pantry – the first thing you touch, you have to eat.","Send me a screenshot of your messages with the last person besides me you texted.","Brush your teeth with peanut butter or another condiment and send me a pic.","Take a really unflattering picture and make it your profile picture for one full day.","Send me a screenshot of your selfies gallery.","Go up to your biggest window and dance really badly until someone walks past","Text a random number and write 'I see dead people'.","Text a random number a selfie.","Shave a part of your body you wouldn’t usually shave.","Pretend to be a cat for five minutes and send me a video.","Find the spiciest thing in your house and eat an entire spoonful of it.","Make a video of yourself doing your weirdest habit!","Put on clothes of the opposite s*x and take a video of yourself trying to act like a guy/girl.","Create a really bad, five-minute make-up tutorial and post it to YouTube."];
        var dare = Math.floor(Math.random() * dares.length);
        message.channel.send(dares[dare])
    },
    
};