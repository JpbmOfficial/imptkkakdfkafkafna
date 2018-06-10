const Discord = require("discord.js");
exports.run = (client, message, args) => {

  if (message.author.id !== ('390960333314850817')) return message.channel.send("Huh.");
    let statuses = {
      "online": "online",
      "on": "online",
      "invisible": "invisible",
      "offline": "invisible",
      "off": "invisible",
      "invis": "invisible",
      "i": "invisible",
      "dnd": "dnd",
      "idle": "idle"
    };
    if(!args[0]) return message.reply(`That's right you can call yourself a derp.`);
    let status = statuses[args[0].toLowerCase()];
    if(!status) {
      return message.reply(`Apparently you are an idiot because ${status} isn't a valid status. Fucking derp.`);
    }
    if(status === "on") status = "online";
    if(status === "off") status = "invisible";
    if(status === "i") status = "invisible";
    if(status === "offline") status = "invisible";
    client.user.setStatus(status)
    .then(u=> {
      message.reply(`Status changed to ${status}`);
    }).catch(e=> {
      message.reply(`Error while changing status to: ${status}\n\`\`\`${e}\`\`\``);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 0
};

exports.help = {
  name: 'status',
  description: 'Changes the Status of the bot/user',
  usage: 'status [online/invisible/dnd/idle]'
};