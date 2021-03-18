const {gamecolor} = require('../../style.json');
module.exports = {
	name: 'mine',
	aliases: ['minesweeper'],
    description: 'Play minesweeper game',
    usage: '<rows> <columns> <mines>',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const Minesweeper = require('discord.js-minesweeper');
 
        let rows = parseInt(args[0]);
    let columns = parseInt(args[1]);
    let mines = parseInt(args[2]);
 
    if (!rows) {
      rows = 9
    }
 
    if (!columns) {
      columns = 9
    }
 
    if (!mines) {
      mines = 10
      message.channel.send(':information_source: Game started with default configuration')
    }
    
    const minesweeper = new Minesweeper({ rows, columns, mines});
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.channel.send(':warning: You have provided invalid data.');
        

       
},
};
