const Discord = require('discord.js');
const client = new Discord.Client();
module.exports={
    name: 'test',
    description: 'makes you test',
    devonly: true,
    execute(message) {
// inside a command, event listener, etc.
message.author.send(`I am in: ${client.guilds.cache.size} servers`)
}
}