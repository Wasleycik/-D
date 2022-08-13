const { Client, Collection, Intents ,Discord ,MessageEmbed ,Permissions} = require("discord.js");
const { interaction, MessageActionRow, MessageSelectMenu ,Message} = require('discord.js');
const { MessageButton } = require("discord.js")
const config = require("./config.json");
const db = require("quick.db");
const ms = require("pretty-ms")
const fs = require("fs");
const client = global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
const dotenv = require("dotenv");
dotenv.config();
const { readdir } = require("fs");
require("moment-duration-format");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
  if (err) console.error(err)
  files.forEach(f => {
    readdir("./src/commands/" + f, (err2, files2) => {
      if (err2) console.log(err2)
      files2.forEach(file => {
        let prop = require(`./src/commands/${f}/` + file);
        console.log(`[Yüklenen-Komut] ${prop.name} Başarıyla yüklendi!`);
        commands.set(prop.name, prop);
        prop.aliases.forEach(alias => {
          aliases.set(alias, prop.name);
        });
      });
    });
  });
});

readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    let prop = require(`./src/events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    console.log(`[Yüklenen-Event] ${prop.conf.name} Başarıyla yüklendi!`);
  });
});

client.login(config.bot.token)
  .then(() => console.log(`Bot ${client.user.username} olarak giriş yaptı!`))
  .catch((err) => console.log(`Bot Giriş yapamadı sebep: ${err}`));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////   KOMUTLAR Başlangıcı Alt Tarafta  /////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////   Selam Sistemi  /////////////////////////////////////////////////////////////////////////////////////

client.on("messageCreate", async msg => {

if(!msg.guild) return;
  const i = await db.fetch(`saas_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'Sa' || msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 'Sea' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 'Slm' || msg.content.toLowerCase() == 'slm' || msg.content.toLowerCase() == 'Selam' || msg.content.toLowerCase() == 'selam' ) {
          try {

                  return msg.reply(`**Aleyküm Selam** **Hoşgeldin** :)`).then(x => {
                    
                    setTimeout(() => {
                      x.delete()
                    }, 5000);
                  })
          } catch(err) {
            console.log(err);
          }
      }
      
        if(msg.content.toLowerCase() == 'tag' || msg.content.toLowerCase() == 'Tag'|| msg.content.toLowerCase() == 'Sunucu Tagı' || msg.content.toLowerCase() == 'sunucu tagı'){
        try {

                  return msg.reply(`✦`).then(x => {
                       
                    setTimeout(() => {
                      x.delete()
                    }, 5000);
                  })
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });

///////////////////////////////////////////////////////////////   Reklam Koruma // Küfür Koruma  ///////////////////////////////////////////////////////////////////////////////////

//küfürengel

