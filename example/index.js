"use strict";

const cliConfeti = require("../lib")
    , CliUpdate = require("cli-update")
    ;

cliConfeti({}, function (err, c) {
    if (err) throw err;
    CliUpdate.render(c);
});
