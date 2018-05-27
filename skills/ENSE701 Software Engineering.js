
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'ENSE701 Software Engineering Pre-req: COMP603 or COMP610, it is taught by Jim Buchan. He is a good teacher.^_^');
};
