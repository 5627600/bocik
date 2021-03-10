const config = require('./config.json');
const prefix = config.prefix;
const prefix2 = config.prefix2;
const token = config.token;
const { Client, RichEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});



client.on('ready', () => {
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=');
  console.log('');
  console.log(`     Zalogowano bota jako ${client.user.tag}!`);
  console.log('       Bot został zrobiony przez ! !.ℓιℓ нσℓ∂αツ#2473');
  console.log(`        Bot jest na ${client.guilds.size} serwerach`);
  console.log('');
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=');
  console.log('');
  console.log('');
  console.log('');
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=');
  console.log('');
  console.log('                    Bot Gotowy!');
  console.log('');
  console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=');
  client.user.setActivity(`Bot jest na ${client.guilds.size} serwerach`, ({type: "PLAYING"}));
  
});




client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.channel.send('```help,support,kanal,HC, wla, !prefix, dodaj, wersja```');
    msg.react('☕');  
  }
});

client.on('message', msg => {
  if (msg.content === prefix +'kanal') {
    msg.channel.send('https://www.youtube.com/channel/UC1yLseKryN2exiS8_0CyUgg?view_as=subscriber');
    msg.react('✅');  
  }
});

client.on('message', msg=>{ 
  if (msg.content === prefix + 'support') {
    msg.channel.send('https://discord.gg/swkGkd3MPa');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'HC') {
    msg.channel.send('https://discord.gg/wsJMF6zwjp');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'wla') {
    msg.channel.send('**Właściciel bota: <@478263206964494378>**');
  }
});



client.on('message', msg =>{
  if (msg.content === prefix + 'karabin') {
    msg.author.send('**BUM BUM**');
  }
})


client.on('message', msg =>{
  if (msg.content === prefix2 + 'gelp') {
    msg.channel.send('czesio +1 za odkrycie komendy zgłoś się do <@478263206964494378> po rangę **Znalazca EasterEgga**') ;
  }
})

client.on('message', msg =>{
  if (msg.content ==='!help') {
    msg.channel.send('Spróbuj snk!help') ;
  }
})

client.on('message', msg =>{
  if (msg.content ===  '!prefix') {
    msg.channel.send('Mój prefix to `snk!`! Prefix ! jest tylko dla tej komendy') ;
  }
})


client.on('message', msg =>{
  if (msg.content === prefix + 'dodaj'){
    msg.author.send('https://bit.ly/3rxGywg <-- link do dodania');
    msg.react('🤑');
  }
})



client.on('message', msg =>{
  if (msg.content === prefix + 'wersja'){
    msg.channel.send('**Wersja Beta 1.1.1**');
    msg.react('🤑');
  }
})


client.login(token);
