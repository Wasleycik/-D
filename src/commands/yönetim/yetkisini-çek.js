const Discord = require("discord.js")
const config = require("../../../config.json");
const db = require("quick.db"); 
const moment = require("moment");
moment.locale("tr");
const limit = new Map();

module.exports = {
    name: "yetki-çek",
    aliases: ["yetki-al", "yt-çek", "ytçek"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.yetki.yetkilialim) && !message.member.roles.cache.has(config.yetki.yetkilialim) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription("Komutu kullanmak için gerekli yetkin olmalı!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        let total = db.get(`subs_${author.id}`) || 0;
        if (!member) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir kullanıcı belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (member.id === author.id) return message.reply({ embeds: [embed.setDescription("Kendine bu işlemi uygulayamazsın!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        
        guild.members.cache.get(member.id).roles.remove(config.registration.staff);
        guild.members.cache.get(member.id).roles.remove(config.penals.mute.staff);
        guild.members.cache.get(member.id).roles.remove(config.penals.jail.staff);
        guild.members.cache.get(member.id).roles.remove(config.penals.ban.staff);
        guild.members.cache.get(member.id).roles.remove(config.yetki.partnerstaff);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkililer);
        guild.members.cache.get(member.id).roles.remove(config.yetki.tektagyt);
        guild.members.cache.get(member.id).roles.remove(config.yetki.çifttagyt);
        guild.members.cache.get(member.id).roles.remove(config.yetki.keo);
        guild.members.cache.get(member.id).roles.remove(config.yetki.ceo);
        guild.members.cache.get(member.id).roles.remove(config.yetki.enaltytrol);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol2);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol3);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol4);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol5);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol6);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol7);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol8);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol9);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol10);
        guild.members.cache.get(member.id).roles.remove(config.yetki.yetkilirol11);

        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısından Tüm Yetki Rolleri Alındı`)] });
        if (config.bot.dmMessages) member.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yöneticisi tarafından yetkili rollerin alındı!`).catch(() => {});
        
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} - \`(${member.id})\` kullanıcısından ${message.author} \`(${message.author.id})\` tarafından **YETKİLİ** rolleri alındı.`)] })


            
        }
    }

