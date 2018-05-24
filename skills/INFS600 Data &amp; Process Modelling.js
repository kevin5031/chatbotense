
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'INF600 is the paper code for DPM. In DPM, it is taught by Mali Senapathi');
};
