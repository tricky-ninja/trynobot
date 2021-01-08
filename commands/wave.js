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
    var waves = [
        "https://media.tenor.com/images/8fd75e974da8aa9e506efad228ce5acc/tenor.gif","https://media.tenor.com/images/9aeadd5087b298b784a8aa7c44a2b70a/tenor.gif",
    "https://media.tenor.com/images/4b9b18c7aae49b108354a22a0cb615fc/tenor.gif","https://media.tenor.com/images/250fc8aacb8c89b4b3b8a0384a3df4ea/tenor.gif",
    "https://media.tenor.com/images/b56d184f2309f8e1f256205131a0f2e1/tenor.gif", "https://media.tenor.com/images/a7fda223af704afd4d68929f06009d0d/tenor.gif",
    "https://media.tenor.com/images/e59de399e44d39ff55addf8d3a51da3a/tenor.gif", "https://media.tenor.com/images/fe3e2d08c49445ca807935eba60e5627/tenor.gif"
    ]
    var wave = images.wave[Math.floor(Math.random() * waves.length)]
    
    var waveMsg = ["says hi to", "is waving at", "says hello to"]

    var waveN = Math.floor(Math.random() * waveMsg.length)
    const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${waveMsg[waveN]} ${taggedUser.username}`)
            .setColor(16732321)
            .setImage(wave);
           
            message.channel.send(loveEmbed); 
    }
}