client.on('messageCreate', async message => {
	const cdb = require("quick.db") //gerekli modül
	if(message.guild){
	  const data1 = cdb.get("cd1."+message.guild.id)
	  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
	  
	  if(data1){
	  const blacklist = ["Oorospucou","Anen","anskm", "orosbu", "orosb", "0r0spuc0cu", "4n4n1 sk3r1m", "p1c", "@n@nı skrm", "evladi", "orsb", "orsbcogu", "amnskm", "anaskm", "mk", "oc", "abaza", "abazan", "ag", "ağzına sıçayım", "fuck",
    "shit", "ahmak", "seks", "sex", "allahsız", "amarım", "ambiti", "am biti", "amcığı", "amcığın", "amcığını", "amcığınızı", "amcık", "amcık hoşafı", "amcıklama", "amcıklandı", "amcik", "amck",
    "amckl", "amcklama", "amcklaryla", "amckta", "amcktan", "amcuk", "amık", "amına", "amınako", "amına koy", "amına koyarım", "amına koyayım", "amınakoyim", "amına koyyim", "amına s", "amına sikem",
    "amına sokam", "amın feryadı", "amını", "amını s", "amın oglu", "amınoğlu", "amın oğlu", "amısına", "amısını", "amina", "amina g", "amina k", "aminako", "aminakoyarim", "amina koyarim", "amina koyayım",
    "amina koyayim", "aminakoyim", "aminda", "amindan", "amindayken", "amini", "aminiyarraaniskiim", "aminoglu", "amin oglu", "amiyum", "amk", "amkafa", "amk çocuğu", "amlarnzn", "amlı", "amm", "ammak", "ammna",
    "amn", "amna", "amnda", "amndaki", "amngtn", "amnn", "amona", "amq", "amsız", "amsiz", "amsz", "amteri", "amugaa", "amuğa", "amuna", "ana", "anaaann", "anal", "analarn", "anam", "anamla", "anan", "anana", "anandan",
    "ananı", "ananı", "ananın", "ananın am", "ananın amı", "ananın dölü", "ananınki", "ananısikerim", "ananı sikerim", "ananısikeyim", "ananı sikeyim", "ananızın", "ananızın am", "anani", "ananin", "ananisikerim", "anani sikerim",
    "ananisikeyim", "anani sikeyim", "anann", "ananz", "anas", "anasını", "anasının am", "anası orospu", "anasi", "anasinin", "anay", "anayin", "angut", "anneni", "annenin", "annesiz", "anuna", "aptal", "aq", "a.q", "a.q.", "aq.", "ass",
     "atmık", "attırdığım", "attrrm", "auzlu", "avrat", "ayklarmalrmsikerim", "azdım", "azdır", "azdırıcı", "babaannesi kaşar", "babanı", "babanın", "babani", "babası pezevenk", "bacağına sıçayım", "bacına", "bacını",
    "bacının", "bacini", "bacn", "bacndan", "bacy", "bastard", "basur", "bitch", "biting", "bok", "boka", "bokbok", "bokça", "bokhu", "bokkkumu", "boklar", "boktan", "boku", "bokubokuna", "bokum", "bombok", "boner",
    "bosalmak", "boşalmak", "cenabet", "cibiliyetsiz", "cibilliyetini", "cibilliyetsiz", "cikar",  "çük", "dalaksız", "dallama", "daltassak", "dalyarak", "dalyarrak", "dangalak", "dassagi", "diktim", "dildo", "dingil",
    "dingilini", "dinsiz", "dkerim", "domal", "domalan", "domaldı", "domaldın", "domalık", "domalıyor", "domalmak", "domalmış", "domalsın", "domalt", "domaltarak", "domaltıp", "domaltır", "domaltırım", "domaltip", "domaltmak", "dölü",
    "dönek", "düdük", "eben", "ebeni", "ebenin", "ebeninki", "ebleh", "ecdadını", "ecdadini", "embesil", "fahise", "fahişe", "feriştah", "ferre", "fuck", "fucker", "fuckin", "fucking", "gavad", "gavat", "geber", "geberik", 
    "gebermiş", "gebertir", "gerızekalı", "gerizekalı", "gerizekali", "gerzek",  "giberler", "gibis", "gibiş", "gibmek", "gibtiler", "goddamn", "godoş", "godumun", "gotelek", "gotlalesi", "gotlu", "gotten", "gotundeki",
    "gotunden", "gotune", "gotunu", "gotveren", "goyiim", "goyum", "goyuyim", "goyyim", "göt", "göt deliği", "götelek", "göt herif", "götlalesi", "götlek", "götoğlanı", "göt oğlanı", "götoş", "götten", "götü", "götün", "götüne",
    "götünekoyim", "götüne koyim", "götünü", "götveren", "göt veren", "göt verir", "gtelek", "gtn", "gtnde", "gtnden", "gtne", "gtten", "gtveren", "hasiktir", "hassikome", "hassiktir", "has siktir", "hassittir", "haysiyetsiz",
    "hayvan herif", "hoşafı", "hödük", "hsktr", "huur", "ıbnelık", "ibina", "ibine", "ibinenin", "ibne", "ibnedir", "ibneleri", "ibnelik", "ibnelri", "ibneni", "ibnenin", "ibnerator", "ibnesi", "idiot", "idiyot", "imansz", "ipne",
    "iserim", "işerim", "itoğlu it", "kafam girsin", "kafasız", "kafasiz", "kahpe", "kahpenin", "kahpenin feryadı", "kaka", "kaltak", "kancık", "kancik", "kappe", "karhane", "kaşar", "kavat", "kavatn", "kaypak", "kayyum", "kerane",
    "kerhane", "kerhanelerde", "kevase", "kevaşe", "kevvase", "koca göt", "koduğmun", "koduğmunun", "kodumun", "kodumunun", "koduumun", "koyarm", "koyayım", "koyiim", "koyiiym", "koyim", "koyum", "koyyim", "krar", "kukudaym",
    "laciye boyadım", "lavuk", "liboş", "madafaka", "mal", "malafat", "malak", "manyak", "mcik", "meme", "memelerini", "mezveleli", "minaamcık", "mincikliyim", "mna", "monakkoluyum", "motherfucker", "mudik", "oc", "ocuu", "ocuun",
    "Oç", "oç", "o. çocuğu", "oğlan", "oğlancı", "oğlu it", "orosbucocuu", "orospu", "orospucocugu", "orospu cocugu", "orospu çoc", "orospuçocuğu", "orospu çocuğu", "orospu çocuğudur", "orospu çocukları", "orospudur", "orospular",
    "orospunun", "orospunun evladı", "orospuydu", "orospuyuz", "orostoban", "orostopol", "orrospu", "oruspu", "oruspuçocuğu", "oruspu çocuğu", "osbir", "ossurduum", "ossurmak", "ossuruk", "osur", "osurduu", "osuruk", "osururum",
    "otuzbir", "öküz", "öşex", "patlak zar", "penis", "pezevek", "pezeven", "pezeveng", "pezevengi", "pezevengin evladı", "pezevenk", "pezo", "pic", "pici", "picler", "piç", "piçin oğlu", "piç kurusu", "piçler", "pipi", "pipiş", "pisliktir",
    "porno", "pussy", "puşt", "puşttur", "rahminde", "revizyonist", "s1kerim", "s1kerm", "s1krm", "sakso", "saksofon", "salaak", "salak", "saxo", "sekis", "serefsiz", "sevgi koyarım", "sevişelim", "sexs", "sıçarım", "sıçtığım", "sıecem",
    "sicarsin", "sie", "sik", "sikdi", "sikdiğim", "sike", "sikecem", "sikem", "siken", "sikenin", "siker", "sikerim", "sikerler", "sikersin", "sikertir", "sikertmek", "sikesen", "sikesicenin", "sikey", "sikeydim", "sikeyim", "sikeym",
    "siki", "sikicem", "sikici", "sikien", "sikienler", "sikiiim", "sikiiimmm", "sikiim", "sikiir", "sikiirken", "sikik", "sikil", "sikildiini", "sikilesice", "sikilmi", "sikilmie", "sikilmis", "sikilmiş", "sikilsin", "sikim", "sikimde",
    "sikimden", "sikime", "sikimi", "sikimiin", "sikimin", "sikimle", "sikimsonik", "sikimtrak", "sikin", "sikinde", "sikinden", "sikine", "sikini", "sikip", "sikis", "sikisek", "sikisen", "sikish", "sikismis", "sikiş", "sikişen",
    "sikişme", "sikitiin", "sikiyim", "sikiym", "sikiyorum", "sikkim", "sikko", "sikleri", "sikleriii", "sikli", "sikm", "sikmek", "sikmem", "sikmiler", "sikmisligim", "siksem", "sikseydin", "sikseyidin", "siksin", "siksinbaya",
    "siksinler", "siksiz", "siksok", "siksz", "sikt", "sikti", "siktigimin", "siktigiminin", "siktiğim", "siktiğimin", "siktiğiminin", "siktii", "siktiim", "siktiimin", "siktiiminin", "siktiler", "siktim", "siktim", "siktimin",
    "siktiminin", "siktir", "siktir et", "siktirgit", "siktir git", "siktirir", "siktiririm", "siktiriyor", "siktir lan", "siktirolgit", "siktir ol git", "sittimin", "sittir", "skcem", "skecem", "skem", "sker", "skerim", "skerm",
    "skeyim", "skiim", "skik", "skim", "skime", "skmek", "sksin", "sksn", "sksz", "sktiimin", "sktrr", "skyim", "slaleni", "sokam", "sokarım", "sokarim", "sokarm", "sokarmkoduumun", "sokayım", "sokaym", "sokiim", "soktuğumunun", "sokuk",
    "sokum", "sokuş", "sokuyum", "soxum", "sulaleni", "sülaleni", "sülalenizi", "sürtük", "şerefsiz", "şıllık", "taaklarn", "taaklarna", "tarrakimin", "tasak", "tassak", "taşak", "taşşak", "tipini s.k", "tipinizi s.keyim", "tiyniyat",
    "toplarm", "topsun", "totoş", "vajina", "vajinanı", "veled", "veledizina", "veled i zina", "verdiimin", "weled", "weledizina", "whore", "xikeyim", "yaaraaa", "yalama", "yalarım", "yalarun", "yaraaam", "yarak", "yaraksız", "yaraktr",
    "yaram", "yaraminbasi", "yaramn", "yararmorospunun", "yarra", "yarraaaa", "yarraak", "yarraam", "yarraamı", "yarragi", "yarragimi", "yarragina", "yarragindan", "yarragm", "yarrağ", "yarrağım", "yarrağımı", "yarraimin", "yarrak",
    "yarram", "yarramin", "yarraminbaşı", "yarramn", "yarran", "yarrana", "yarrrak", "yavak", "yavş", "yavşak", "yavşaktır", "yavuşak", "yılışık", "yilisik", "yogurtlayam", "yoğurtlayam", "yrrak", "zıkkımım", "zibidi", "zigsin", "zikeyim",
    "zikiiim", "zikiim", "zikik", "zikim", "ziksiiin", "ziksiin", "zulliyetini", "zviyetini", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka",
    "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch",
    "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs",
    "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris",
    "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok",
    "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts",
    "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker",
    "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag",
    "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio",
    "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook",
    "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker",
    "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell",
    "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead",
    "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate",
    "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz",
    "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin",
    "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah",
    "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker",
    "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop",
    "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing",
    "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting",
    "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez",
    "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina",
    "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx","amini","Anan","Ananı","annanı","annen","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq","orospucocu","awk","anan","annen","anneni"];
	
	  let content = message.content.split(' ');
	  
	  content.forEach(kelime => {
	  if(blacklist.some(küfür => küfür === kelime))  {
	  if(!message.member.permissions.has('BAN_MEMBERS')){
	  message.channel.send({content: "**Lütfen Küfür Etme!!**" }).catch(e => {})
	  message.delete().catch(e => {})
	  }
	  }
	  })
	  }
	
		if(!data1 && data2){
	  const blacklist = ["Oorospucou","Anen","anskm", "orosbu", "orosb", "0r0spuc0cu", "4n4n1 sk3r1m", "p1c", "@n@nı skrm", "evladi", "orsb", "orsbcogu", "amnskm", "anaskm", "mk", "oc", "abaza", "abazan", "ag", "ağzına sıçayım", "fuck",
    "shit", "ahmak", "seks", "sex", "allahsız", "amarım", "ambiti", "am biti", "amcığı", "amcığın", "amcığını", "amcığınızı", "amcık", "amcık hoşafı", "amcıklama", "amcıklandı", "amcik", "amck",
    "amckl", "amcklama", "amcklaryla", "amckta", "amcktan", "amcuk", "amık", "amına", "amınako", "amına koy", "amına koyarım", "amına koyayım", "amınakoyim", "amına koyyim", "amına s", "amına sikem",
    "amına sokam", "amın feryadı", "amını", "amını s", "amın oglu", "amınoğlu", "amın oğlu", "amısına", "amısını", "amina", "amina g", "amina k", "aminako", "aminakoyarim", "amina koyarim", "amina koyayım",
    "amina koyayim", "aminakoyim", "aminda", "amindan", "amindayken", "amini", "aminiyarraaniskiim", "aminoglu", "amin oglu", "amiyum", "amk", "amkafa", "amk çocuğu", "amlarnzn", "amlı", "amm", "ammak", "ammna",
    "amn", "amna", "amnda", "amndaki", "amngtn", "amnn", "amona", "amq", "amsız", "amsiz", "amsz", "amteri", "amugaa", "amuğa", "amuna", "ana", "anaaann", "anal", "analarn", "anam", "anamla", "anan", "anana", "anandan",
    "ananı", "ananı", "ananın", "ananın am", "ananın amı", "ananın dölü", "ananınki", "ananısikerim", "ananı sikerim", "ananısikeyim", "ananı sikeyim", "ananızın", "ananızın am", "anani", "ananin", "ananisikerim", "anani sikerim",
    "ananisikeyim", "anani sikeyim", "anann", "ananz", "anas", "anasını", "anasının am", "anası orospu", "anasi", "anasinin", "anay", "anayin", "angut", "anneni", "annenin", "annesiz", "anuna", "aptal", "aq", "a.q", "a.q.", "aq.", "ass",
    "atkafası", "atmık", "attırdığım", "attrrm", "auzlu", "avrat", "ayklarmalrmsikerim", "azdım", "azdır", "azdırıcı", "babaannesi kaşar", "babanı", "babanın", "babani", "babası pezevenk", "bacağına sıçayım", "bacına", "bacını",
    "bacının", "bacini", "bacn", "bacndan", "bacy", "bastard", "basur", "beyinsiz", "bızır", "bitch", "biting", "bok", "boka", "bokbok", "bokça", "bokhu", "bokkkumu", "boklar", "boktan", "boku", "bokubokuna", "bokum", "bombok", "boner",
    "bosalmak", "boşalmak", "cenabet", "cibiliyetsiz", "cibilliyetini", "cibilliyetsiz", "cif", "cikar", "cim", "çük", "dalaksız", "dallama", "daltassak", "dalyarak", "dalyarrak", "dangalak", "dassagi", "diktim", "dildo", "dingil",
    "dingilini", "dinsiz", "dkerim", "domal", "domalan", "domaldı", "domaldın", "domalık", "domalıyor", "domalmak", "domalmış", "domalsın", "domalt", "domaltarak", "domaltıp", "domaltır", "domaltırım", "domaltip", "domaltmak", "dölü",
    "dönek", "düdük", "eben", "ebeni", "ebenin", "ebeninki", "ebleh", "ecdadını", "ecdadini", "embesil", "emi", "fahise", "fahişe", "feriştah", "ferre", "fuck", "fucker", "fuckin", "fucking", "gavad", "gavat", "geber", "geberik", "gebermek",
    "gebermiş", "gebertir", "gerızekalı", "gerizekalı", "gerizekali", "gerzek", "giberim", "giberler", "gibis", "gibiş", "gibmek", "gibtiler", "goddamn", "godoş", "godumun", "gotelek", "gotlalesi", "gotlu", "gotten", "gotundeki",
    "gotunden", "gotune", "gotunu", "gotveren", "goyiim", "goyum", "goyuyim", "goyyim", "göt", "göt deliği", "götelek", "göt herif", "götlalesi", "götlek", "götoğlanı", "göt oğlanı", "götoş", "götten", "götü", "götün", "götüne",
    "götünekoyim", "götüne koyim", "götünü", "götveren", "göt veren", "göt verir", "gtelek", "gtn", "gtnde", "gtnden", "gtne", "gtten", "gtveren", "hasiktir", "hassikome", "hassiktir", "has siktir", "hassittir", "haysiyetsiz",
    "hayvan herif", "hoşafı", "hödük", "hsktr", "huur", "ıbnelık", "ibina", "ibine", "ibinenin", "ibne", "ibnedir", "ibneleri", "ibnelik", "ibnelri", "ibneni", "ibnenin", "ibnerator", "ibnesi", "idiot", "idiyot", "imansz", "ipne",
    "iserim", "işerim", "itoğlu it", "kafam girsin", "kafasız", "kafasiz", "kahpe", "kahpenin", "kahpenin feryadı", "kaka", "kaltak", "kancık", "kancik", "kappe", "karhane", "kaşar", "kavat", "kavatn", "kaypak", "kayyum", "kerane",
    "kerhane", "kerhanelerde", "kevase", "kevaşe", "kevvase", "koca göt", "koduğmun", "koduğmunun", "kodumun", "kodumunun", "koduumun", "koyarm", "koyayım", "koyiim", "koyiiym", "koyim", "koyum", "koyyim", "krar", "kukudaym",
    "laciye boyadım", "lavuk", "liboş", "madafaka", "mal", "malafat", "malak", "manyak", "mcik", "meme", "memelerini", "mezveleli", "minaamcık", "mincikliyim", "mna", "monakkoluyum", "motherfucker", "mudik", "oc", "ocuu", "ocuun",
    "Oç", "oç", "o. çocuğu", "oğlan", "oğlancı", "oğlu it", "orosbucocuu", "orospu", "orospucocugu", "orospu cocugu", "orospu çoc", "orospuçocuğu", "orospu çocuğu", "orospu çocuğudur", "orospu çocukları", "orospudur", "orospular",
    "orospunun", "orospunun evladı", "orospuydu", "orospuyuz", "orostoban", "orostopol", "orrospu", "oruspu", "oruspuçocuğu", "oruspu çocuğu", "osbir", "ossurduum", "ossurmak", "ossuruk", "osur", "osurduu", "osuruk", "osururum",
    "otuzbir", "öküz", "öşex", "patlak zar", "penis", "pezevek", "pezeven", "pezeveng", "pezevengi", "pezevengin evladı", "pezevenk", "pezo", "pic", "pici", "picler", "piç", "piçin oğlu", "piç kurusu", "piçler", "pipi", "pipiş", "pisliktir",
    "porno", "pussy", "puşt", "puşttur", "rahminde", "revizyonist", "s1kerim", "s1kerm", "s1krm", "sakso", "saksofon", "salaak", "salak", "saxo", "sekis", "serefsiz", "sevgi koyarım", "sevişelim", "sexs", "sıçarım", "sıçtığım", "sıecem",
    "sicarsin", "sie", "sik", "sikdi", "sikdiğim", "sike", "sikecem", "sikem", "siken", "sikenin", "siker", "sikerim", "sikerler", "sikersin", "sikertir", "sikertmek", "sikesen", "sikesicenin", "sikey", "sikeydim", "sikeyim", "sikeym",
    "siki", "sikicem", "sikici", "sikien", "sikienler", "sikiiim", "sikiiimmm", "sikiim", "sikiir", "sikiirken", "sikik", "sikil", "sikildiini", "sikilesice", "sikilmi", "sikilmie", "sikilmis", "sikilmiş", "sikilsin", "sikim", "sikimde",
    "sikimden", "sikime", "sikimi", "sikimiin", "sikimin", "sikimle", "sikimsonik", "sikimtrak", "sikin", "sikinde", "sikinden", "sikine", "sikini", "sikip", "sikis", "sikisek", "sikisen", "sikish", "sikismis", "sikiş", "sikişen",
    "sikişme", "sikitiin", "sikiyim", "sikiym", "sikiyorum", "sikkim", "sikko", "sikleri", "sikleriii", "sikli", "sikm", "sikmek", "sikmem", "sikmiler", "sikmisligim", "siksem", "sikseydin", "sikseyidin", "siksin", "siksinbaya",
    "siksinler", "siksiz", "siksok", "siksz", "sikt", "sikti", "siktigimin", "siktigiminin", "siktiğim", "siktiğimin", "siktiğiminin", "siktii", "siktiim", "siktiimin", "siktiiminin", "siktiler", "siktim", "siktim", "siktimin",
    "siktiminin", "siktir", "siktir et", "siktirgit", "siktir git", "siktirir", "siktiririm", "siktiriyor", "siktir lan", "siktirolgit", "siktir ol git", "sittimin", "sittir", "skcem", "skecem", "skem", "sker", "skerim", "skerm",
    "skeyim", "skiim", "skik", "skim", "skime", "skmek", "sksin", "sksn", "sksz", "sktiimin", "sktrr", "skyim", "slaleni", "sokam", "sokarım", "sokarim", "sokarm", "sokarmkoduumun", "sokayım", "sokaym", "sokiim", "soktuğumunun", "sokuk",
    "sokum", "sokuş", "sokuyum", "soxum", "sulaleni", "sülaleni", "sülalenizi", "sürtük", "şerefsiz", "şıllık", "taaklarn", "taaklarna", "tarrakimin", "tasak", "tassak", "taşak", "taşşak", "tipini s.k", "tipinizi s.keyim", "tiyniyat",
    "toplarm", "topsun", "totoş", "vajina", "vajinanı", "veled", "veledizina", "veled i zina", "verdiimin", "weled", "weledizina", "whore", "xikeyim", "yaaraaa", "yalama", "yalarım", "yalarun", "yaraaam", "yarak", "yaraksız", "yaraktr",
    "yaram", "yaraminbasi", "yaramn", "yararmorospunun", "yarra", "yarraaaa", "yarraak", "yarraam", "yarraamı", "yarragi", "yarragimi", "yarragina", "yarragindan", "yarragm", "yarrağ", "yarrağım", "yarrağımı", "yarraimin", "yarrak",
    "yarram", "yarramin", "yarraminbaşı", "yarramn", "yarran", "yarrana", "yarrrak", "yavak", "yavş", "yavşak", "yavşaktır", "yavuşak", "yılışık", "yilisik", "yogurtlayam", "yoğurtlayam", "yrrak", "zıkkımım", "zibidi", "zigsin", "zikeyim",
    "zikiiim", "zikiim", "zikik", "zikim", "ziksiiin", "ziksiin", "zulliyetini", "zviyetini", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka",
    "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch",
    "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs",
    "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris",
    "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok",
    "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts",
    "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker",
    "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag",
    "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio",
    "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook",
    "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker",
    "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell",
    "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead",
    "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate",
    "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz",
    "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin",
    "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah",
    "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker",
    "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop",
    "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing",
    "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting",
    "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez",
    "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina",
    "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx","amini","Anan","Ananı","annanı","annen","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
	
	  let content = message.content.split(' ');
	  
	  content.forEach(kelime => {
	  if(blacklist.some(küfür => küfür === kelime))  {
	  if(!message.member.permissions.has('BAN_MEMBERS')){
		message.channel.send({content: "**Lütfen Küfür Etme!!**" }).catch(e => {})
		message.delete().catch(e => {})
	  }
	  }
	  })
	  }
	  
	}
	  });


let cdb = require("quick.db");
const reklam = [
	".com",	".net",".xyz",".tk",".pw",".io",".me",".gg","www.",	"https","http",".gl",".org",".com.tr",
	".biz","net",".rf",".gd",".az",".party",".gf"
 ];
  client.on("messageUpdate", async (old, nev) => {
	if(!old.guild) return;
	if (old.content != nev.content) {
	  let i = await cdb.fetch(`reklam.${nev.member.guild.id}.durum`);
	  let y = await cdb.fetch(`reklam.${nev.member.guild.id}.kanal`);
	  if (i) {
		if (reklam.some(word => nev.content.includes(word))) {
		if (nev.member.permissions.has("BAN_MEMBERS")) return;

		  const embed = new Discord.MessageEmbed()
			.setColor("#00ff00")
			.setDescription(
			  ` ${nev.author} , **Mesajını editleyerek reklam yapmaya çalıştı!**`
			)
			.addField("Mesajı:", nev.content)
			.addField("Kanal", nev.channel.name, true);
		  nev.delete();
		  const embeds = new Discord.MessageEmbed()
			.setColor("#00ff00")
			.setDescription(
			  ` ${nev.author} , **Mesajı editleyerek reklam yapamana izin veremem!**`
			);
		  client.channels.cache.get(y).send({embeds: [embed]});
		  nev.channel.send({ embeds: [embeds]}).then(x => setTimeout(() => x.delete(), 5000));
		}
	  } else {
	  }
	  if (!i) return;
	}
  });
  
  client.on("messageCreate", async msg => {
	if(!msg.guild) return;
	if (msg.author.bot) return;
	if (msg.channel.type === "dm") return;
	let y = await cdb.fetch(`reklam.${msg.member.guild.id}.kanal`);
  
	let i = await cdb.fetch(`reklam.${msg.member.guild.id}.durum`);
	if (i) {
	  if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
		try {
			if (!msg.member.permissions.has("MANAGE_GUILD")) {
			msg.delete({ timeout: 750 });
			const embeds = new Discord.MessageEmbed()
			  .setColor("#00ff00")
			  .setDescription(
				` <@${msg.author.id}> , **Bu sunucuda reklam yapmak yasak!**`
			  );
			msg.channel.send({ embeds: [embeds]}).then(x => setTimeout(() => x.delete(), 5000));
			const embed = new Discord.MessageEmbed()
			  .setColor("#00ff00")
			  .setDescription(` ${msg.author} , **Reklam yapmaya çalıştı!**`)
			  .addField("Mesajı:", msg.content)
			  .addField("Kanal", msg.channel.name, true);
			client.channels.cache.get(y).send({ embeds: [embed]});
		  }
		} catch (err) {
		  console.log(err);
		}
	  }
	}
	if (!i) return;
  });


      client.on("messageCreate", async msg => {
        if (msg.author.bot) return;
        const i = await db.fetch(`${msg.guild.id}_caps`);
        if (i == 'acik') {
        let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (msg.content.match(x)) {
      if (!msg.member.permissions.has("KICK_MEMBERS")) {
        msg.delete();
        msg.channel.send({content: `<@${msg.author.id}> __**Sunucuda Caps-Lock yasak!**__` }).catch(e => {})
      }
    }
  } if(!i) return;
})
  client.on("messageUpdate", async (oldMessage, newMessage) => {
    if (oldMessage.author.bot) return;
    const i = await db.fetch(`${oldMessage.guild.id}_caps`);
    if (i == 'acik') {
    let x = /\w*[A-Z]\w*[A-Z]\w*/g;
    if (newMessage.content.match(x)) {
      if (!oldMessage.member.permissions.has("KICK_MEMBERS")) {
        oldMessage.delete();
        oldMessage.channel.send({content: `<@${oldMessage.author.id}> __**Sunucuda Caps-Lock yasak!**__` }).catch(e => {})
      }
    }
    } if(!i) return; 
  })
