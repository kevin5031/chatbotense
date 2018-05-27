
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP502 Foundations of IT Infrastructure (S1 Both/S2 Both), it is taught by Minh Nguyen.');
};
