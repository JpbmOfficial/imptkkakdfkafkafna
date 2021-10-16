const Discord = require('discord.js');
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let { body } = await superagent.get(`https://api.thecatapi.com/v1/images/search`)

    let catEmbed = new Discord.RichEmbed()
       .setColor("#01FEDC") 
       .setTitle('Meow!')
       .setImage(body.url);

    message.channel.send(catEmbed);
};

module.exports.help = {
    name: "cat"
}
