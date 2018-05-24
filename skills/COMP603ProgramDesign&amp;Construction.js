
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP603 is the paper code for PDC. In PDC, it is taught by Bai Quan and it teaches programming uses JAVA.');
};
