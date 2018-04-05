const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})
bot.on('message', message=> {
    if (message.content === 'bonjour') {
      message.reply ('Au revoir!  ')
    }
})

bot.login('TOKEN')
JDA jda = new JDABuilder().setBotToken(Token).setBulkDeleteSplittingEnabled(false).buildBlocking();
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})
bot.on('message', message=> {
    if (message.content === 'bonjour') {
      message.reply ('Au revoir!  ')
    }
})

bot.login('TOKEN')
JDA jda = new JDABuilder().setBotToken(Token).setBulkDeleteSplittingEnabled(false).buildBlocking();
