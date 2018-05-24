
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP602 is the paper code for SDP. In SDP, Pre-req: COMP603 or COMP610 and Co-req: COMP600.');
};