//////////////////////////////////////////////////////////////////////////////   Snipe  ////////////////////////////////////////////////////////////////////////////////////////////


client.on("messageDelete", async (message) => {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
    let snipe = {
        mesaj: message.content,
        mesajyazan: message.author.id,
        ytarihi: message.createdTimestamp,
        starihi: Date.now(),
        kanal: message.channel.id
    }
    await db.set(`snipe.${message.guild.id}`, snipe)
});

//////////////////////////////////////////////////////////////////////////////   Komut Log  //////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////  Modlog  ////////////////////////////////////////////////////////////////////////////////////////////
var moment = require('moment');


client.on("messageDelete", message => {
    //console.log(message)
      if (!message || message.partial) return
      if (typeof message.author === "undefined" ) return
      if (message.author && message.author.bot === true) return
      if (message.channel && message.channel.type !== "GUILD_TEXT") return
      // validate if it's from a guild
    const channel2 = client.channels.cache.get(config.logs.messagelog)
      const messageDeletedEmbed = new MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
          let user = message.author
          let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
      var messageHadAttachment = message.attachments.map(x => x.proxyURL)[0]
      if (messageHadAttachment) { // if there is an attachement
          messageDeletedEmbed.setDescription(` <@${message.author.id}> üyesi <#${message.channel.id}> kanalında mesajını sildi. 
          
          **__silinen mesaj:__**
          silinen mesaj yoktur.
          
          **__silinen resim:__**
          ${message.attachments.map(x => x.proxyURL)}
  
  \`\`\`
Kanal: ${message.channel.name}  (${message.channel.id})
Kullanıcı: ${message.author.tag}  (${message.author.id})
Mesaj ID: ${message.id}
Atılma Tarihi: ${moment(message.createdAt).locale("tr").format('LLL')} \`\`\``)
           }
          else {
            messageDeletedEmbed.setDescription(` <@${message.author.id}> üyesi <#${message.channel.id}> kanalında mesajını sildi. 
          
            **__silinen mesaj:__**
            ${message.content.replace(/`/g, "'")}
  
            **__silinen resim:__**
            Silinen resim yoktur.
            
  \`\`\`
Kanal: ${message.channel.name}  (${message.channel.id})
Kullanıcı: ${message.author.tag}  (${message.author.id})
Mesaj ID: ${message.id}
Atılma Tarihi: ${moment(message.createdAt).locale("tr").format('LLL')}\`\`\``)
          }
          if(avatar.endsWith(".gif?size=1024")){
            messageDeletedEmbed.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))
          } else {
            messageDeletedEmbed.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
          }
       return channel2.send({ 
         embeds: [messageDeletedEmbed]
         }) // ({embeds: [embed]}) (messageDeletedEmbed)
    });




    // mesaj değiştirme log

    client.on("messageUpdate", (oldMessage, newMessage) => {
        if (oldMessage.author.bot === true) return
        if (oldMessage.channel.type !== "GUILD_TEXT") return
        if (newMessage.channel.type !== "GUILD_TEXT") return
        if (oldMessage.content === newMessage.content) return
      const messageEditedEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(newMessage.author.username, newMessage.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      
      .setDescription(` <@${newMessage.author.id}> üyesi <#${newMessage.channel.id}> kanalında mesajını düzenledi. 
      
      **__Düzenlenmeden Önce:__**
      ${oldMessage.content.replace(/`/g, "'")}
      
      **__Düzenlenlendikten Sonra:__**
      ${newMessage.content.replace(/`/g, "'")}
      
      \`\`\`
Kanal: ${newMessage.channel.name}  (${newMessage.channel.id})
Kullanıcı: ${newMessage.author.tag}  (${newMessage.author.id})
Mesaj ID: ${newMessage.id}
Atılma Tarihi: ${moment(oldMessage.createdAt).locale("tr").format('LLL')}\`\`\``)
        let user = newMessage.author
        let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
        if(avatar.endsWith(".gif?size=1024")){
          messageEditedEmbed.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: 'gif', size: 1024 }))
        } else {
          messageEditedEmbed.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
        }
      
      return client.channels.cache.get(config.logs.messagelog).send({ 
        embeds: [messageEditedEmbed]
        })
      });

    
      client.on("channelDelete", async channel => {
      let kanal = await cdb.get(`kkk_${channel.guild.id}`);
      if (!kanal) return;
      const entry = await channel.guild
        .fetchAuditLogs({ type: "CHANNEL_DELETE" })
        .then(audit => audit.entries.first());
      if (entry.executor.id == client.user.id) return;
     
      const embed = new MessageEmbed()
        .setTitle(`Bir kanal silindi!`)
        .addField(`Silen`, entry.executor.tag)
        .setColor("RED")
        .addField(`Silinen Kanal`, channel.name);
      client.channels.cache.get(kanal).send({embeds : [embed]});
    });
    
    client.on("channelCreate", async channel => {
      let kanal = await cdb.get(`kkk_${channel.guild.id}`);
      if (!kanal) return;
      const entry = await channel.guild
        .fetchAuditLogs({ type: "CHANNEL_CREATE" })
        .then(audit => audit.entries.first());
      if (entry.executor.id == client.user.id) return;
     
      const embed = new MessageEmbed()
        .setTitle(`Bir kanal açıldı!`)
        .setColor("RED")
        .addField(`Açan`, entry.executor.tag)
        .addField(`Açılan Kanal`, channel.name);
      client.channels.cache.get(kanal).send({embeds : [embed]});
    });
    
    client.on("roleDelete", async role => {
      let kanal = await cdb.get(`kkk_${role.guild.id}`);
      if (!kanal) return;
      const entry = await role.guild
        .fetchAuditLogs({ type: "ROLE_DELETE" })
        .then(audit => audit.entries.first());
      if (entry.executor.id == client.user.id) return;
      
    
      const embed = new MessageEmbed()
        .setTitle(`Bir rol silindi!`)
        .addField(`Silen`, entry.executor.tag)
        .addField(`Silinen Rol`, role.name);
      client.channels.cache.get(kanal).send({embeds : [embed]});
    });
    
    client.on("roleCreate", async role => {
      let kanal = await cdb.get(`kkk_${role.guild.id}`);
      if (!kanal) return;
      const entry = await role.guild
        .fetchAuditLogs({ type: "ROLE_CREATE" })
        .then(audit => audit.entries.first());
      if (entry.executor.id == client.user.id) return;
     
      const embed = new MessageEmbed()
        .setTitle(`Bir rol açıldı!`)
        .addField(`Açan`, entry.executor.tag)
        .addField(`Açılan Rol`, role.name);
      client.channels.cache.get(kanal).send({embeds : [embed]});
    });         



