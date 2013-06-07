'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};


sharkodlak.abstractMethod = function() {
    throw new Error('Abstract method!');
};

sharkodlak.class = function(definition) {
    var constructor = definition.hasOwnProperty('constructor') ? definition.constructor : function(){};
    
    for (var name in sharkodlak.class.initializers) {
        sharkodlak.class.initializers[name].call(constructor, definition[name], definition);
    }
    
    return constructor;
};
sharkodlak.class.initializers = {
    Extends: function(parent) {
        if (parent) {
            sharkodlak.extends(this, parent);
        }
    },
    Mixins: function(mixins, def) {
        this.mixin = function(mixin) {
            for (var key in mixin) {
                if (!key in sharkodlak.class.initializers) {
                    this.prototype[key] = mixin[key];
                }
            }
        };
        var objects = [def].concat(mixins || []);
        
        for (var i = 0; i < objects.length; i++) {
            this.mixin(objects[i]);
        }
    }
};

sharkodlak.extends = function(child, parent) {
    var F = function(){};
    F.prototype = parent.prototype;
    child.prototype = new F;
    child.prototype.constructor = child;
    child._superClass = parent.prototype; // Parent class methods available to child
};

sharkodlak.findProperty = function(haystack, needle) {
    for (var key in haystack) {
        if (haystack[key] == needle) {
            return key;
        }
    }
    
    return undefined;
};