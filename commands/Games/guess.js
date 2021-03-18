const {gamecolor} = require('../../style.json');
module.exports = {
	name: 'guess',
    description: 'Play gussing game you got 10 seconds to answer',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const GameCord = require('gamecord-fork').djs
 
        new GameCord.GuessGame(message)
        .setColor(gamecolor)
        .setTime(10000)
        // Always better to set max time because the default one is just 5s
        .on('start', game => console.log(`${game.item}`)) // Start event also exists
        .run()
        

       
},
};
