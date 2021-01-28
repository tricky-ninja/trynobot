
module.exports = {
	name: 'truth',
	aliases: ['t'],
	description: 'Truth question for truth or dare',
	cooldown: 2,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const luhv = require('luhv');
		let q
luhv.truth(question => {
	 q = question
});
const r = require('better-tord');
const qu = r.get_question();
let que = [q,qu]
var wque = Math.floor(Math.random() * que.length)
message.channel.send(que[wque])
console.log(que)
console.log(wque)
    },
    
};