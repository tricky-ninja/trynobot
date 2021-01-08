module.exports={
    name: 'hug',
    description: 'hugs a user',
    args: true,
    usage: '<@username>',
    guildOnly: true,

	

    execute(message, args, client, Discord, images) {
        const util = require('util');
        if (!message.mentions.users.size) {
            return message.channel.send(`You didn't provide any mention anyone, ${message.author}!`);
        }
        const taggedUser = message.mentions.users.first();
    var hugs =  [
        "https://media.tenor.com/images/ecf4840ba6fac22be773e586493d5283/tenor.gif", "https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif", 
        "https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif", "https://media.tenor.com/images/0a1652de311806ce55820a7115993853/tenor.gif",
        "https://media.tenor.com/images/dedb92412ec281c9a89b79492fa71831/tenor.gif","https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif",
        "https://media.tenor.com/images/a9730f44f28d959abb4c5b31edc77de8/tenor.gif","https://media.tenor.com/images/1ca37ea5d3ec66ea08893d8679c04ae1/tenor.gif",
        "https://media.tenor.com/images/1e058dc8d0ccd337b6d26cbab43b6e30/tenor.gif"
    ]
    var wave = images.hug[Math.floor(Math.random() * hugs.length)]
    
    var waveMsg = ["hugs", "is embaracing", "is hugging"]

    var waveN = Math.floor(Math.random() * waveMsg.length)
    const loveEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} ${waveMsg[waveN]} ${taggedUser.username}`)
            .setColor(16732321)
            .setImage(wave);
           
            message.channel.send(loveEmbed); 
    }
}