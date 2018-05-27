
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'Hi, which programming course you want ask? (programming1 or programming2 or other course in software development.)');
};
