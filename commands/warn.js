module.exports={
    name: 'warn',
    aliases: ['w', 'yellow-card'],
    description: 'warn a user',
    args: true,
    usage: '<@username> <reason>',
    guildOnly: true,
    cooldown: 10,

	execute(message, args) {
        const util = require('util');
        const Discord = require('discord.js');
        if(message.member.hasPermission("ADMINISTRATOR")) {
            if (!message.mentions.users.size) {
                return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
            }else{
                const taggedUser = message.mentions.users.first();
            const nameEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${taggedUser.username} is warned`)
            
            .setDescription(`Reason: ${args.slice(1).join(" ")}`);
            
            message.channel.send(nameEmbed);
            message.author.send(`You warned ${taggedUser}!`)
            taggedUser.send(nameEmbed)
            taggedUser.send(`Server: ${message.guild.name}`)
            }
}else {
    message.reply(`You dont have permission! Ask an admin to give you permison`)
}
    }
}
