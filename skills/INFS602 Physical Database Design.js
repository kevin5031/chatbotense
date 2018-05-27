
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'INFS602 Physical Database Design (S1 South/S2 Both) Pre-req: COMP503; INFS601');
};
