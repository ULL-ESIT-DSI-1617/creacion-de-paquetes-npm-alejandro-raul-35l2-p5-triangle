"use strict";

/**
 *Paquete npm de Triangle
 *https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-alejandro-raul-35l2-p5-triangle
 * 
 * Autor: Alejandro Díaz Cueca
 * 
 * 
 *
 * 
 * Team: alejandro-raul-35l2
 * 
 * Aquí creamos la clase Triangle que hereda de Shape
 * 
 * 
 * @class Triangle
 * @param {hash} options Ancho y Alto
 * 
 */
 
let Shape = require('@ull-alejandro-raul-35l2/ull-shape');

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    /** 
    * @function Area
    * @return {value} el valor del area del Triangle
    */
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
