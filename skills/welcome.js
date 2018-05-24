
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'Hi welcome AUT BCIS ^_^, You can ask me some question about BCIS course structure or information about software development.');
};
