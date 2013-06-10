'use strict'; // JavaScript strict mode
var sharkodlak = sharkodlak || {};
sharkodlak.webGl = sharkodlak.webGl || {};


sharkodlak.webGl.Program = sharkodlak.extends(
    function(engine, fragmentShader, vertexShader, callback) {
        sharkodlak.patterns.Listener.call(this);
        this.engine = engine;
        this.fragmentShader = fragmentShader;
        this.vertexShader = vertexShader;
        this.callback = callback;
        
        fragmentShader.addListener(this);
        vertexShader.addListener(this);
    },
    sharkodlak.patterns.Listener
);


sharkodlak.webGl.Program.prototype.run = function() {
    if (this.fragmentShader.source && this.vertexShader.source) {
        var engine = this.engine;
        var fragmentShader = this.fragmentShader.getShader(engine);
        var vertexShader = this.vertexShader.getShader(engine);
        var gl = engine.gl;
        var program = gl.createProgram();
        
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(program));
        }
        
        this.callback(gl, program);
    }
};

sharkodlak.webGl.Program.prototype.update = function(event) {
    this.run();
};
