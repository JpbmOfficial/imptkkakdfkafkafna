const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    let sicon = message.guild.iconURL;
    let userembed = new Discord.RichEmbed()
    .setDescription("User Info")
    .setColor("#15f153")
    .setThumbnail(message.member.displayAvatarURL)
    .addField("User Name", user.username)
    .addField("ID", user.id)
    .addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '))
    .addField("Joined Discord in", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    .addField("Joined the Server in", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
    .addField('Status', `${user.presence.status}`) //The presence status of this user
    .addField('Playing', `${user.presence.game ? user.presence.game.name : 'None'}`)

    .setFooter("😎",message.member.displayAvatarURL);



    message.channel.send(userembed);
}

module.exports.help = {
  name:"userinfo"
}
