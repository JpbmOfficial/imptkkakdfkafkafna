const Discord = require('discord.js')

exports.run = (bot, message, args) => {

var images = ["https://cdn.discordapp.com/attachments/432608672540262407/440626740084080650/giphy.gif", "https://cdn.discordapp.com/attachments/432608672540262407/440627658401775616/6e2fe9073f4e6aa4080e2e9ab5e3f790.gif", "https://cdn.discordapp.com/attachments/432608672540262407/440628180806664199/NkfsJV7.gif"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const kissEmb = new Discord.RichEmbed()
.setColor('RANDOM')
.setImage(randomImage);
const sadEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
if(!args[0]) {
  message.channel.send(`<@${message.author.id}> kissed <@${message.author.id}>.. Oh wait! You can't kiss yourself!`, {embed: sadEmb});
  return;
}

if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
    msg.delete(3000)
  });
message.channel.send(`<@${message.author.id}> kissed ${args[0]}`, {embed: kissEmb});


}
module.exports.help = {
    name: "kiss"
}
