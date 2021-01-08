module.exports = {
	name: 'prefix',
	aliases: ['pre', 'trigger'],
	description: 'Shows the current prefix or changes the current prefix',
    cooldown: 5,
    guildOnly: true,
    async execute(message, args, client, images, pre, guildPrefix, prefix, prefixes, Keyv) {
    // if there's at least one argument, set the prefix
    if(message.guild){
	if (args.length) {
		await prefixes.set(message.guild.id, args[0]);
		return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
	}

    return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id) || prefix}\``);
}

}
}