
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
    message.channel.send(`The relation between ${yname} and ${pname} is ${flames}`)
}, (err) => {
    message.channel.send(err);
});
        }
    },
    
};