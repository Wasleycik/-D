const Discord = require("discord.js")
const config = require("../../../config.json");
const db = require("quick.db"); 
const moment = require("moment");
moment.locale("tr");

module.exports = {
  name: "yetkili-say",
  aliases: ["yetkilisay","ysay","ysay"],
  execute: async (client, message, args, embed, author, channel, guild) => {

     if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        const content = args[0]; 

        let sesteolmayan = message.guild.members.cache.filter(s => s.roles.cache.has(config.registration.staff)).filter(s => !s.voice.channel).map(s => s).join('\n')
        let sesteolan = message.guild.members.cache.filter(s => s.roles.cache.has(config.registration.staff)).filter(s => s.voice.channel).map(s => s).join('\n')
        let sesdedeğil = message.guild.members.cache.filter(x => x.roles.cache.has(config.registration.staff)).filter(y => !y.voice.channel && y.presence && (y.presence.status != "offline"))
        
         message.reply(`__**Seste Olan Yetkililer:**__ \n${sesteolan || "Kimse yok"}\n\n __**Aktif olup seste olmayan yetkililer:**__ \n${sesdedeğil.map(s => `${s}`).join('\n')} \n\n__**Tüm yetkililer:**__\n${sesteolmayan || "Kimse yok"}`)


           
    }

}