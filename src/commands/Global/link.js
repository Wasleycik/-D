const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const ms = require("ms");
const config = require("../../../config.json");
const db = require("quick.db"); 
const moment = require("moment");
moment.locale("tr");
module.exports = {
    name: "link",
    aliases:  ['url', 'özelurl', 'sunuculink'],
    execute: async (client, message, args, embed, author, channel, guild) => {

    message.channel.createInvite({maxAge: 0}).then(invite => {

    message.channel.send(`**Sana bu sunucu için bir link oluşturdum** → ${invite}`)

    

  })
}}