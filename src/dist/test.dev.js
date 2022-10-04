"use strict";

var _mathjs = require("mathjs");

var config = {};
var math = (0, _mathjs.create)(_mathjs.all, config);
var parser = math.parser();
console.log(parser.evaluate('a=5'));