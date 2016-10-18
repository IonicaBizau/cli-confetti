"use strict";

const cliConfetti = require("../lib")
    , CliUpdate = require("cli-update")
    ;

cliConfetti({}, function (err, c) {
    if (err) throw err;
    CliUpdate.render(c);
});
