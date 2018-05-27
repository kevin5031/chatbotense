
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP719 Applied Human Computer Interaction (no pre-request). it is taught by  Robert Wellington.');
};
