const {gamecolor} = require('../../style.json');
module.exports = {
	name: 'snake',
	aliases: ['snakee'],
    description: 'Play snake game but with a twist! You have 30 seconds score as much as you can',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const GameCord = require('gamecord-fork').djs
 
        new GameCord.SnakeGame(message)
        .setTitle('Tryno snake')
        .setColor(gamecolor)
        .setTime(30000) // Always better to set max time because the default one is just 5s
        .on('end', game => console.log(`${game.message.author.tag}'s snake game score was ${game.score}`)) // Start event also exists
        .run()
        

       
},
};
