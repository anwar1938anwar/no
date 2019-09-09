const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("620605987224813582")
setInterval(function() {
channel.send(`I NOT SPAMMMMMM HAHAHAHA`);
}, 30)
})

client.login(process.env.BOT_TOKEN);