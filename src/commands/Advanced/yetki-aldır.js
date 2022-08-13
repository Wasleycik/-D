const config = require("../../../config.json");
const ms = require("ms")
const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")
moment.locale("tr")
module.exports = {
    name: "yetki-aldır",
    aliases:  ['yetkialdır'],
    execute: async (client, message, args, author, channel, guild) => {
        
if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
       
 let user = message.mentions.members.first() || message.guild.members.cache.get(args[0], message.guild)
        
        if(!user) return message.reply("Yetki Aldırtmak istediğiniz kişiyi belirtiniz.", message.author, message.channel)
    //    if(message.member.roles.highest.rawPosition < user.roles.highest.rawPosition) return message.reply("Rolleri senden üst ve ya aynı olan kullanıcıları ses odalarında taşıyamazsın.", message.author, message.channel)
         if (user.id == message.author.id) return message.reply("Kullanıcılar kendilerine ceza-i işlem uygulayamaz.", message.author, message.channel)

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("aldır")
            .setLabel("KABUL ET")
            .setStyle("SUCCESS"),
            new Discord.MessageButton()
            .setCustomId("İPTAL")
            .setLabel("REDET")
            .setStyle("DANGER")
        )

        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true })})
         .setColor("RANDOM")
        .setDescription(`
${user}, ${message.member} isimli yetkili size yetki vermek istiyor kabul ediyor musun?
        `)
      
        let msg = await message.channel.send({ content: `${user}`, embeds: [embed], components: [row] })

        var filter = (button) => button.user.id === user.id;
        const collector = msg.createMessageComponentCollector({ filter, time: 30000 })
       
        collector.on("collect", async (button) => {
           
            if(button.customId === "aldır") {
        user.roles.add(config.registration.staff);
        user.roles.add(config.yetki.enaltytrol);
        user.roles.add(config.yetki.tektagyt);
        user.roles.add(config.yetki.yetkililer);

if (config.bot.dmMessages) user.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yöneticisi tarafından yetkili rollerin verildi iyi eğlenceler!`).catch(() => {});
        
        client.channels.cache.get(config.channels.chat).send({ content: `${user} kullanıcısı sunucumuzda yetkili oldu, aramıza hoş geldin.` }).then((e) => setTimeout(() => { e.delete(); }, 10000));
        client.channels.cache.get(config.logs.rollog).send({ content: `${user} - \`(${user.id})\` kullanıcısına \`(${message.author.id})\` tarafından **YETKİLİ** rolleri verildi.` });
                msg.edit({ components: [row] })

button.reply({ embeds: [embed.setDescription(`${user} kullanıcısına  <@&${config.registration.staff}> <@&${config.yetki.yetki7}> ve <@&${config.yetki.enaltytrol}> rolleri verildi.`)] });
        
            
    } else if(button.customId === "İPTAL") {
        button.reply("yetki aldırma işlemi rededildi.")
        row.components[0].setDisabled(true)
        row.components[1].setDisabled(true)
        row.components[2].setDisabled(true)
        msg.edit({ components: [row] })

    }
        })

        collector.on("end", async (button) => {
            row.components[0].setDisabled(true)
            row.components[1].setDisabled(true)
            row.components[2].setDisabled(true)
            msg.edit({ components: [row] })

        })
        }
}