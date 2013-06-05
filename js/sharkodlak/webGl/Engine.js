'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.Engine = function(canvasSelector) {
    var canvas = document.querySelector(canvasSelector);
    this.gl = canvas.getContext(sharkodlak.webGl.Engine.CONTEXT);
}


// Constants, static properties and static methods
sharkodlak.webGl.Engine.CONTEXT = 'experimental-webgl';


// Default properties
sharkodlak.webGl.Engine.prototype.debug = false;
/** Array of predefined GL Types.
 * @see http://www.khronos.org/registry/webgl/specs/1.0/
 */
sharkodlak.webGl.Engine.prototype.glTypes = {
    FRAGMENT_SHADER: 0x8B30,
    VERTEX_SHADER: 0x8B31
};


// Methods
sharkodlak.webGl.Engine.prototype.glUrl = function(url, onload, onerror) {
    var settings = {
        onload: onload,
        onerror: onerror || console.error
    };
    sharkodlak.ajax(url, settings);
};
sharkodlak.webGl.Engine.prototype.log = function(data, type) {
    if (this.debug) {
        console.debug('%c%s:\r\n%c%s', 'color: blue; font-weight: bold', type, 'color: inherit; font-weight: inherit', data);
    }
};
sharkodlak.webGl.Engine.prototype.logShader = function(data, shaderType) {
    var type = sharkodlak.helper.findProperty(this.glTypes, shaderType);
    this.log(data, type);
};
sharkodlak.webGl.Engine.prototype.setFragmentShaderUrl = function(url) {
    return this.setShaderUrl(url, this.gl.FRAGMENT_SHADER);
};
sharkodlak.webGl.Engine.prototype.setShaderUrl = function(url, shaderType) {
    var gl = this.gl;
    var engine = this;
    var shader = gl.createShader(shaderType);
    var onload = function(xhrEvent) {
        gl.shaderSource(shader, this.responseText);
        gl.compileShader(shader);
        engine.logShader(this.responseText, shaderType);
    }
    this.glUrl(url, onload);
    return shader;
};
sharkodlak.webGl.Engine.prototype.setVertexShaderUrl = function(url) {
    return this.setShaderUrl(url, this.gl.VERTEX_SHADER);
};
sharkodlak.webGl.Engine.prototype.useProgram = function(vertexShader, fragmentShader) {
    var gl = this.gl;
    var program = gl.createProgram();
    //gl.attachShader(program, vertexShader);
    //gl.attachShader(program, fragmentShader);
    //gl.linkProgram(program);
    //gl.useProgram(program);
};