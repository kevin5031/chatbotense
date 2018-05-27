
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'INFS601 Logical Database Design (S1 Both/S2 Both) Pre-req: COMP500 or ENSE501, it is taught by Muhammad Asif Naeem');
};
