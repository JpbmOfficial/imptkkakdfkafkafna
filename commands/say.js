const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      message.delete().catch();
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
