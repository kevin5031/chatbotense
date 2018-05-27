
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'The following courses require pdc as a pre requisite:\n COMP602 Software Development Practice\n ENSE701 Software Engineering\n COMP721 Web Development\n ');
};
