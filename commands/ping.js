module.exports = {
	name: 'ping',
	aliases: ['work', 'hi'],
	description: 'Ping!',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong!');
	},
};