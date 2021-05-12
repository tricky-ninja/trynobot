
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
const qu = r.get_truth();
let que = [q]
var wque = Math.floor(Math.random() * que.length)
const emojis = [':eyes:',':face_with_monocle:',':thinking:',':question:',':grey_question:', ':stuck_out_tongue_winking_eye:',':rolling_eyes:',':see_no_evil:',':zipper_mouth:',':face_with_hand_over_mouth:',':hear_no_evil:',':stuck_out_tongue_winking_eye:',':speak_no_evil:',':no_mouth:']
var emoji = Math.floor(Math.random() * emojis.length)
message.channel.send(`**${emojis[emoji]} ${que[wque]} ${emojis[emoji]}**`)
console.log(que)
console.log(wque)
    },
    
};