///////////////////////////////////////////////////////////////////////////  Butonlu Oylama  ///////////////////////////////////////////////////////////////////////////////////////


const edb = require("quick.db")
client.on("interactionCreate", async interaction => {
if (!interaction.isButton()) return;

let user = edb.get(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`) 

if(interaction.customId == "evet_oylama") {
if(!user) {
edb.add(`oylamaEVET_${interaction.message.id}`, 1)

let dataEvet = edb.get(`oylamaEVET_${interaction.message.id}`) || "0"
let dataHayır = edb.get(`oylamaHAYIR_${interaction.message.id}`) || "0"

let evet = new MessageButton()
.setStyle("SUCCESS")
.setLabel(`(${dataEvet}) Evet`)
.setCustomId("evet_oylama")
let hayır = new MessageButton()
.setStyle("DANGER")
.setLabel(`(${dataHayır}) Hayır`)
.setCustomId("hayır_oylama")

interaction.message.edit({components: [new MessageActionRow({ components:  [evet, hayır] })]})

edb.set(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`, interaction.user.id) 
}

interaction.deferUpdate();
}

if(interaction.customId == "hayır_oylama") {
if(!user) {
edb.add(`oylamaHAYIR_${interaction.message.id}`, 1)

let dataEvet = edb.get(`oylamaEVET_${interaction.message.id}`) || "0"
let dataHayır = edb.get(`oylamaHAYIR_${interaction.message.id}`) || "0"

let evet = new MessageButton()
.setStyle("SUCCESS")
.setLabel(`(${dataEvet}) Evet`)
.setCustomId("evet_oylama")
let hayır = new MessageButton()
.setStyle("DANGER")
.setLabel(`(${dataHayır}) Hayır`)
.setCustomId("hayır_oylama")

interaction.message.edit({ components: [new MessageActionRow({ components:  [evet, hayır] })] })

edb.set(`oylamaUSER_${interaction.message.id}_${interaction.user.id}`, interaction.user.id) 
}

interaction.deferUpdate();
}

})

