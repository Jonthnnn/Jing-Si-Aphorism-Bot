const Discord = require("discord.js")
const client = new Discord.Client()
const keepBotAlive = require("./server")

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
JSA1 = "./Images/JingSiAphorism1.jpg";
JSA2 = "./Images/JingSiAphorism2.jpg";
JSA3 = "./Images/JingSiAphorism3.jpg";
JSA4 = "./Images/JingSiAphorism4.jpg";
JSA5 = "./Images/JingSiAphorism5.jpg";
JSA6 = "./Images/JingSiAphorism6.jpg";
JSA7 = "./Images/JingSiAphorism7.jpg";
JSA8 = "./Images/JingSiAphorism8.jpg";
JSA9 = "./Images/JingSiAphorism9.jpg";
JSA10 = "./Images/JingSiAphorism10.jpg";
JSA11 = "./Images/JingSiAphorism11.jpg";
if (msg.content.startsWith ('.aphorism')) {
  number = 11;
  var random = Math.floor (Math.random() * (number) + 1 - 1) + 1;
    switch(random) {
     case 1: msg.channel.send({files: [JSA1]}); break;
     case 2: msg.channel.send({files: [JSA2]}); break;
     case 3: msg.channel.send({files: [JSA3]}); break;
     case 4: msg.channel.send({files: [JSA4]}); break;
     case 5: msg.channel.send({files: [JSA5]}); break;
     case 6: msg.channel.send({files: [JSA6]}); break;
     case 7: msg.channel.send({files: [JSA7]}); break;
     case 8: msg.channel.send({files: [JSA8]}); break;
     case 9: msg.channel.send({files: [JSA9]}); break;
     case 10: msg.channel.send({files: [JSA10]}); break;
     case 11: msg.channel.send({files: [JSA11]}); break;
    }
  }
});

keepBotAlive()

client.login(process.env.TOKEN)