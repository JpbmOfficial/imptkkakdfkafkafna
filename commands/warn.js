const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");


module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You must have Administrator permission to do that!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Please remind, you can't warn users that have manage messages permission!");
  let reason = args.join(" ").slice(22);

 


  if(!reason) return message.reply("You must write the reason.");

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Reason", reason);

 
  let warnchannel = message.guild.channels.find(`name`, "mod-log");
  if(!warnchannel) return message.reply("Couldn't find mod-log channel");

  warnchannel.send(warnEmbed);

  //if(warns[wUser.id].warns == 2){
   // let muterole = message.guild.roles.find(`name`, "muted");
    ////////if(!muterole) return message.reply("You should create muted role dude.");

  //////  let mutetime = "10s";
   //// await(wUser.addRole(muterole.id));
  //  message.channel.send(`<@${wUser.id}> has been temporarily muted`);

  //  setTimeout(function(){
     // wUser.removeRole(muterole.id)
     // message.reply(`<@${wUser.id}> has been unmuted.`)
  //  }, ms(mutetime))
 // }
 // if(warns[wUser.id].warns == 3){
 //   message.guild.member(wUser).ban(reason);
 //   message.reply(`<@${wUser.id}> has been banned.`)
 // }

  
  message.delete().catch(O_o=>{});

}

module.exports.help = {
  name: "warn"
}
