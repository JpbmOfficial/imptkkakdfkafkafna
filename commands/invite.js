const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let inviteembed = new Discord.RichEmbed()
    .setDescription("Invite Link")
    .setColor("RANDOM")
    .addField("Invite Link",  "https://discordapp.com/oauth2/authorize?client_id=429770671833219092&scope=bot&permissions=8")
  .setFooter("impt");

    message.channel.send(inviteembed);

}
module.exports.help = {
    name:"invite"
}
