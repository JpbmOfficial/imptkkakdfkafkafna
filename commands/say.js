const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if (message.author.id !== ('390960333314850817')) return message.channel.send("You aren't my owner, sorry.");
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You must have Manage Messages permission to do that.");
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
