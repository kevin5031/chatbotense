
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'After you graduate form AUT BCIS you will find a specific IT related job such as:\n ****Computer programmer\n ****Mobile/app developer\n ****Software developer, engineer or tester\n ****Systems analyst or architect\n ****Technology consultant\n ****Web developer\n ****Project manager\n @ Good luck in your future work!!! @\n');
};
