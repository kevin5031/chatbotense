
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP721 Web Development Pre-req: COMP603, it is taught by Jian Yu');
};