///////////////////////////////////////////////////////////////   Rol Koruma ////////// Rol Guard  /////////////////////////////////////////////////////////////////////////////////

client.on("roleDelete", async role => {
 let rk = db.fetch(`rolk_${role.guild.id}`)
 let knl = db.fetch(`rolklog_${role.guild.id}`)
 if(rk == 'acik') {
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Rol Açıldı.'})
   
   client.channels.cache.get(knl).send(`Bir Rol Silindi! Fakat Rol Koruma Açık Olduğu İçin Rolü Tekrar Oluşturdum @here`)
}})

///////////////////////////////////////////////////////////////  Kanal Koruma  /////  Kanal Guard  /////////////////////////////////////////////////////////////////////////////////


client.on("channelDelete", async function(channel,member) {
let rol = await    db.fetch(`kkoruma_${channel.guild.id}`)
let log = await    db.fetch(`kkorumalog_${channel.guild.id}`)
  if (rol == true) {
const guild = channel.guild.cache;
let channelp = channel.parentID;
  channel.clone().then(z => {
    let kanal = z.guild.channels.cache.find(c => c.name === z.name);
    kanal.setParent(
      kanal.guild.channels.cache.find(channel => channel.id === channelp)
      
)
  client.channels.cache.get(log).send(`${kanal} Adlı Kanal Silindi! Fakat Kanal Koruma Aktif Olduğu İçin Geri Oluşturdum. @here`)
  });

    
    
  }
  if(!rol) return;
})

