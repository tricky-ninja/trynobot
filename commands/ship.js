
module.exports = {
	name: 'ship',
	description: 'Love calculator',
    cooldown: 2,
	execute(message, args) {
        const luhv = require('luhv');
        const Discord = require('discord.js');
        const client = new Discord.Client();
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
            
            luhv.loveCount(args[0], args[1], (love) => {
                message.channel.send(`You both have: ${love}% love`);
            }, (err) => {
                message.channel.send(err);
            });	
        }
        
        
	},
};