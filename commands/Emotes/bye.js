const {emotecolor} = require('../../style.json');
module.exports={
    name: 'bye',
    description: 'waves a user',
    aliases: ['tata','cya'],
    guildOnly: true,

	

    execute(message, args, client, images) {
        const util = require('util');
        const Discord = require('discord.js');
        if (!message.mentions.users.size) {
            var wave1 = images.wave[Math.floor(Math.random() * images.wave.length)]
    
    var waveMsg = ["says bye", "will be back", "says goodbye to"]

    var waveN = Math.floor(Math.random() * waveMsg.length)
    const loveEmbed1 = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${waveMsg[waveN]}`)
            .setColor(emotecolor)
            .setImage(wave1);
           
    
            message.channel.send(`${loveEmbed1}`);
            return 
        }
        const taggedUser = message.mentions.users.first();
    
    var wave = images.wave[Math.floor(Math.random() * images.wave.length)]
    
    var waveMsg = ["says bye to", "is waving at", "says goodbye to"]

    var waveN = Math.floor(Math.random() * waveMsg.length)
    const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${waveMsg[waveN]} ${taggedUser.username}`)
            .setColor(emotecolor)
            .setImage(wave);
           
            message.channel.send(loveEmbed); 
    }
}