////////////////////////////////////////////////////////////////////////  Yetkili Başvuru Sistemi  /////////////////////////////////////////////////////////////////////////////////

client.on("ready", async () => {
const guild1 = client.guilds.cache.get(config.Guild.GuildID)
if(guild1){
if(guild1.channels.cache.find(a => a.name === "BAŞVURULAR")){
await guild1.channels.cache.filter(mr => mr.parent).filter(cs => cs.parent.name === "BAŞVURULAR").map(cs => cs.delete().catch(e => {console.log("Kanal Silmeye Yetkim Yetmiyor veya Kanal Zaten Yok!")}))
}}
setInterval(() => {
const guild = client.guilds.cache.get(config.Guild.GuildID)
if(guild){
const channel = guild.channels.cache.get(config.basvuru.basvuruyapchannel)
if(channel){
const role = guild.roles.cache.get(config.basvuru.staff)
if(role){
const channel1 = guild.channels.cache.get(config.basvuru.log)
if(channel1){
const role2 = guild.roles.cache.get(config.basvuru.endüsükytrol)
if(role2){
let button = new MessageButton()
.setLabel("Başvur")
.setStyle("SECONDARY")
.setCustomId("başvuru")
.setEmoji("📨")
const row = new MessageActionRow().addComponents(button)
  
const embed = new MessageEmbed()
.setTitle(config.basvuru.title)
.setThumbnail(client.user.displayAvatarURL())
.setColor(config.basvuru.color)
.setDescription(config.basvuru.description)
.setTimestamp()
.setFooter(config.bot.BotStatus)

const data = db.get("ubmesaj")
if(data){
channel.messages.fetch(data.message).then(async msg => {
  
msg.edit({ embeds: [embed], components: [row] }).then(async cs => {
await db.set("ubmesaj", {
message: cs.id,
channel: cs.channel.id
})}).catch(e => {})
}).catch(err => {
channel.send({ embeds: [embed], components: [row] }).then(async cs => {
await db.set("ubmesaj", {
message: cs.id,
channel: cs.channel.id
})}).catch(e => {})
})
} else {
channel.send({ embeds: [embed], components: [row] }).then(async cs => {
await db.set("ubmesaj", {
message: cs.id,
channel: cs.channel.id
})}).catch(e => {})
}} else {
console.log("config.js Dosyasına sRole Kısmını Doldurmamışsın Yada Rol Yok!")
}} else {
console.log("config.js Dosyasına Log Channel ID Girilmemiş Yada Kanal Yok!")
}} else {
console.log("config.js Dosyasına Staff ID Girilmemiş Yada Rol Yok!")
}} else {
console.log("config.js Dosyasına Kanal ID Girilmemiş Yada Kanal Yok!")
}} else {
console.log("config.js Dosyasına Sunucu ID Girilmemiş Yada Sunucu Yok!")
}}, 20000)})





