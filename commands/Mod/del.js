module.exports = {
    name: 'del',
    aliases: ['clear', 'prune'],
    description: 'delete a given number of messages',
    guildOnly: true,

	execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        const client = new Discord.Client();
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount < 2 || amount > 501) {
        return message.reply('you need to input a number between 1 and 500.');
    }else{
        if (amount > 51){
            let filter = m => m.author.id === message.guild.ownerID
        message.channel.send(`${message.guild.owner} ${message.author.username} wants to delete ${amount} messages.\n What do you say yes or no`).then(() => {
          message.channel.awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ['time']
            })
            .then(message => {
              message = message.first()
              if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                message.channel.bulkDelete(amount, true).catch(err => {
                    console.error(err);
                    message.channel.send('there was an error trying to clear messages in this channel!');
                });
                const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(6601338)
.setTitle(`I deleted ${amount} messages for ${message.author.username}`)
.setDescription(`Username: ${message.author.username}\nId: ${message.author.id}\nMessages: ${amount}`);
message.channel.send(nameEmbed);



              } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
                message.channel.send(`Terminated`)
              } else {
                message.channel.send(`Terminated: Invalid Response`)
              }
            })
            .catch(collected => {
                message.channel.send('Timeout');
            });
        })
    }else{
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to clear messages in this channel!');
        });
        const Discord = require('discord.js');
        const nameEmbed = new Discord.MessageEmbed()
.setColor(6601338)
.setTitle(`I deleted ${amount} messages for ${message.author.username}`)
.setDescription(`Username: ${message.author.username}\nId: ${message.author.id}\nMessages: ${amount}`);
message.channel.send(nameEmbed);
message.author.send(nameEmbed)
message.guild.owner.send(nameEmbed)

    }
        
}
}else{
    message.reply('You dont have permission to do that!')
}
        
        
	},
};