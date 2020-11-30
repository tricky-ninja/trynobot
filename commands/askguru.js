const { args } = require('./hug');

module.exports = {
	name: 'askguru',
	aliases: ['ask', 'guru'],
    description: 'Answers to the meaning of life',
    usage: '<question(yes/no)>',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		var facts = ["Hell yes!", "That would be a big NO!", "Never", ":100:", "probably", "probably not", "How do i know I am not an astrologer you fool"];
var fact = Math.floor(Math.random() * facts.length);
if (!args.length){
	message.reply("Pls provide an argument")
}else{
const nameEmbed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`Ask guru`)
.setDescription(`${message.author.username}: ${args.join(" ")}\nSadhguru: ${facts[fact]}`)
message.channel.send(nameEmbed)
}	
},
};