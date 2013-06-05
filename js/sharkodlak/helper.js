'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};

sharkodlak.helper = sharkodlak.helper || {
    extends: function(child, parent) {
        var F = function(){};
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child._superClass = parent.prototype; // Parent class methods available to child
    },
    findProperty: function(haystack, needle) {
        for (var key in haystack) {
            if (haystack[key] == needle) {
                return key;
            }
        }
        
        return undefined;
    }
};