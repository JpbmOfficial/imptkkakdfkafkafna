const Discord = require("discord.js");
const superagent = require("superagent");
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

 async run(message) {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const img = (await res.json()).message;
      const embed = new MessageEmbed()
        .setTitle('🐶  Woof!  🐶')
        .setImage(img)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    } 

 }
module.exports.help = {
   name: "dog"
}
