'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.Shader = function(source) {
    this.source = source;
}


sharkodlak.webGl.Shader.prototype.getShader = function(engine) {
    var gl = engine.gl;
    var type = this.getType(gl);
    var shader = gl.createShader(type);
    gl.shaderSource(shader, this.source);
    gl.compileShader(shader);
    this.log(engine, type);
    return shader;
};

sharkodlak.webGl.Shader.prototype.getType = sharkodlak.abstractMethod;

sharkodlak.webGl.Shader.prototype.log = function(engine, type) {
    var type = sharkodlak.findProperty(sharkodlak.webGl.Engine.glTypes, type);
    engine.log(this.source, type);
};

sharkodlak.webGl.Shader.prototype.setSourceUrl = function(url) {
    var shader = this;
    var onload = function(xhrEvent) {
        shader.source = this.responseText;
    }
    return sharkodlak.webGl.Engine.glUrl(url, onload);
};
