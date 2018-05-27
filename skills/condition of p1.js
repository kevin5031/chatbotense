
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'The following courses require P1 as a pre requisite:\n ****COMP503 Programming 2\n ****INFS600 Data & Process Modelling\n P1 can be enrolled as a prerequest in the following courses:\n ****INFS601 Logical Database Design');
};
