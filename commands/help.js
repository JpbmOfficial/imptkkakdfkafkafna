const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("Help Menu")
    .setColor("RANDOM")
    .addField("Member Commands", "help, serverinfo, botinfo, userinfo, nsfwhelp, report, quiz, dog, weather, emojis, figlet, google, hug, bugreporting, topinvites, invite, jokes, trump, kiss, hug, pat, luckynumber, maths, npm, poll, quiz, reverse, stats, translate, ping")
  
    .setFooter("Type i!help<command> to have help");

    message.channel.send(helpembed);
if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("#b70000")
    .addField("Mod Commands", "addrole, removerole, ban, clear, kick, report, say, tempmute, warn, warnlevel, prefix")
    .addField("addrole","Usage: i!addrole <user> <role>" )
    .addField("removerole","Usage: i!removerole <user> <role>" )
    .addField("ban","Usage: i!ban <user> <reason>" )
    .addField("clear","Usage: i!clear <Message Amount>" )
    .addField("kick","Usage: i!kick <user> <reason>" )
    .addField("report","Usage: i!report <user> <reason>" )
    .addField("say","Usage: i!say <impt is sexy>" )
    .addField("tempmute","Usage: i!tempmute <user> <time>" )
    .addField("warn","Usage: i!warn <user> <reason>" )
    .addField("unban","Usage: i!unban <user id> <reason> IT'S IMPORTANT YOU INCLUDE THE ID!" )
    .addField("lockdown","Usage: i!lockdown <time> ||!lockdown unlock" );

    try{
        await message.author.send(modembed);
        message.react(":thumbsup:")
}catch(e){
    message.reply("Your DMs are locked. I can't send you the mod commands.")

    }
}


  }
  
  

                               

module.exports.help = {
    name:"help"
}
