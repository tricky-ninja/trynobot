
module.exports = {
	name: 'ship',
	description: 'Love calculator',
    cooldown: 2,
	execute(message, args) {
        const luhv = require('luhv');

        luhv.loveCount(args[0], args[1], (love) => {
            message.channel.send(`You both have: ${love}% love`);
        }, (err) => {
            console.log(err);
        });	
        
	},
};