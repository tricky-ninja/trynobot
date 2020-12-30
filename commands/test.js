
module.exports={
    name: 'test',
    description: 'makes you test',
    devonly: true,
    execute(message, args, client, Discord) {
// inside a command, event listener, etc.
message.channel.send("wrking")
message.author.send(client.guilds.cache.size)
client.guilds.cache.forEach((guild) => {
    const serverlist = new Discord.MessageEmbed()
    .setTitle(`Tryno is in.`)
    .addField(guild)
    .setFooter(`Yo!`)
    message.author.send(serverlist)
})
    
}
}