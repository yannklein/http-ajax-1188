/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select elements (button)
// const button = document.querySelector("#click-me");

// // 2. Listen to a click on the button
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM (disable, change the text)
//   event.currentTarget.disabled = true;
//   event.currentTarget.innerText = "Loading...";
// });

// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements (input, button, list)
console.log("Start of the JS");
var input = document.querySelector("#keyword");
var button = document.querySelector("#submit");
var results = document.querySelector("#results");

// 2. Listen to a click on button
button.addEventListener("click", function (event) {
  // console.log(event);
  console.log("button clicked");
  event.preventDefault();
  // 2.5 Fetch data from OMDBAPI
  var keyword = input.value;
  var url = "https://www.omdbapi.com/?s=".concat(keyword, "&apikey=adf1f2d7");
  // const results = fetch(url) DOESNT WORK
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log("data arrives");
    // console.log(data.Search);
    var movies = data.Search;
    // 3. Change the DOM (show data on list)
    results.innerHTML = "";
    movies.forEach(function (movie) {
      results.insertAdjacentHTML("beforeend", "\n          <li class='list-inline-item'>\n            <img src=\"".concat(movie.Poster, "\" alt=\"\" />\n            <p>").concat(movie.Title, "</p>\n          </li>\n        "));
    });
  });
  console.log("after the fetch");
});

// //////////////////////
// HTTP POST request
// //////////////////////

var signUp = function signUp(event) {
  event.preventDefault();
  var emailValue = document.getElementById("email").value;
  var passwordValue = document.getElementById("password").value;
  var data = {
    "email": emailValue,
    "password": passwordValue
  };
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  var url = "https://reqres.in/api/register";
  fetch(url, options).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });
};
var form = document.querySelector("#form");
form.addEventListener("submit", signUp);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map