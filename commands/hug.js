const Discord = require('discord.js')

exports.run = (bot, message, args) => {

var images = ["https://cdn.discordapp.com/attachments/432608672540262407/440629903478489108/source.gif", "https://cdn.discordapp.com/attachments/432608672540262407/440630062929149952/tenor.gif", "https://cdn.discordapp.com/attachments/432608672540262407/440630477997735953/WellgroomedVapidKitten-max-1mb.gif"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const hugEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);
const sadEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
if(!args[0]) {
  message.channel.send(`<@${message.author.id}> hug <@${message.author.id}>.. Oh wait! You can't hug yourself!`, {embed: sadEmb});
  return;
}

if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
    msg.delete(3000)
  });
message.channel.send(`<@${message.author.id}> hug ${args[0]}`, {embed: hugEmb});


}
module.exports.help = {
    name: "hug"
}
