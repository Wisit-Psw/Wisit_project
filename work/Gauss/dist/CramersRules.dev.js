"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

num_of_var = 3;
metrics = [[-2, 3, 1], [3, 4, -5], [1, -2, 1]];
metans = [[9], [0], [-4]];

var det = function det(met) {
  determinant = 0;

  for (var k = 0; k < met.length; k++) {
    multipy = 1;

    for (var l = 0; l < met.length; l++) {
      index = k + l;

      if (index > met.length - 1) {
        index -= met.length;
      }

      multipy *= met[l][index]; //console.log(l,index,met[l][index]);
    }

    determinant += multipy;
  } //console.log("--------------------------------");


  for (var _k = 2; _k < met.length * 2 - 1; _k++) {
    multipy = 1;

    for (var _l = 2; _l >= 0; _l--) {
      index = _k - _l;

      if (index > met.length - 1) {
        index -= met.length;
      }

      if (index < 0) {
        index += met.lengt - 1;
      }

      multipy *= met[index][_l]; //console.log(met[index][l]);
      //console.log(index,l,met[index][l]);
    }

    determinant -= multipy;
  }

  return determinant;
};

var copymetrics = function copymetrics(met) {
  copymet = [];

  for (var i = 0; i < met.length; i++) {
    copymet.push([]);
  }

  for (var _i = 0; _i < met.length; _i++) {
    copymet[_i] = _toConsumableArray(metrics[_i]);
  }

  return copymet;
}; //console.log( det(metrics));


for (var i = 0; i < num_of_var; i++) {
  cramermet = copymetrics(metrics);

  for (var j = 0; j < num_of_var; j++) {
    cramermet[j][i] = metans[j][0];
  }

  console.log("x" + String(i + 1) + " = " + String(det(cramermet) / det(metrics)));
}