module.exports={
    name: 'wave',
    description: 'waves a user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args, client, Discord, images) {
        const util = require('util');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
        }
        const taggedUser = message.mentions.users.first();
    
    var wave = images.wave[Math.floor(Math.random() * images.wave.length)]
    
    var waveMsg = ["says hi to", "is waving at", "says hello to"]

    var waveN = Math.floor(Math.random() * waveMsg.length)
    const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${waveMsg[waveN]} ${taggedUser.username}`)
            .setColor(16732321)
            .setImage(wave);
           
            message.channel.send(loveEmbed); 
    }
}