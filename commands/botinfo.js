const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", `${moment.utc(bot.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    .addField("Created By", "switchblades#0920");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
