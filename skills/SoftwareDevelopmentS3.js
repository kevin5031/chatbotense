
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'Any 3 of the following:\n ENSE701 Software Engineering Pre-req: COMP603 or COMP610\n COMP719 Applied Human Computer Interaction\n COMP721 Web Development Pre-req: COMP603\nCOMP713 Distributed & Mobile Systems Pre-req: COMP611\n You will doing the one year research project in your third\nCOMP702 Research & Development Project Part 1 (15 points) AND COMP703 Research & Development Project Part 2 (15 points) OR COMP704 Research & Development Project (30 points)\n ****Reply "S3ET" to view the elective infor.****\n');
};
