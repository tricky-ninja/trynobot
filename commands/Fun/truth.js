
module.exports = {
	name: 'truth',
	aliases: ['t'],
	description: 'Truth question for truth or dare',
	cooldown: 2,
	execute(message) {
		const Discord = require('discord.js');
		const client = new Discord.Client();

const r = require('better-tord');
const qu = r.get_truth();
const emojis = [':eyes:',':face_with_monocle:',':thinking:',':question:',':grey_question:', ':stuck_out_tongue_winking_eye:',':rolling_eyes:',':see_no_evil:',':zipper_mouth:',':face_with_hand_over_mouth:',':hear_no_evil:',':stuck_out_tongue_winking_eye:',':speak_no_evil:',':no_mouth:']
var emoji = Math.floor(Math.random() * emojis.length)
if (message.author.id == '297453034173104138') return message.reply('Rickrolled')
message.channel.send(`**${emojis[emoji]} ${qu} ${emojis[emoji]}**`)
    },
    
};
