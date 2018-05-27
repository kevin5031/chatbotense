
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP713 Distributed & Mobile Systems Pre-req: COMP611');
};
