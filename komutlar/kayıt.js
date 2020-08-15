const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const kayıtlı = message.guild.roles.find(r => r.id === "ÜYE ROL İD"); 
  const misafir = message.guild.roles.find(r => r.id === "kayıtsız rol id"); 
  const log = message.guild.channels.find(c => c.id === "kayıt log id"); 
  const tag = "ZZ  ";
  if(!message.member.roles.array().filter(r => r.id === "kayıt sorumlusu İD ")[0]) { 
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(kayıtlı)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kayıt Yapıldı")
    .addField(`Kayıdı Yapılan Yeni üye\n`, `${c.user.tag}`)
    .addField(`Kayıtı Yapan Yetkili\n`, `${message.author.tag}`)
    .addField(`Kayıtı Yapılan Üyenin Yeni ismi\n`, `${tag} ${nick} , ${yas}`)
    .setImage("https://tenor.com/view/love-hearts-i-love-you-gif-15809882")
    .setFooter("Kayıt Sistemi")
    .setColor("RED")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "k",
  usage: "k"
};
