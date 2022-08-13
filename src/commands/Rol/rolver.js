const Discord = require('discord.js')
const db = require("quick.db")
const config = require("../../../config.json");
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "rolver",
    aliases: [],
    execute: async (client, message, args, embed, author, channel, guild) => {
if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.Guild.GuildOwnerRole)) return message.reply({ embeds: [embed.setDescription(`Komutu kullanmak için geçerli yetkin olmalı.`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));

if(!message.member.permissions.has("ADMINISTRATOR") && message.channel.id !== config.channels.botkomut) return message.reply({content: `Bu komutu Sadece <#${config.channels.botkomut}> kanalında kullanmalısın.`}).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));

var member = message.mentions.users.first() || guild.members.cache.get(args[0]);

if(!args[0]) return message.reply({ embeds: [embed.setDescription(`

Vermek İstediğin permleri Seçmen Gerekiyor

\`${config.bot.prefix}rolver müzisyen\` : müzisyen rolünü verir
\`${config.bot.prefix}rolver streamer\` : streamer rolünü verir
\`${config.bot.prefix}rolver sorunçözücü\` : sorunçözücü rolünü verir
\`${config.bot.prefix}rolver sponsor\` : sponsor rolünü verir
\`${config.bot.prefix}rolver vip\` : vip rolünü verir

`)] })

        if (!member) return message.reply({ embeds: [embed.setDescription("Öncelikle geçerli bir kullanıcı belirtmelisin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (member.id === author.id) return message.reply({ embeds: [embed.setDescription("Kendine bu rolü veremezsin!")] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));


if(args[0] === "müzisyen"){

        
        guild.members.cache.get(member.id).roles.add(config.roles.müzisyen);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.müzisyen}> rolü verildi.`)] });
        if (config.bot.dmMessages) member.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yetkilisi tarafından özel rolün verildi.`).catch(() => {});
        
        embed.setColor("e4b400")
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.roles.müzisyen}> rolü verildi.
      
        \`Rolü Alan Kullanıcı:\` ${member} - (**${member.id}**)
        \`Rolü Veren Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Verilen Rol:\` <@&${config.roles.müzisyen}>     
        \`Rol Verilme Tarihi:\` ${moment(Date.now()).format("LLL")}`)] });


    }

if(args[0] === "sorunçözücü"){

        guild.members.cache.get(member.id).roles.add(config.roles.soruncozucu);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.soruncozucu}> rolü verildi.`)] });
        if (config.bot.dmMessages) member.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yetkilisi tarafından özel rolün verildi.`).catch(() => {});
        
        embed.setColor("e4b400")
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.roles.soruncozucu}> rolü verildi.
      
        \`Rolü Alan Kullanıcı:\` ${member} - (**${member.id}**)
        \`Rolü Veren Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Verilen Rol:\` <@&${config.roles.soruncozucu}>     
        \`Rol Verilme Tarihi:\` ${moment(Date.now()).format("LLL")}`)] });


    }

if(args[0] === "sponsor"){

        guild.members.cache.get(member.id).roles.add(config.roles.sponsor);
        guild.members.cache.get(member.id).roles.add(config.roles.giveaways);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.sponsor}> rolü verildi.`)] });
        if (config.bot.dmMessages) member.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yetkilisi tarafından özel rolün verildi.`).catch(() => {});
        
        embed.setColor("e4b400")
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.roles.sponsor}> rolü verildi.
      
        \`Rolü Alan Kullanıcı:\` ${member} - (**${member.id}**)
        \`Rolü Veren Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Verilen Rol:\` <@&${config.roles.sponsor}>     
        \`Rol Verilme Tarihi:\` ${moment(Date.now()).format("LLL")}`)] });


    }

if(args[0] === "vip"){

        guild.members.cache.get(member.id).roles.add(config.roles.vip);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.vip}> rolü verildi.`)] });
        if (config.bot.dmMessages) member.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yetkilisi tarafından özel rolün verildi.`).catch(() => {});
        
        embed.setColor("e4b400")
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.roles.vip}> rolü verildi.
      
        \`Rolü Alan Kullanıcı:\` ${member} - (**${member.id}**)
        \`Rolü Veren Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Verilen Rol:\` <@&${config.roles.vip}>     
        \`Rol Verilme Tarihi:\` ${moment(Date.now()).format("LLL")}`)] });


    }

if(args[0] === "streamer"){

        guild.members.cache.get(member.id).roles.add(config.roles.streamer);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısına <@&${config.roles.streamer}> rolü verildi.`)] });
        if (config.bot.dmMessages) member.send(`**${message.guild.name}** sunucumuzda başarıyla, **${message.author.tag}** yetkilisi tarafından özel rolün verildi.`).catch(() => {});
        
        embed.setColor("e4b400")
        client.channels.cache.get(config.logs.rollog).send({ embeds: [embed.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${config.roles.streamer}> rolü verildi.
      
        \`Rolü Alan Kullanıcı:\` ${member} - (**${member.id}**)
        \`Rolü Veren Yetkili:\` ${message.author} - (**${message.author.id}**)
        \`Verilen Rol:\` <@&${config.roles.streamer}>     
        \`Rol Verilme Tarihi:\` ${moment(Date.now()).format("LLL")}`)] });


    }


}
}