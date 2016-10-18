"use strict";

const cliSnow = require("cli-snow")
    , flatColors = require("flat-colors")
    , couleurs = require("couleurs")
    ;

const colors = flatColors.colors.map(c => c[3]);

/**
 * cliConfetti
 * Confetti in your terminal.
 *
 * @name cliConfetti
 * @function
 * @param {Object} opts The options to be passed to `cli-snow`
 * @param {Function} cb The callback function.
 */
module.exports = function cliConfetti (opts, cb) {
    opts = opts || {};
    opts.chars = (opts.chars || [".", "*", "@", "#", "$", "%", "<3", "&", "*", ":D", ":)", ":-)", ";)", ":>"]).map((c, i) => {
        return couleurs(c, colors[i]).toString()
    });
    cliSnow(opts, cb);
};
