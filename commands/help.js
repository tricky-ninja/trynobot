const { MessageEmbed } = require("discord.js");
const prefix = '&'
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message, args) {
	const data = [];
	const { commands } = message.client;
	
    let commandss = message.client.commands.array();
	if (!args.length){
    let helpEmbed = new MessageEmbed()
      .setTitle(`${message.client.user.username} Help`)
      .setDescription("List of all commands")
      .setColor("#4AE60F");

    commandss.forEach((cmd) => {
      helpEmbed.addField(
        `**${prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
		true
	  
      );
    });

    helpEmbed.setTimestamp();

	return message.channel.send(helpEmbed).catch(console.error);
}
const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('that\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true });
  }
};