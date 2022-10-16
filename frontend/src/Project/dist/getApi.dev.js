"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var chap = [];
var data = [];

var Request =
/*#__PURE__*/
function (_Component) {
  _inherits(Request, _Component);

  function Request() {
    _classCallCheck(this, Request);

    return _possibleConstructorReturn(this, _getPrototypeOf(Request).apply(this, arguments));
  }

  _createClass(Request, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var result;
      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get(this.props.url));

            case 2:
              result = _context.sent;
              chap.push(result.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.data;
    }
  }]);

  return Request;
}(_react.Component);

var _default = Request; // import React, { useState, useEffect } from "react";
// import { MathComponent } from "mathjax-react";
// import { Link } from "react-router-dom";
// import { Bisrection_receivedata } from "./rootofequation/Bisection";
// import { FalsePosition_receivedata } from "./rootofequation/FalsePosition";
// // import { Onepoint_receivedata } from "./rootofequation/Onepoint";
// // import { Newtonraphson_receivedata } from "./rootofequation/Newtonraphson";
// // import { SecantMethod_receivedata } from "./rootofequation/Secant";
// export default function Getapi() {
//   // var data = [];
//   const [data, setData] = useState([]);
//   const [items, setItems] = useState([]);
//   // const set = (result)=>{
//   //   fetch("http://127.0.0.1:8000/getQuations/"+result[i][0])
//   //               .then((res) => res.json())
//   //               .then((result2) => {
//   //                 setChapter(result2);
//   //                 console.log(result2);
//   //                 data[i]=chapter;
//   //                 i++;
//   //               });
//   //     });
//   // }
//   useEffect(() => {
//     fetch("http://localhost:8000/getChapter")
//       .then((res) => res.json())
//       .then((result) => {
//         result.map((row) => (console.log(row)))
//   }, []);})
//   return (
//     <div>
//       {/* {data[0].map((row) => (
//         <Link
//           to={"/Bisection"}
//           onClick={() =>
//             Bisrection_receivedata({
//               number: row.number,
//               root: row.root,
//             })
//           }
//         >
//           <MathComponent tex={String("^" + row.root + "\\sqrt" + row.number)} />
//         </Link>
//       ))} */}
//     </div>
//   );
// }

exports["default"] = _default;