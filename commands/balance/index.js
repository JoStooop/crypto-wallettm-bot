module.exports = function(bot) {
  bot.command('balance', (ctx) => {
    const balance = 'Your balance is: 1.234 BTC';  // Пример ответа
    ctx.reply(balance);
  });
};
