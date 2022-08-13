
    const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
    const moment = require('moment')
const config = require("../../../config.json");

	module.exports = {
    name: "kpanel",
    aliases:  ["kullanıcı-panel"],
    execute: async (client, message, args, embed, author, channel, guild) => {

if(message.author.id !== "598974473374400512") return message.channel.send("Sahibim Değilsin Bu Komutu Kullanamazsın!")
  const menu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('menu1')
                    .setPlaceholder('Kullanıcı Paneline Hoş Geldiniz.')
                    .addOptions([
                        {
                            label: 'Hesabınızın Açılma Tarihi.',
                            description: 'Hesabınızın açılma tarihini öğrenmek için tıklayın.',
                            value: 'kuruluş',
                        },
                        {
                            label: 'Tekrar Kayıt Olma.',
                            description: 'Sunucuya tekrar kayıt olmak için tıklayın.',
                            value: 'kayıtsız',
                        },
                        {
                            label: 'Üzerinizde Bulunan Roller.',
                            description: 'Üzerinizde bulunan rolleri görmek için tıklayın.',
                            value: 'roller',
                        },
                        {
                            label: 'Sunucu Bilgileri.',
                            description: 'Sunucu bilgilerine erişmek için tıklayın.',
                            value: 'bilgi',
                        },
                    ]),
            );

        const m = await message.channel.send({  content: `\`${message.guild.name}\` Sunucusu içerisi ulaşmak istediğiniz bilgilere menüden tıklamanız yeterli olucaktır.`,components: [menu] });
                    
        const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
    

client.on("interactionCreate", async(interaction) => {

let member = message.mentions.members.first() || guild.members.cache.get(args[0]);
let user = message.mentions.users.first() || guild.members.cache.get(args[0]);

const moment = require("moment")
moment.locale("tr")

let kullanıcı = interaction.guild.members.cache.get(interaction.user.id)
	
if(interaction.values && interaction.values[0] == 'katılım'){
                await interaction.reply({content: `Sunucuya Katılma Tarihiniz :  \`${moment(user.joinedTimestamp).format('LLL')}\``, ephemeral: true})
    }

if(interaction.values && interaction.values[0] == 'kuruluş'){
		
await interaction.reply({content: `Hesabınızın kuruluş tarihi : <t:${Math.floor(kullanıcı.user.createdTimestamp / 1000)}:D>**(<t:${Math.floor(kullanıcı.user.createdTimestamp / 1000)}:R>)**`, ephemeral: true})

}

if(interaction.values && interaction.values[0] == 'kayıtsız'){
        let member = await client.guilds.cache.get(config.Guild.GuildID).members.fetch(interaction.member.user.id)
if(!member) return;
        member.roles.set([config.registration.unregistered]).catch(e=>{})
        await interaction.reply({content: `Başarıyla kayıtsıza atıldınız.`, ephemeral: true})
}

if(interaction.values && interaction.values[0] == 'roller'){
        await interaction.reply({content: `Üzerinde Bulunan Rollerin Listesi ;
        
        ${(interaction.member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? interaction.member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(', ') : 'Hiç yok.')}`, ephemeral: true})
}

if(interaction.values && interaction.values[0] == 'bilgi'){
        await interaction.reply({content: `Sesli kanallardaki üye sayısı : \`${(interaction.guild.members.cache.filter((x) => x.voice.channel).size)}\`
         Sunucudaki toplam üye sayısı : \`${(interaction.guild.memberCount)}\`
         Sunucunun oluşturulma tarihi: \`${moment(interaction.guild.createdAt).locale("tr").format("LLL")}\`
         Sunucu destek numarası : \`${(interaction.guild.id)}\`
        `, ephemeral: true})
}
           })

    }}