
module.exports = function(skill, info, bot, message) {
  console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  bot.reply(message, 'There have 8 paper in first year of BCIS:\n COMM501 Applied Communication(S1 Both/S2 Both) \n COMP500 Programming 1 (S1 Both/S2 Both)\n COMP501 Computing Technology in Society (S1 Both/S2 Both)\n INFS500 Enterprise Systems (S1 Both/S2 Both)\n COMP503 Programming 2 (S1 Both/S2 Both) [Pre-req: COMP500]\n ENEL504 Computer Network Principles (CCNA1) (S1 Both/S2 Both)\n *****THERE HAVE 4 PAPER YOU MUST CHOICE ONE OF THEM FOR YOUR CORE PAPER\n ****** PLEASE REPLY "S1MP" CHECK THE DETAILS ****** \n');
};
