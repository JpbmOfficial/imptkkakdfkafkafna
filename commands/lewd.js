const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setImage(body.neko);

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "lewd"
}