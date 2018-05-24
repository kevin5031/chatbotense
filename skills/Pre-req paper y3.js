
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'ENSE701 Software Engineering Pre-req: COMP603 or COMP610\n COMP721 Web Development Pre-req: COMP603\n COMP713 Distributed & Mobile Systems Pre-req: COMP611\n +++++ Before you start research project.+++++\n Please make sure you have already finsh the all Leve5 and Level6 core paper.\n+++++ ');
};
