
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'INFS600 Data & Process Modelling (S1 Both/S2 Both) Pre-req: COMP500\n INFS601 Logical Database Design (S1 Both/S2 Both) Pre-req: COMP500 or ENSE501\n COMP603 Program Design & Construction Pre-req: COMP503 Co-req: INFS60\n COMP602 Software Development Practice Pre-req: COMP603 or COMP610 Co-req: COMP600\n COMP604 Operating Systems Pre-req: COMP502; COMP503 or COMP610\n INFS602 Physical Database Design Pre-req: COMP503; INFS601\n ');
};
