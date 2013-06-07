'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.FragmentShader = sharkodlak.class({
    Extends: sharkodlak.webGl.Shader
});


sharkodlak.webGl.FragmentShader.prototype.getType = function(gl) {
    return gl.FRAGMENT_SHADER;
};
