
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP503 Programming 2 (S1 Both/S2 Both) \n Pre-req: COMP500(Programming 1)\n ');
};
