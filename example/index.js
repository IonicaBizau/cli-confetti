"use strict";

const cliConfetti = require("../lib")
    , CliUpdate = require("cli-update")
    ;

cliConfetti({}, function (err, c) {
    if (err) throw err;
    CliUpdate.render(c);
});


// ES6 Version
import cliConfetti from "cli-confetti";
import CliUpdate from "cli-update";

cliConfetti({}, function (error, confetti) {
  if (error) throw error;
  CliUpdate.render(confetti);
});
