'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.VertexShader = sharkodlak.extends(
    function(source) {
        sharkodlak.webGl.Shader.call(this, source);
    },
    sharkodlak.webGl.Shader
);


sharkodlak.webGl.VertexShader.prototype.getType = function(gl) {
    return gl.VERTEX_SHADER;
};
