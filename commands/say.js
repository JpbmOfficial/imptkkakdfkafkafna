const Discord = require("discord.js");
const authorized = [
    "390960333314850817",
    "813891156348764171"
    
];

if (!authorized.includes(message.author.id)){
    return message.channel.send("you do not have permissions");
}

module.exports.run = async (bot, message, args) => {
      if (!authorized.includes(message.author.id)) return message.channel.send(`<@${message.author.id}>, get fucked retarded.`)
      // if (message.author.id !== ('390960333314850817')) return message.channel.send(`<@${message.author.id}>, get fucked retarded.`)
      message.delete().catch();
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
