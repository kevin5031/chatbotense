
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'ENEL504 Computer Network Principles (CCNA1), it is taought by Michael Hadrup');
};
