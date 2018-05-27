
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMM501 Applied Communication (S1 Both/S2 Both). It is taught by Sean McNamara.');
};
