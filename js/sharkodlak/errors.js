'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.errors = sharkodlak.errors || {};


sharkodlak.errors.IllegalArgument = sharkodlak.extends(
    function(message) {
        Error.call(this, message)
    },
    Error
);