client.on("interactionCreate", async (interaction) => {
if(!interaction.isButton()) return;
let user = interaction.guild.members.cache.get(interaction.user.id)
let channel = interaction.guild.channels.cache.get(interaction.channel.id)
let message = channel.messages.fetch(interaction.message.id)
let data = db.get("ubmesaj")

if(data){
let guild = client.guilds.cache.get(interaction.guild.id)
if(guild){
if(interaction.customId === "başvuru") {
let channel = guild.channels.cache.get(data.channel)
if(channel){
if(data.message == interaction.message.id){
if(db.get("başvurutimeout."+user.id)){
if(Date.now() > Number(db.get("başvurutimeout."+user.id)+config.basvuru.timeout)){
await db.delete("başvurutimeout."+user.id)
}}
if(!user.roles.cache.has(config.basvuru.endüsükytrol)){
if(!db.get("başvurutimeout."+user.id)){
const kontrol = guild.channels.cache.find(cs => cs.name === 'basvuru-'+user.id)
if(kontrol){
await interaction.reply({ content: '> **❌ Zaten açık bir başvuru talebin var!**', ephemeral: true}).catch(e => {})
} else {
let kontrol2 = guild.channels.cache.find(cs => cs.name === "BAŞVURULAR")
if(!kontrol2){
await guild.channels.create('BAŞVURULAR', {type: 'GUILD_CATEGORY'}).then(async tt => {
kontrol2 = tt
}).catch(e => {console.log("Kategori Oluşturmaya Yetkim Yetmiyor!")})
}
  
await guild.channels.create('basvuru-'+user.id, {
type: 'GUILD_TEXT',
parent: kontrol2,
permissionOverwrites: [{
id: guild.id,
deny: [Permissions.FLAGS.VIEW_CHANNEL],
},{
id: user.id,
allow: [Permissions.FLAGS.VIEW_CHANNEL,Permissions.FLAGS.SEND_MESSAGES],
}],}).then(async mr => {

let cevaplar = []
let num = 0;
const embed1 = new MessageEmbed()
.setTitle("BİLGİLENDİRME")
.setColor("BLUE")
.setDescription("**Aşşağıda Sana Sorulan Sorulara Cevap Vererek Başvuru Yapa Bilirsin. Sana Sıra ile `"+config.basvuru.sorular.length+"` Soru Sorulacak, Sen Bir Soruya Yanıt Verince Bot Diğer Soruyu Sorar!\nToplam 10 Dakikan Var.**")
.setTimestamp()
.setFooter(config.bot.BotStatus)
await mr.send({embeds: [embed1]}).catch(e => {})
await mr.send("<@"+user.id+"> 1 Soru: "+config.basvuru.sorular[num]).catch(e => {})

const collector1 = mr.createMessageCollector({time: 600000});
collector1.on('end', async collected => {
  setTimeout(async () => {
  return await mr.delete().catch(e => {console.log("Kanal Silmeye Yetkim Yetmiyor veya Kanal Zaten Yok!")})
  }, 10000)
  });

const filter = m => {
return m.content.includes(m.content) && m.author.id === user.id;
} 
const collector = mr.createMessageCollector({ filter, time: 600000});
  
collector.on('collect', async (msg) => {
if(config.basvuru.sorular[num]){
cevaplar.push("**SORU "+Number(num+1)+": `"+config.basvuru.sorular[num]+"`\nYANIT: `"+msg.content+"`**")
num = num+1
await mr.send(config.basvuru.sorular[num] ? "<@"+user.id+"> "+Number(num+1)+" Soru: "+config.basvuru.sorular[num] : "**Soruları Cevapladığın İçin Teşekkürler, Bütün Sorular Bitti. Başvurun Yetkili Ekibine İletildi Artık Beklemen Gerekli!**").catch(async e => {})
if(config.basvuru.sorular.length === num){
collector.stop("success")
const log = guild.channels.cache.get(config.basvuru.log)
if(log){
const staff = guild.roles.cache.get(config.basvuru.staff)
if(staff){

let button = new MessageActionRow().addComponents(
new MessageButton()
.setLabel("Onayla")
.setStyle("SUCCESS")
.setCustomId("onayla"),
new MessageButton()
.setLabel("Reddet")
.setStyle("DANGER")
.setCustomId("reddet"))

const embed = new MessageEmbed()
.setTitle("Yeni Başvuru Geldi")
.setColor("BLUE")
.setDescription("Başvuran: <@"+user.id+">\n\n"+cevaplar.map(cs => cs).join("\n\n"))
.setTimestamp()
.setFooter(config.bot.BotStatus)
await log.send({ embeds: [embed], components: [button] }).then(async cs => {
await db.set("başvuru."+cs.id, user.id)
}).catch(e => {})
}}}}}); 

collector.on('end', async collected => {
setTimeout(async () => {
return await mr.delete().catch(e => {console.log("Kanal Silmeye Yetkim Yetmiyor veya Kanal Zaten Yok!")})
}, 10000)
});
  
await interaction.reply({ content: '> **✅ Başvuru talebin için <#'+mr.id+'> kanalı açıldı. Bu kanala giderek soruları cevapla lütfen!**', ephemeral: true}).catch(e => {})
}).catch(e => {console.log("Kanal Oluşturmaya Yetkim Yetmiyor!")})
}} else {
await interaction.reply({ content: '> **❌ Zaten kısa süre önce reddedilmiş bir başvurun var. Tekrar başvurmak için `'+ms(Number(db.get("başvurutimeout."+user.id)+config.basvuru.timeout-Date.now()))+'` beklemen gerek!**', ephemeral: true}).catch(e => {})
}} else {
await interaction.reply({ content: '> **❌ Zaten yetkili rolüne sahipsin tekrar başvuru yapamazsın!**', ephemeral: true}).catch(e => {})
}}}}

  
if(interaction.customId === "onayla") {
if(user.roles.cache.has(config.basvuru.staff)){
let csm = db.get("başvuru."+interaction.message.id)
if(csm){
csm = guild.members.cache.get(csm)
if(csm){
if(config.basvuru.ilkytrolleri){
config.basvuru.ilkytrolleri.map(async rs => {
const role = guild.roles.cache.get(rs)
if(role){
await csm.roles.add(role.id).catch(e => {console.log("Kullanıcıya Rol Vermeye Yetkim Yetmiyo veya Rol Zaten Yok!")})
}})
await db.delete("başvuru."+interaction.message.id)
await csm.send(config.basvuru.successMessage).then(async ss => {
await interaction.reply({ content: '> **✅ <@'+csm.id+'> İsimli kişiye yetkili rolü verildi ve dm üzerinden bilgilendirme mesajı yollandı!**', ephemeral: true}).catch(e => {})
}).catch(async e => {
await interaction.reply({ content: '> **✅ <@'+csm.id+'> İsimli kişiye yetkili rolü verildi ancak dm kutusu kapalı diye bilgilendirme yapılamadı!**', ephemeral: true}).catch(e => {})
})
await interaction.message.delete().catch(e => {})
}} else {
await db.delete("başvuru."+interaction.message.id)
await interaction.reply({ content: '> **Bu başvurunun sahibi sunucuda bulunamadı diye talep silindi!**', ephemeral: true}).catch(e => {})
await interaction.message.delete().catch(e => {})
}}} else {
await interaction.reply({ content: '> **Sadece <@&'+config.basvuru.staff+'> rolüne sahip kişiler başvuru onaylaya bilir.**', ephemeral: true}).catch(e => {})
}}
  
  
if(interaction.customId === "reddet") {
if(user.roles.cache.has(config.basvuru.staff)){
let csm = db.get("başvuru."+interaction.message.id)
if(csm){
csm = guild.members.cache.get(csm)
if(csm){
await db.delete("başvuru."+interaction.message.id)
await db.set("başvurutimeout."+csm.id, Date.now())
await csm.send(config.basvuru.deleteMessage).then(async ss => {
await interaction.reply({ content: '> **✅ <@'+csm.id+'> İsimli kişiye başvurusunun reddedildiği hakkında dm üzerinden bilgilendirme mesajı yollandı!**', ephemeral: true}).catch(e => {})
}).catch(async e => {
await interaction.reply({ content: '> **✅ <@'+csm.id+'> İsimli kişiye dm kutusu kapalı diye bilgilendirme yapılamadı!**', ephemeral: true}).catch(e => {})
})
await interaction.message.delete().catch(e => {})
} else {
await db.delete("başvuru."+interaction.message.id)
await interaction.reply({ content: '> **Bu başvurunun sahibi sunucuda bulunamadı diye talep silindi!**', ephemeral: true}).catch(e => {})
await interaction.message.delete().catch(e => {})
}}} else {
await interaction.reply({ content: '> **Sadece <@&'+config.basvuru.staff+'> rolüne sahip kişiler başvuru reddede bilir.**', ephemeral: true}).catch(e => {})
}}
}}})

/////////////////////////////////////////////////////////   haftalık/aylık/yıllık üye sistem //////////////////////////////////////////////////////



////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////// KULLANICI PANEL ////////////////////////////////////////

        
///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////    /////////////////////////////////////////////////////////////////////////////////