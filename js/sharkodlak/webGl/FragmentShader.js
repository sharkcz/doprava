'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.FragmentShader = sharkodlak.extends(
    function(source) {
        sharkodlak.webGl.Shader.call(this, source);
    },
    sharkodlak.webGl.Shader
);


sharkodlak.webGl.FragmentShader.prototype.getType = function(gl) {
    return gl.FRAGMENT_SHADER;
};
