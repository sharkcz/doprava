var main = function(gl, program) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    var colors = [
        1.0, 0.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 0.0, 1.0
    ];
    colors.dimensions = 3;
    var vertices = [
        0.7, 0.7,
        0.7, -0.7,
        -0.5, 0
    ];
    vertices.dimensions = 2;
    var indices = [
        0, 1,
        1, 2,
        2, 0
    ];
    
    var colorBuffer = gl.createBuffer();
    var colorLocation = gl.getAttribLocation(program, 'color');
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    gl.vertexAttribPointer(colorLocation, colors.dimensions, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(colorLocation);
    
    var vertexBuffer = gl.createBuffer();
    var positionLocation = gl.getAttribLocation(program, 'position');
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.vertexAttribPointer(positionLocation, vertices.dimensions, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLocation);
    
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);
    gl.drawElements(gl.LINES, indices.length, gl.UNSIGNED_BYTE, 0);
};
