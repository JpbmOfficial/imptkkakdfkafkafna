const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const profanities = require("profanities");
const settings = require('./botconfig.json')
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let purple = botconfig.purple;
const prefix = 'i!';


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers !`);
  bot.user.setActivity(`on ${bot.guilds.size} servers with ${bot.users.size} users`, {type: "PLAYING"});

});



//bot.on('typingStart', (channel, user) => {
  // channel.send(`${user.username} has started typing in ${channel.name}`)
 //});

 //bot.on('typingStop', (channel, user) => {
 // channel.send(`${user.username} has stopped typing in ${channel.name}`)
 //});


bot.on('guildCreate', async guild => {

let SendChannel = guild.channels.find("name", "general") || guild.channels.find("name", "chat");

 SendChannel.send('Hey! I am a bot from switchblades#0920. \nMy normal prefix is ***i!***. To get commands list, type i!help. \nDid you found any bug? Warn us by typing ***i!bugreporting <bug>*** or by joining our support server \nhttps://discord.gg/S6A44Dq. \nTo have full access to the bot, please create a channel named ***mod-log***, ***admins*** and ***welcome-goodbye***, and also create *Sexy* role.')

});

bot.on("guildMemberAdd", async member => {
  
  console.log(`${member.id} joined the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome-goodbye");
  welcomechannel.send(`LOOK OUT EVERYONE! ${member} has joined the paradise!`);
});

bot.on("guildMemberRemove", async member => {

  console.log(`${member.id} left the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "welcome-goodbye");
  welcomechannel.send(`Sad to see that ${member} has left...`);

});


bot.on("message", async message => {

  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  
  
                                                                                 

  
  if(message.content.includes("sad")) {
    message.channel.send("I know what you feel bro")
  return;

}

if(message.content.includes("sexy")) {
  message.channel.send("im sexy af")
return;
     
}

if(message.content.includes("shut up")) {
  message.channel.send("no")
return;
     
}

  if(message.content.includes("a")) {
    message.channel.send("cala a boca macaco")
  return;

}

if(message.content.includes("puta")) {
  message.channel.send("Nome feminino.");
  message.channel.send("Mulher que se prostitui.");
  message.channel.send("Mulher que tem relações sexuais com muitos homems.");
  message.channel.send("Nome mais formal: prostituta.");
  message.channel.send("Sinónimos: colareja, marafona, meretriz, michela.");
return;
     
}
  if(message.content.includes("prima")) {
  message.channel.send("Nome feminino.");
  message.channel.send("Pessoa em relação aos filhos do seu tio ou da sua tia ou aos respetivos descendentes");
  message.channel.send("A primeira e a mais delgada corda de alguns instrumentos musicais");
  message.channel.send("Na liturgia católica, primeira das horas canónicas diurnas, rezada depois de laudes, tradicionalmente às seis da manhã");
  message.channel.send(`Nome mais conhecido por ser prima de <@${message.author.id}>.`);
return;
  }
  

 
if (!message.content.startsWith(prefix)) return;
   if(!message.content.startsWith(`${prefix}`)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});

bot.login(process.env.TOKEN);
