
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'STAT500 Applied Statistics (S1 City/S2 both)\n MATH501 Differential & Integral Calculus (S1 City/S2 City)\n MATH502 Algebra & Discrete Mathematics (S1 City/S2 Both) or MATH500 Mathematical Concepts (S1 Both/S2 Both) \n – see note about selecting your Mathematics paper over the page.\n');
};
