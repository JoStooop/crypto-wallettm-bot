const startCommand = require('./start/index.js');
const balanceCommand = require('./balance/index.js');

const commands = {
  start: startCommand,
  balance: balanceCommand,
  help(bot) {
    bot.command(['help', 'h'], (ctx) => {
      ctx.reply('Commands: \n/balance - Show your balance \n/list - Show list of your assets');
    });
  },
  list(bot) {
    bot.command(['list', 'assets'], (ctx) => {
      const assets = 'Your assets: \n1. BTC \n2. ETH \n3. USDT';  // Пример списка
      ctx.reply(assets);
    });
  }
};

module.exports = {
  registerAllCommands: function(bot) {
    Object.values(commands).forEach((command) => command(bot));
  }
};
