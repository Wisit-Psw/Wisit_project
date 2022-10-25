"use strict";

// var X = [[10, 15, 20, 30, 40, 50, 60, 70, 80]];
// var Y = [[5, 9, 15, 18, 22, 30, 35, 38, 43]];
var X = [[1, 0, 2, 3, 4, 2, 1], [0, 1, 4, 2, 1, 3, 6], [1, 3, 1, 2, 5, 3, 4]];
var Y = [[4, -5, -6, 0, -1, -7, -20]];

Least_squares = function Least_squares(X, Y, num) {
  var A = [];
  var B = [];

  for (var i = 0; i <= X.length; i++) {
    A.push([]);
    B.push([]);

    for (var j = 0; j <= X.length; j++) {
      A[i].push(0);
    }

    B[i].push(0);
  }

  var sum = function sum(mat) {
    var sum = 0;

    for (var i = 0; i < mat.length; i++) {
      sum += mat[i];
    }

    return sum;
  };

  var summultipy = function summultipy(mat1, mat2) {
    var sum = 0;

    for (var i = 0; i < mat1.length; i++) {
      sum += mat1[i] * mat2[i];
    }

    return sum;
  };

  for (var i = 0; i < A.length; i++) {
    for (var j = i; j < A.length; j++) {
      if (i == 0 && j == 0) {
        A[i][j] = X[0].length;
      }

      if (i == j && i != 0) {
        A[i][j] = summultipy(X[i - 1], X[i - 1]);
      }

      if (i == 0 && j != 0) {
        A[i][j] = sum(X[j - 1]);
        A[j][i] = sum(X[j - 1]);
      }

      if (i != j && i != 0 && j != 0) {
        A[i][j] = summultipy(X[i - 1], X[j - 1]);
        A[j][i] = summultipy(X[i - 1], X[j - 1]);
      }
    }

    if (i == 0) {
      B[i][0] = sum(Y[0]);
    } else {
      B[i][0] = summultipy(X[i - 1], Y[0]);
    }
  }

  for (var _i = 0; _i < A.length; _i++) {
    for (var _j = _i + 1; _j < A.length; _j++) {
      multivar = A[_j][_i];

      if (_i + 1 <= A.length) {
        for (var k = 0; k < A.length; k++) {
          x = A[_j][k] - A[_i][k] / A[_i][_i] * multivar;
          A[_j][k] = x;
        }

        y = B[_j][0] - B[_i][0] / A[_i][_i] * multivar;
        B[_j][0] = y;
      }
    }
  }

  a = [];

  for (var _j2 = 0; _j2 < A.length; _j2++) {
    a.push(null);
  }

  for (var _i2 = A.length - 1; _i2 >= 0; _i2--) {
    ans = 0;

    for (var _j3 = A.length - 1; _j3 >= 0; _j3--) {
      if (a[_j3] != null && A[_i2][_j3] != 0) {
        B[_i2][0] = B[_i2][0] - A[_i2][_j3] * a[_j3];
      } else if (A[_i2][_j3] != 0) {
        ans += B[_i2][0] / A[_i2][_j3];
      }
    }

    a[_i2] = ans;
  }

  for (var _j4 = 0; _j4 < A.length; _j4++) {
    console.log("a" + String(_j4) + " = " + String(a[_j4]));
  }

  printmat = function printmat(mat) {
    var strmqt = "[";

    for (var _i3 = 0; _i3 < mat.length; _i3++) {
      strmqt += "[";

      for (var _j5 = 0; _j5 < mat[0].length; _j5++) {
        strmqt += "" + mat[_i3][_j5];

        if (_j5 < mat[0].length - 1) {
          strmqt += ",";
        }
      }

      strmqt += "]";

      if (_i3 < mat.length - 1) {
        strmqt += ",";
      }
    }

    strmqt += "]";
    console.log(strmqt);
  };

  ans = 0;

  for (var _j6 = 0; _j6 < a.length; _j6++) {
    if (_j6 == 0) {
      ans += a[_j6];
    } else {
      ans += a[_j6] * num;
    }
  }

  return ans;
};

console.log(Least_squares(X, Y, 65));