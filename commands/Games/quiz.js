const {gamecolor} = require('../../style.json');
module.exports = {
	name: 'quiz',
	aliases: ['trivia'],
    description: 'Play trivia game',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const GameCord = require('gamecord-fork').djs
 
        new GameCord.Quiz(message)
        .setTitle('Tryno quiz')
        .setColor(gamecolor)
        .setTime(20000) // Set time
        .on('start', game => console.log(game.item.answers)) // Start event also exists
        .run()
        

       
},
};
