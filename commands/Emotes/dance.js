const {emotecolor} = require('../../style.json');
module.exports = {
    name: 'dance',
    description: 'Makes you dance',
    execute(message) {
        
            const Discord = require('discord.js');
            let dances = ["https://media.tenor.com/images/3470a1094fcb299e2b4caba0668fc660/tenor.gif", "https://media.tenor.com/images/6d3f67b633efdc169d9d849da0d8baae/tenor.gif","https://media.tenor.com/images/b85d1396f931424b789068dc6062970b/tenor.gif","https://media.tenor.com/images/0be4033d4b361127f4990add85864c5e/tenor.gif","https://media.tenor.com/images/fe3826b59f80f5e6c7cc04eb474fb44d/tenor.gif","https://media.tenor.com/images/848808af4db641ef63643bb7734b632c/tenor.gif","https://media.tenor.com/images/6ed068db3c6d268a6b9ff1fadf3117aa/tenor.gif"]
            let dance = Math.floor(Math.random() * dances.length)
            let danceMsg = ["loves to dance", "is dancing", "is rocking", "is shaking some booty"]
            let danceN = Math.floor(Math.random() * danceMsg.length)
        const nameEmbed = new Discord.MessageEmbed()
.setColor(emotecolor)
.setTitle(`${message.author.username} ${danceMsg[danceN]}`)
.setImage(dances[dance]);
        message.channel.send(nameEmbed)
        }
    }