const {emotecolor} = require('../../style.json');
module.exports={
    name: 'propose',
    aliases: ['marry', 'ring'],
    description: 'propose a user',
    args: true,
    usage: '<@userName>',
    guildOnly: true,

    execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        
        let auth=message.author
        if (!message.mentions.users.size) {
          return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
      }
        const taggedUser = message.mentions.users.first();
        if (taggedUser.bot){
            return message.reply(`Why are you proposing ${taggedUser.username}. Pls let us live happily :triumph:`)
        }
        let filter = m => m.author.id === taggedUser.id
        const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} is proposing ${taggedUser.username}. Do you want to accept it ${taggedUser.username}`)
            .setColor(emotecolor)
            .setImage("https://media.tenor.com/images/8098a5e15d6c857ace44a070e0a786a4/tenor.gif");
           
            message.channel.send(loveEmbed).then(() => {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  })
                  .then(message => {
                    message = message.first()
                    if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
                      
                      const Discord = require('discord.js');
              const nameEmbed = new Discord.MessageEmbed()
      .setColor(6601338)
      .setAuthor(`${taggedUser.username} and ${auth.username} are now couples`)
      message.channel.send(nameEmbed);
      
      
      
                    } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
                      message.channel.send(`You will get a better partner than ${taggedUser.username}`)
                    } else {
                      message.channel.send(`Terminated: Invalid Response`)
                    }
                  }) 
                })
         
    
}
}
