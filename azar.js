// Description:
//   selecciona al azar de un conjunto separados por coma (,)
//
// Dependencies:
//   hubor-azar
//
// Configuration:
//   None
//
// Commands:
//   @hubot al azar <algo1>,<algo2>,<algoN>,
//
// Author:
//   @jorgeepunan

var randomItem = function(items) {
  return items[~~(Math.random() * items.length)];
};

module.exports = function(robot) {
  robot.respond(/al azar (.*)/i, function(res) {
    items = res.match[1].trim().split(",");
    msg = ":dart: Al azar: *" + randomItem(items) + "* :ok_hand:";
    res.send(msg);
  });
};
