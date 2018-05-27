
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'INFS500 Enterprise Systems (S1 Both/S2 Both), it is taught by Ramesh Lal.');
};
