const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
require('moment-duration-format');
const config = require("../../../config.json");

module.exports = {
    name: "snipe",
    aliases: ["snipe"],
    execute: async (client, message, args, anan, author, channel, guild) => {
 if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.registration.staff)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        let embed = new MessageEmbed().setColor("#40FC00").setFooter(config.bot.BotStatus);
    let data = db.get(`snipe.${message.guild.id}`);
    if(!data) return  message.reply({ embeds: [embed.setDescription(`Sunucuda Daha Önce Mesaj Silinmemiş.`)] }).catch(e => { });
     message.reply({ embeds: [embed.setDescription(`

◾️ **__Mesaj İçeriği:__** \`${data.mesaj}\`
◾️ **__Silindiği zaman:__** \`${moment.duration(Date.now() - data.starihi).format("D [gün], H [saat], m [dakika], s [saniye]")} Önce\`
◾️ **__yazan kişi:__** <@${data.mesajyazan}>  
◾️ **__Yazıldığı Kanal:__** <#${data.kanal}> 

    
    
    `)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));


        
        }
    }
        