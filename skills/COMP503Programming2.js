
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP503 is the paper code for Programming 2. In Programming 2, it is taught by Kenneth Johnson and it teaches programming uses JAVA. Pre-req: COMP500');
};
