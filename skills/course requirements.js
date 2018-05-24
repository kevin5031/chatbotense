
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'The course requirement for Software Engineering is you have to be in third year and passed P1 and P2.');
};
