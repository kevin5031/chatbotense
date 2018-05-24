
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'Here is link for BCIS structure. \n https://drive.google.com/open?id=17QZAt26_qIneTW_VA4L0VmjvxmOzZ2Tw');
};
