module.exports = {
	name: 'prefix',
	aliases: ['wakeword', 'pr'],
    description: 'Changes the prefix',
    args: true,
    usage: '<prefix>',
	cooldown: 5,
	execute(message, args, prefix) {
		
        
        prefix=args[0]
        message.channel.send(`Prefix changed to \`${args[0]}\``)
    
	},
};