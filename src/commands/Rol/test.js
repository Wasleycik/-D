const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require("moment");
const db = require("quick.db");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "rolsüzz",
    aliases: ["test", "isimler-sıfırla"],
    execute: async (client, message, args, embed, author, channel) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanabilmek için geçerli yetkiniz yok!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let bg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)


    var Rolsüz = new MessageButton()
    .setLabel("Rolsüz ver")
    .setCustomId("rolsüz-ver")
    .setStyle("SUCCESS")
    .setEmoji(config.emojis.yes)

    var taglı = new MessageButton()
    .setLabel("taglı ver")
    .setCustomId("taglı-ver")
    .setStyle("SUCCESS")
    .setEmoji(config.emojis.yes)

    var Bb = new MessageButton()
    .setLabel("İşlemi İptal Et!")
    .setCustomId("iptal")
    .setStyle("DANGER")
    .setEmoji(config.emojis.no)

    const row = new MessageActionRow()
    .addComponents([taglı , Rolsüz, Bb])


embed.setDescription(`${member.toString()} Lütfen yapmak istediğiniz işlemi seçiniz.
\`\`\`Sunucumuzda rolü olmayan ${bg.size} kişi var.\nSunucumuzda tagı olupta rolü olmayanlara rol verme.\`\`\``)

    let msg = await message.channel.send({ embeds: [embed], components: [row] });
    var filter = (button) => button.user.id === message.author.id;
   
    let collector = await msg.createMessageComponentCollector({ filter, time: 30000 })
    collector.on("collect", async (button) => {



      if(button.customId === "rolsüz-ver") {

               bg.forEach(r => {
                r.roles.add(config.registration.unregistered)
            });
            button.reply({ embeds: [embed.setDescription(`Sunucuda rolü olmayan \`${bg.size}\` kişiye kayıtsız rolü verildi.`)] })
  
  msg.edit({
  embeds: [Rolsüz],
  components : []
})  

      }

  if(button.customId === "taglı-ver") {
    let rol = config.roles.team
    let tag = config.registration.GuilDTag

    message.guild.members.cache.filter(s => s.user.username.includes(tag) && !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    button.reply({ embeds: [embed.setDescription(`Kullanıcı adında \`${tag}\` bulunduran kullanıcılara rol veriliyor.`)] })

msg.edit({
  embeds: [taglı],
  components : []
})  

    }

 if(button.customId === "iptal") {   
    await button.deferUpdate();
    const iptal = new MessageEmbed()
    .setDescription(`${member} tarafından işlem iptal edildi.`) 

msg.edit({
  embeds: [iptal],
  components : []
})  
    }


  })
  }
};