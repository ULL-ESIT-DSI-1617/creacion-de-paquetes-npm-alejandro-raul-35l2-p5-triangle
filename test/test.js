"use strict";

var Triangle = require('../lib/triangle.js');
let Shape = require('@ull-alejandro-raul-35l2/ull-shape');
require("should");

describe("getArea", function() {
  
  it("must compute the square shape area correctly", function(){
		let a = new Shape ({ width: 100, height: 50 }, 'Triangle');
		let s = a.getArea();
		s.should.equal(2500);
	});
  
  it("must compute the triangle area correctly. Triangle object", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.equal(2500);
  })
});
