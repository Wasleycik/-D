const Discord = require("discord.js");
const config = require('../../../config.json');
const moment = require("moment");
moment.locale("tr");
const ms = require("ms")

module.exports = {
    name: "timeout",
    aliases: ["timeout"],
    execute: async (client, message, args, author, channel, guild) => {
   if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.penals.mute.staff)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
      
      let member = message.mentions.members.first()
      let sebep = args.splice(2).join(" ")
      let sür = args.slice(1).join(" ");
      let süre = args[1]

      if(!member){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(' • HATA!', true)
        .setDescription(`Zaman aşımı uygulamak istediğin kullanıcıyı belirtmelisin!`)
        .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
        return message.reply({ embeds:[embed] })
      }

      if(!sür){
        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle(' • HATA!', true)
        .setDescription(`Zaman aşımı uygulamak istediğin süreyi belirtmelisin!`)
        .setThumbnail("https://c.tenor.com/Z3-cuqLnNwkAAAAC/error-404.gif")
        return message.reply({ embeds:[embed] })
      }

      if(!sebep){
        sebep = "Sebep belirtilmemiş!"
      }
      
      member.timeout(süre, sebep)
      const embed = new Discord.MessageEmbed()
      .setTitle(' • BAŞARILI!', true)
      .setDescription(`${member.user} isimli kullanıcıya zaman aşımı uygulandı!`)
      .setThumbnail("https://c.tenor.com/f1fzLP0cn3EAAAAM/mute-anime-glitch.gif")
    message.reply({ embeds:[embed] })

      const embed2 = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setColor(0x00ae86)
        .setTitle("İşlem: Timeout")
        .setTimestamp()
        .addField("**Zaman Aşımı Uygulanan Kişi:**", `${member.user}`)
        .addField("**Yetkili:**", `${message.author}`)
        .addField("**Sebep:**", `${sebep}`)
      message.guild.channels.cache.get(config.logchannel).send({ embeds: [embed2]})
      

}
}