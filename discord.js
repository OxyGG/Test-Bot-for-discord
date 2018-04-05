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
JDA jda = new JDABuilder().setBotToken(NDI4MjMyNDkyOTY1OTUzNTU5.DagBrQ.g_hfFHkvSU3xFrOuDl3rWx7KUSA).setBulkDeleteSplittingEnabled(false).buildBlocking();
