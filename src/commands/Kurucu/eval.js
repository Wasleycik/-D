const config = require("../../../config.json");

module.exports = {
    name: "eval",
    aliases: ["evall"],
    owner: true,
    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!args[0]) return message.reply({ embeds: [embed.setDescription("Geliştirici değilsin")] });
        let code = args.join(" ");

        try {
            var result = clean(await eval(code));
            if (result.includes(client.token))
                return message.reply("https://tenor.com/view/wtcn-k%C3%BCf%C3%BCr-wtcn-k%C3%BCf%C3%BCr-wtcn-nah-wtcn-ferit-gif-20359300");
            channel.send(result, { code: "js", split: true });
        } catch (err) {
            channel.send(err, { code: "js", split: true });
        }
    },
};

function clean(text) {
    if (typeof text !== "string")
        text = require("util").inspect(text, { depth: 0 });
    text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}