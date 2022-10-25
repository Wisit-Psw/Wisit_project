var X = [[10, 15, 20, 30, 40, 50, 60, 70, 80]];
var Y = [[5, 9, 15, 18, 22, 30, 35, 38, 43]];
Least_squares = (X, Y,M, num) => {
    var A = [];
    var B = [];
    const expo = (mat, expo) => {
        var exposum = [];
        for (var i = 0; i < mat.length; i++) {
            exposum.push(mat[i] ** expo);
        }
        return exposum;
    }
    for (var i = 2; i <= M; i++) {
        X.push(expo(X[0],i));
    }
    for (var i = 0; i <= X.length; i++) {
      A.push([]);
      B.push([]);
      for (var j = 0; j <= X.length; j++) {
        A[i].push(0);
      }
      B[i].push(0);
    }
    const sum = (mat) => {
      var sum = 0;
      for (var i = 0; i < mat.length; i++) {
        sum += mat[i];
      }
      return sum;
    };
    const summultipy = (mat1, mat2) => {
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
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        multivar = A[j][i];
        if (i + 1 <= A.length) {
          for (let k = 0; k < A.length; k++) {
            x = A[j][k] - (A[i][k] / A[i][i]) * multivar;
            A[j][k] = x;
          }
          y = B[j][0] - (B[i][0] / A[i][i]) * multivar;
          B[j][0] = y;
        }
      }
    }
    a = [];
    for (let j = 0; j < A.length; j++) {
      a.push(null);
    }
    for (let i = A.length - 1; i >= 0; i--) {
      ans = 0;
      for (let j = A.length - 1; j >= 0; j--) {
        if (a[j] != null && A[i][j] != 0) {
          B[i][0] = B[i][0] - A[i][j] * a[j];
        } else if (A[i][j] != 0) {
          ans += B[i][0] / A[i][j];
        }
      }
      a[i] = ans;
    }
    for (let j = 0; j < A.length; j++) {
      console.log("a" + String(j) + " = " + String(a[j]));
    }
    printmat = (mat) => {
      var strmqt = "[";
      for (let i = 0; i < mat.length; i++) {
        strmqt += "[";
        for (let j = 0; j < mat[0].length; j++) {
          strmqt += "" + mat[i][j];
          if (j < mat[0].length - 1) {
            strmqt += ",";
          }
        }
        strmqt += "]";
        if (i < mat.length - 1) {
          strmqt += ",";
        }
      }
      strmqt += "]";
      console.log(strmqt);
    };
    ans = 0;
    for (let j = 0; j < a.length; j++) {
        ans += a[j] * (num**j);
    }
    return ans;
  };
  console.log(Least_squares(X, Y,2, 65));
  