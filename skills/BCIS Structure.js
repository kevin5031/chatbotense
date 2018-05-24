
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'In BCIS, there have 5 major which is IT Service Science, Newwork & Securty, Computer Science, Software Development ,Computional Intelligence, Analytics');
};
