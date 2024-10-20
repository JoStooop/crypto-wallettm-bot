const commandsList = {
  start: 'Welcome to the crypto wallettm bot!',
  balance: 'Show your balance',
  wallet: 'Get the wallet of a coin',
  help: 'Позвонить бро',
};

module.exports = function(bot) {
  bot.start((ctx) => {
    let message = `${commandsList.start} \n\nAvailable commands:\n`;

    for (const [command, description] of Object.entries(commandsList)) {
      if (command !== 'start') {
        message += `/${command} - ${description}\n`;
      }
    }

    ctx.reply(message);
  });
};
