
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'You can ask me question like these format:\n what is xxxxx? \n input "paper code" \n How many point in software development?\nwhat BCIS major inclued?\n pre-requisite + xxxx \n please send me BCIS structure.\n which paper have pre request in xxxx year?\n pre request of xxxx\n ');
};
