const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if (message.author.id !== ('390960333314850817')) return message.channel.send("You aren't my owner, sorry.");
  const status = args.join(' ');
  if (status.length === 0) {
    const embed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setDescription('Name watching status!');
    message.channel.send({ embed });
  }

  else if (status.length !== 0) {
  client.user.setActivity(`${status}`, {  type: "WATCHING"});
  const embed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setDescription('You sucessfully changed watching status');
  message.channel.send({ embed });
}};
module.exports.help = {
    name: "watch"
}
