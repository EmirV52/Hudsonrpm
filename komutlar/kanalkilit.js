const Discord = require('discord.js')
const ayar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  if(![ayar.kanalkilitaçyetkisi].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
    const kanalkilit = message.guild.channels.cache.find(c => c.id === ayar.kanalkilitaçlog)//Ban log kanalı 
   
      let every = message.guild.roles.cache.find(r => r.id === ayar.whitelisted);
    message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
    });

    message.channel.send("<#"+message.channel + "> Kullanıcılara Kilitlendi");
    kanalkilit.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`**Kanal Kilitlendi !**\n**Kilitleyen Yetkili:** ${message.author.id} (\`${message.author.id}\`)`));
    };
    exports.conf = {
      aliases: ["lock"],
    };
  
    exports.help = {
      description: 'Komutun Kulanıldığı Chati Kullanıcılara Kapatır.',
      name: "kanal-kilit",
    };
