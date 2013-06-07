'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.Engine = function(canvasSelector) {
    var canvas = document.querySelector(canvasSelector);
    this.gl = canvas.getContext(sharkodlak.webGl.Engine.CONTEXT);
    this.fragmentShader = null;
    this.vertexShader = null;
}


// Constants, static properties and static methods
sharkodlak.webGl.Engine.CONTEXT = 'experimental-webgl';

/** Array of predefined GL Types.
 * @see http://www.khronos.org/registry/webgl/specs/1.0/
 */
sharkodlak.webGl.Engine.glTypes = {
    FRAGMENT_SHADER: 0x8B30,
    VERTEX_SHADER: 0x8B31
};

sharkodlak.webGl.Engine.glUrl = function(url, onload, onerror) {
    var settings = {
        onload: onload,
        onerror: onerror || console.error
    };
    sharkodlak.ajax(url, settings);
};


// Default properties
sharkodlak.webGl.Engine.prototype.debug = false;


// Methods
sharkodlak.webGl.Engine.prototype.log = function(data, type) {
    if (this.debug) {
        console.debug('%c%s:\r\n%c%s', 'color: blue; font-weight: bold', type, 'color: inherit; font-weight: inherit', data);
    }
};
sharkodlak.webGl.Engine.prototype.useProgram = function(fragmentShader, vertexShader) {
    var gl = this.gl;
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader.getShader(this));
    gl.attachShader(program, fragmentShader.getShader(this));
    gl.linkProgram(program);
    gl.useProgram(program);
};