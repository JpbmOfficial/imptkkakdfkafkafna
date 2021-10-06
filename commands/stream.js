const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('390960333314850817')) return message.channel.send("You aren't my owner, sorry.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription(':negative_squared_cross_mark: Name streaming status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
   client.user.setPresence({ game: { name: `${status}`, url: 'https://twitch.tv/nocopyrightsounds', type: 1 } });
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription(':white_check_mark: You sucessfully changed streaming status');
  message.channel.send({ embed });
}};

module.exports.help = {
    name:"stream"
}
