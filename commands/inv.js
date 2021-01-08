
const Discord = require('discord.js');
module.exports={
    name: 'inv',
    description: 'makes you inv',
    devonly: true,
    execute(message, args, client) {
// inside a command, event listener, etc.
message.channel.send("wrking")
message.author.send(client.guilds.cache.size)
client.guilds.cache.forEach((guild) => {
    guild.channels.cache.first().createInvite()
    .then(inv => message.author.send(`${guild.name} | ${inv.url}`));
})
    
}
}