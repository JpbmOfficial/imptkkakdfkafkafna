const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        'AsianHotties',
        'juicyasians',
        'asianbabes'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`asian.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./asian.jpg`)
            })
        })
}
module.exports.help = {
  name: "asian"
}