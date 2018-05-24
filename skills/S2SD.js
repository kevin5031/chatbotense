
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'Here is Software development major paper in year 2:\n COMP603 Program Design & Construction Pre-req: COMP503 Co-req: INFS600\n COMP602 Software Development Practice Pre-req: COMP603 or COMP610 Co-req: COMP600\n COMP604 Operating Systems (Pre-req: COMP502; COMP503 or COMP610) OR INFS602 Physical Database Design(Pre-req: COMP503; INFS601)\n');
};
