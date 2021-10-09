const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if (message.author.id !== ('390960333314850817')) return message.channel.send("<@${message.author.id}>>, you aren't my owner, sorry.")
      message.delete().catch();
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
