const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    let helpembed = new Discord.RichEmbed()
    .setDescription("NSFW Help")
    .setColor("RANDOM")
.addField("NSFW","snapchat, uniform, pussy, ass, boobs, cosplay, public, 4k, asian, lewd, gif, milf")

  
    message.channel.send(helpembed);
}
module.exports.help = {
  name: "nsfwhelp"
}