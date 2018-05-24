
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'There have 3 core paper in second year of software development:\nINFS600 Data & Process Modelling (S1 Both/S2 Both) Pre-req: COMP500 \nINFS601 Logical Database Design (S1 Both/S2 Both) Pre-req: COMP500 or ENSE501\nCOMP600 IT Project Management (S1 Both/S2 Both)\n****Reply "S2SD" CHECK YOUR MAJOR COURSE****\n');
};
