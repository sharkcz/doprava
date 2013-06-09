'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.patterns = sharkodlak.patterns || {};


sharkodlak.patterns.Listenable = function() {
    this.listeners = [];
};


sharkodlak.patterns.Listenable.prototype.addListener = function(listener) {
    if (!listener instanceof sharkodlak.patterns.Listener) {
        throw new sharkodlak.errors.IllegalArgument('Argument listener have to be instance of sharkodlak.patterns.Listener!');
    }
    
    this.listeners.push(listener);
};

sharkodlak.patterns.Listenable.prototype.removeListener = function(listener) {
    return this.listeners.splice(this.listeners.indexOf(listener), 1);
};