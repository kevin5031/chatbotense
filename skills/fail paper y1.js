
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'It is a pity to hear this news, but please make sure this paper is not a pre request for other paper.');
};
