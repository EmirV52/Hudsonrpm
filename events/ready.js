const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[BOT] | Botun destekçileri ve komutları başarıyla yüklendi, işlemler tamamlandı !`);
  console.log(`[BOT] | (${client.user.username}) BOT AKTİF !
  ‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒`);
  client.user.setStatus("rahatsız etmeyin");
  client.user.setActivity("💎 Elmas RolePlay 💎 https://discord.gg/BZwZ7PaGV9 💎", { type: "PLAYING"}); //// TYPE - WATCHING , PLAYING , LISTENING gibi değiştirilebilir.
  console.log(`💎 Elmas RolePlay 💎 https://discord.gg/BZwZ7PaGV9 💎`);

};
