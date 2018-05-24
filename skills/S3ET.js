
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'A student can choose up to 5 elective papers (75 points) at any level (5, 6 or 7) to make up the 360 points required for the degree. Out of the 5 elective papers, up to 4 papers (60 points) can be chosen from any other degree as long as the content does not overlap with any of the completed papers. See the academic advisor if there is doubt on content overlap');
};
