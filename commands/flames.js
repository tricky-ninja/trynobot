
module.exports = {
	name: 'flames',
	aliases: ['fl'],
	description: 'Check your relation with your partner',
	cooldown: 5,
	execute(message, args) {
		const Discord = require('discord.js');
        const client = new Discord.Client();
        var a1 = args[0].toLowerCase();
        var b1 = args[1].toLowerCase();
        var a = Array.from(a1);
        var b = Array.from(b1);
        var flames=new Array('F', 'L', 'A', 'M', 'E', 'S')
    
        for (var i = 0; i<b.length; i++) {
            var arrlen = a.length;
            var blen = b.length;
            for (var j = 0; j<arrlen; j++) {
                if (b[i] == a[j]) {
                    a = a.slice(0, j).concat(a.slice(j+1, arrlen));
                    b = b.slice(0, i).concat(b.slice(i+1, blen));
                }
            }
        }
        var fc = a.length + b.length
        
        var stp=1;
        for(var x=6; x>1; x--)
                    {
                            var g=((fc%x)+stp)-1;
                            if(g>x)
                            {
                                    g=g%x;
                            }
                            if(g==0)
                            {
                                    g=flames.length;
                            }
                            flames.splice(g-1,1);
                            stp=g;
                            //alert(ar);
                    }


        if (flames == 'F'){
            message.channel.send("Freindship is the best")
        }
        else if (flames == 'L'){
            message.channel.send("You found a love . . . . . .")
        }
        else if (flames == 'A'){
            message.channel.send(`${args[1]} has a crush on ${args[0]}`)
        }
        else if (flames == 'M'){
            message.channel.send("Have a happy married life")
        }
        else if (flames == 'E'){
            message.channel.send("#Enemies4Life")
        }
        else if (flames == 'S'){
            message.channel.send("Take good care of your sibling")
        }
        
    },
    
};