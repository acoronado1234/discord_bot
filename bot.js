const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
}, error => {
    console.log('error', error);
});

client.on('message', msg => {
    if(msg.content === 'uwu') {
        msg.reply('uwu');
    }
});
client.login(auth.token);