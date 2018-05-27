
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'COMP702 Research & Development Project Part 1 (15 points) AND COMP703 Research & Development Project Part 2 (15 points) OR COMP704 Research & Development Project (30 points)');
};
