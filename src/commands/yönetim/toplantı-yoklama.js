const { Client, Message, MessageEmbed, Guild } = require("discord.js");
const config = require('../../../config.json');

module.exports = {
  name: "toplantı-yoklama",
  aliases: ["yoklama"],
  execute: async (client, message, args, embed, author, channel, guild) => {

 
 if(!config && !config.roles.katıldı || !config.Guild.üstyönetim || !config.Guild.ortayönetim || !config.Guild.GuildOwnerRole || !config.Guild.altyönetim) return message.channel.send("31")
 if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole) && !message.member.permissions.has(8)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  if(!message.member.voice || message.member.voice.channelId != config.channels.toplantıKanalı) return;
  
  let members = message.guild.members.cache.filter(member => member.roles.cache.has(config.roles.katıldı) && member.voice.channelId != config.channels.toplantıKanalı);
  members.forEach((member, index) => {
    setTimeout(() => {
      member.roles.remove(config.roles.katıldı).catch();
    }, 1 * 1250)
  });
  let verildi = message.member.voice.channel.members.filter(member => !member.roles.cache.has(config.roles.katıldı) && !member.user.bot)
  verildi.forEach((member, index) => {
    setTimeout(() => {
      member.roles.add(config.roles.katıldı).catch();
    }, 1 * 1000)
  });
  message.channel.send({embeds: [embed.setDescription(`Katıldı rolü dağıtılmaya başlandı! \`${verildi.size}\` üyeye verilecek.\nKatıldı rolü alınmaya başladı! \`${members.size}\` üyeden alınacak.\n__NOT:__ Bu işlem biraz uzun sürebilir.`)]}).catch();
    }
};