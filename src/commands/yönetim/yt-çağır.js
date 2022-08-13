const { Client, Message, MessageEmbed} = require("discord.js");
const config = require("../../../config.json");

module.exports = {
    name: "yetki-çağır",
    aliases: ["ytçağır"],

    execute: async (client, message, args, embed, author, channel, guild) => {
    if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
    let enAltYetkiliRolü = message.guild.roles.cache.get(config.registration.staff);
    let yetkililer = message.guild.members.cache.filter(uye => !uye.user.bot  && uye.roles.highest.position >= enAltYetkiliRolü.position && !uye.voice.channel)
    if (yetkililer.length == 0) return message.reply('Aktif olup, seste olmayan yetkili bulunmuyor. Maşallah!');
    let mesaj = await message.channel.send(`**${yetkililer.size}** yetkiliye sese gelme çağırısı yapılıyor`);
    var filter = m => m.author.id === message.author.id && m.author.id !== client.user.id && !m.author.bot;
        yetkililer.forEach((yetkili) => {
          setTimeout(() => {
            yetkili.send(message.guild.name+' Sunucusunda yetkin var ancak sohbet etmiyorsun ve seste değilsin. Eğer sunucuyla ilgilenmez isen yetki yükseltimin göz önünde bulundurulacaktır.').then(x => mesaj.edit({embeds: [embed.setDescription(`${yetkili} yetkilisine özelden mesaj atıldı!`)]})).catch(err => message.channel.send(`${yetkili}, Sunucusunda yetkin var ancak seste değilsin. Eğer sese girmez isen yetki yükseltimin göz önünde bulundurulacaktır. Ayrıca dm'ni aç mesaj atamıyorum.`).then(x => mesaj.edit({embeds: [embed.setDescription(`${yetkili} yetkilisine özelden mesaj atılamadığı için kanalda etiketlendi!`)]})));
          }, 4*1000);
        });
    }
};