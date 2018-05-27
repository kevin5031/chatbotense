
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP604 Operating Systems (S1 South/S2 Both) Pre-req: COMP502; COMP503 or COMP610, it is taught by Jian Yu');
};
