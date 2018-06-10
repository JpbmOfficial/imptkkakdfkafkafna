const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== ('390960333314850817')) return message.channel.send("Huh.");
    bot.user.setStatus("idle")

}
module.exports.help = {
    name: "idle"
}

    
