const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pingembed = new Discord.RichEmbed()
    .setThumbnail(bot.displayAvatarURL)
    .setColor("#15f153")
    .addField("Ping", `${Date.now() - message.createdTimestamp}ms.`)
// message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
//.addField("Ping", `${message.createdTimestamp - Date.now()}`)

    message.channel.send(pingembed);
}

module.exports.help = {
  name:"ping"
}
