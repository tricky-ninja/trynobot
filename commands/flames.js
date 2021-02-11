
module.exports = {
	name: 'flames',
	aliases: ['fl'],
	description: 'Check your relation with your partner',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
        const client = new Discord.Client();
        const luhv = require('luhv');
        var yname
        var pname
        if (!args.length){
           message.reply("Pls provide a name!")
        }
      else if (!message.mentions.users.size){
         
            if (args[1] == null){
                yname = message.author.username
                pname = args[0]
            }
            else if (args[1] != ''){
                yname = args[0]
                pname = args[1]
            }
        }
        else if (message.mentions.users.size){
            const members = message.mentions.users.array();
            const member1 = members[0];
            const member2 = members[1]
            if (member2 == null){
                yname = message.author.username
                pname = member1.username
            }
            else {
                yname = message.mentions.users.first().username
                pname = member2.username
            }
        }
        if (args.length){
            
luhv.flames(yname, pname, (flames) => {
    if (flames === 'friends') message.channel.send(`**:hugging: | ${pname} is ${yname}'s freind | :hugging:**`)
    if (flames === 'enemy') message.channel.send(`**:imp: | ${pname} is ${yname}'s worst enemy | :imp:**`)
    if (flames === 'lover') message.channel.send(`**:heartpulse: | ${pname} has a cursh on ${yname} | :heartpulse:**`)
    if (flames === 'marriage') message.channel.send(`**:ring: | ${pname} will get Married to ${yname} | :ring:**`)
    if (flames === 'affection') message.channel.send(`**:sparkling_heart: | ${pname} is attracted to ${yname} | :sparkling_heart:**`)
    if (flames === 'sister') message.channel.send(`**Please ping the owner(Tricky Gamer
        #7497) and take a screenshot of this miracle**`)
}, (err) => {
    message.channel.send(err);
});
        }
    },
    
};