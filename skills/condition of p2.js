
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'The following courses require P2 as a pre requisite:\n ****COMP603 Program Design & Construction \n ****COMP604 Operating Systems\n ****INFS602 Physical Database Design\n');
};
