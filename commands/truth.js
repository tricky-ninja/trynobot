
module.exports = {
	name: 'truth',
	aliases: ['t'],
	description: 'Truth question for truth or dare',
	cooldown: 5,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		var truths = ["What is the most embarrassing thing you’ve ever done?"," What is the most childish thing you’ve done over the age of 13?","Who are you crushing on right now?","How many people have you kissed or slept with?"," Tell me a time you were rejected, and describe it in detail for at least five minutes!","What is the meanest thing you’ve ever done to somebody?","Have you ever peed yourself as an adult or teenager?","What is something illegal you’ve done?","What is the grossest thing you’ve overheard someone do?","Tell me something you don’t like about your crush.","Who is a person you don’t like but pretend to?","Who is one person you wish was still in your life?","Do you think you’re uglier or better looking than most people you know?"," When was a time you felt really embarrassed for somebody else?","Have you ever stolen something from your parents or another person?","At what age did you stop sleeping with a light on?","What is the silliest thing you’re genuinely scared of?","Do you believe in ghosts?","Have you ever been pulled over by the cops?","Have you ever catfished anybody? If so, what happened? If not, have you wanted to?","What is something you did a long time ago that you still regret today?","Have you ever heard your parents sleeping together?","What is the naughtiest thing you’ve ever done?","What is a really gross habit you have and never wanted anybody to find out?","Have you ever been in a police car, and if so, why?","What is something your best friend or significant other does that you really hate?","Have you ever hacked into someone’s social media to read their messages?","Have you ever creeped on or stalked somebody on social media?","Describe your grossest kiss and why it was so nasty!"];
        var truth = Math.floor(Math.random() * truths.length);
        message.channel.send(truths[truth])
    },
    
};