
module.exports={
    name: 'test',
    description: 'makes you test',
    execute(message, args, client) {
// inside a command, event listener, etc.
message.channel.send("wrking")
message.author.send(client.guilds.cache.size)
    
}
}