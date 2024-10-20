require('dotenv').config();

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TG_BOT_TOKEN)

const { registerAllCommands } = require('./commands/index.js');
registerAllCommands(bot);

bot.launch() // запуск бота

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
