
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP500 is the paper code for Programming 1. In Programming 1, it is taught by Steffan Hooper and it teaches programming uses C.');
};
