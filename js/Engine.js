function Engine(canvasSelector) {
    var canvas = document.querySelector(canvasSelector);
    this.debug = false;
    this.gl = canvas.getContext('experimental-webgl');
    this.glTypes = {
        FRAGMENT_SHADER: this.gl.FRAGMENT_SHADER,
        VERTEX_SHADER: this.gl.VERTEX_SHADER
    };
}

Engine.prototype.glUrl = function(url, onload, onerror) {
    var settings = {
        onload: onload,
        onerror: onerror || console.log
    };
    new Ajax(url, settings);
};
Engine.prototype.log = function(data, type) {
    if (this.debug) {
        console.log(data + '\r\ntype:', type);
    }
};
Engine.prototype.logShader = function(data, shaderType) {
    var type = sharkodlak.helper.findProperty(this.glTypes, shaderType);
    this.log(data, type);
};
Engine.prototype.setFragmentShaderUrl = function(url) {
    return this.setShaderUrl(url, this.gl.FRAGMENT_SHADER);
};
Engine.prototype.setShaderUrl = function(url, shaderType) {
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
Engine.prototype.setVertexShaderUrl = function(url) {
    return this.setShaderUrl(url, this.gl.VERTEX_SHADER);
};
Engine.prototype.useProgram = function(vertexShader, fragmentShader) {
    var gl = this.gl;
    var program = gl.createProgram();
    //gl.attachShader(program, vertexShader);
    //gl.attachShader(program, fragmentShader);
    //gl.linkProgram(program);
    //gl.useProgram(program);
}