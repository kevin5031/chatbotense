
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'The following courses require ITPM as a core requisite:\n COMP603 Program Design & Construction\n COMP602 Software Development Practice');
};
