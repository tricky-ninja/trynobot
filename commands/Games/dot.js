const {gamecolor} = require('../../style.json');
module.exports = {
	name: 'dot',
	aliases: ['connect four'],
    description: 'Play connect four',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const GameCord = require('gamecord-fork').djs
 
        new GameCord.ConnectFour(message)
        // Always better to set max time because the default one is just 5s
        .on('end', game => console.log(`${game.message.author.tag}'s snake game score was ${game.score}`)) // Start event also exists
        .run()
        

       
},
};
