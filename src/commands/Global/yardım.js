const { MessageActionRow, MessageButton, MessageEmbed , MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json");

module.exports = {
    name: "yardım",
    aliases:  ["help"],
    execute: async (client, message, args, embed, author, channel, guild) => {

if(!message.member.permissions.has("ADMINISTRATOR") && message.channel.id !== config.channels.botkomut) return message.reply({content: `Bu komutu Sadece <#${config.channels.botkomut}> kanalında kullanmalısın.`})

    const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('menu1')
					.setPlaceholder('Yardım Menüsü.')
					.addOptions([
						{
							label: 'Kullanıcı',
							description: 'Kullanıcı Komutlarını Görmek İçin Tıklayınız.',
							value: 'kullanıcı',
						},
						{
							label: 'Kayıt',
							description: 'kayıt komutlarını görmek için tıklayınız.',
							value: 'kayıt',
						},
						{
							label: 'Moderasyon',
							description: 'Moderasyon komutlarını görmek için tıklayınız.',
							value: 'moderasyon',
						},
						{
							label: 'Yönetim',
							description: 'Yönetim Komutlarını Görmek İçin Tıklayınız.',
							value: 'yönetim',
						},
						{
							label: 'ayarlamalı',
							description: 'Ayarlamalı Rolleri görmek için tıklayınız.',
							value: 'ayarlamalı',
						},
						{
							label: 'Kurucu',
							description: 'Kurucu komutlarını görmek için tıklayınız.',
							value: 'kurucu',
						},
					]),
			);

		const m = await message.channel.send({  content: ` Aşağıdaki Menüden Botun Tüm Komutlarına Bakabilirsiniz.`,components: [menu] });
					
		const collector = m.createMessageComponentCollector({ filter: w=>w.user.id===message.author.id })
	
    
         client.on("interactionCreate", async(interaction) => {

           if(interaction.values && interaction.values[0] == 'kullanıcı'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}afk\` : Afk Moduna Giriş Yapmanızı Sağlar
\`${config.bot.prefix}avatar\` : Etiketlediğiniz Kişinin Veya Kendi profil resminizi Size atar
\`${config.bot.prefix}banner\` : Etiketlediğiniz Kişinin Veya Kendi Bannerinizi Size atar
\`${config.bot.prefix}alarm\` : Belirttiğiniz Süre Dolunca Size Hatırlatma Yapar
\`${config.bot.prefix}link\` : Sunucunun Urlsini Atar
\`${config.bot.prefix}ping\` : Botun Pingine Bakarsınız
\`${config.bot.prefix}sor\` : Botla Sohbet Etmeye Yarar
\`${config.bot.prefix}tag\` : Sunucu Tagını Atar
\`${config.bot.prefix}visim\` : V.İ.P Rolünde olan kullanıcıların isim değiştirmesine hak sağlar
\`${config.bot.prefix}booster\` : Boost basan kullanıcıların isim değiştirmesini sağlar
\`${config.bot.prefix}cihaz\` : Etiketlediğiniz veya kendi Cihazınızın ne olduğuna bakabilirsiniz
\`${config.bot.prefix}sunucubilgi\` : Sunucu Hakkında Bilgi Verir
\`${config.bot.prefix}kullanıcıbilgi\` : Kendi Profil Bilgilerinize bakarsınız
\`${config.bot.prefix}şikayet\` : Şikayetiniz vb Varsa bot direk sunucu sahibine bildirir

Toplam Komut : ${client.commands.size}`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'kayıt'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}e\` : @Wasley/ID İsim Yaş
\`${config.bot.prefix}k\` : @Wasley/ID İsim Yaş
\`${config.bot.prefix}kke\` : Kayıtlı bir üyeyi kimin kayıt ettiğini gösterir
\`${config.bot.prefix}isim\` : Üyenin İsmini Hatalı Girerseniz Düzeltemizi sağlar
\`${config.bot.prefix}isimler\` : Üyelerin tüm isimlerine bakabilirsiniz
\`${config.bot.prefix}kayıtsayı\` : toplam kayıtlarınıza bakabilirsiniz
\`${config.bot.prefix}kayıtsız\` : Belirtilen Üyeyi Kayıtsiza Atmayı sağlar
`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'moderasyon'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}warn\` : @Wasley/ID Sebep
\`${config.bot.prefix}mute\` : @Wasley/ID Süre Sebep
\`${config.bot.prefix}vmute\` : @Wasley/ID Süre Sebep
\`${config.bot.prefix}jail\` : @Wasley/ID Süre Sebep
\`${config.bot.prefix}reklam\` : @Wasley/ID 
\`${config.bot.prefix}ban\` : @Wasley/ID Sebep
\`${config.bot.prefix}kick\` : @Wasley/ID Sebep
\`${config.bot.prefix}unmute\` : @Wasley/ID
\`${config.bot.prefix}unvmute\` : @Wasley/ID
\`${config.bot.prefix}unjail\` : @Wasley/ID
\`${config.bot.prefix}unban\` : @Wasley/ID
\`${config.bot.prefix}unreklam\` : @Wasley/ID
\`${config.bot.prefix}say\` : sunucunun üye bilgisi vb gösterir
\`${config.bot.prefix}sesli\` : sunucu sesli bilgisini gösterir
\`${config.bot.prefix}sil\` : belirttiğiniz kadar mesaj siler
\`${config.bot.prefix}snipe\` : silinene en son mesajı gösterir
\`${config.bot.prefix}nuke\` : kanalı tekrardan aynı izileri ile oluşturur
\`${config.bot.prefix}kilit\` : belirtilen kanalı kilitler açar
\`${config.bot.prefix}yavaşmod\` : belirtilen kanala yavaş mod uygular
\`${config.bot.prefix}nerede\` : @Wasley/ID
\`${config.bot.prefix}banlist\` : sunucuda banlananları sırayla listeler
\`${config.bot.prefix}bansorgu\` : @Wasley/ID
\`${config.bot.prefix}cezasorgu\` : #CezaID
`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'yönetim'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}roldenetim\` : @rol
\`${config.bot.prefix}rolsorgu\` : @rol
\`${config.bot.prefix}rolyönet\` : @Wasley/ID rol ver/al
\`${config.bot.prefix}ysay\` : Tüm Yetkilileri etiketler ve seste olanları gösterir
\`${config.bot.prefix}yses\` : Aktif Olup Seste Olmayanları gösterir
\`${config.bot.prefix}yt\` : @Wasley/ID
\`${config.bot.prefix}ytçek\` : @Wasley/ID
\`${config.bot.prefix}yetkililer\` : yetkilileri gösterir
\`${config.bot.prefix}rolal\` : @Wasley/ID @rol
\`${config.bot.prefix}rolver\` : @Wasley/ID @rol
\`${config.bot.prefix}müzisyen\` : @Wasley/ID
\`${config.bot.prefix}streamer\` : @Wasley/ID
\`${config.bot.prefix}vip\` : @Wasley/ID
\`${config.bot.prefix}sponsor\` : @Wasley/ID
\`${config.bot.prefix}sorunçözücü\` : @Wasley/ID
\`${config.bot.prefix}taginfo\` : Bilmek istediğiniz tag
`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'ayarlamalı'){
                await interaction.reply({ content: `
     
\`${config.bot.prefix}capsengel\` : Aç/Kapat
\`${config.bot.prefix}küfürengel\` : ayarla #kanal
\`${config.bot.prefix}reklamengel\` : ayarla #kanal
\`${config.bot.prefix}modlog\` : ayarla #kanal
\`${config.bot.prefix}sa-as\` : Aç/Kapat
\`${config.bot.prefix}kanalkoruma\` : ayarla #kanal
\`${config.bot.prefix}rolkoruma\` : ayarla #kanal
`
     , ephemeral: true})
                }

           if(interaction.values && interaction.values[0] == 'kurucu'){
                await interaction.reply({ content: `
     
Yakındaaa
`
     , ephemeral: true})
                }


           })

           
        
           
           
                }
}