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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nvar array = [1, 3, 4, 5, 6, 7];\nconsole.log(\"O array inicial \\xE9: \".concat(array));\nconsole.log('Usando o MAP: '); //MAP (Percorre todo a estrutura de dados e executa alguma tarefa com cada item)\n\nvar newArray = array.map(function (item, index) {\n  return \"O item \".concat(index, \" x2 = \").concat(item * 2);\n});\nconsole.log(newArray);\nconsole.log('Usando o Reduce: '); //Retorna uma unica string \n\nconsole.log(newArray.reduce(function (acumulador, next) {\n  return acumulador + ' ' + next;\n})); //Reduce - reduz todo a estrutura de dados em um unico item\n\nvar soma = array.reduce(function (acumulador, prox) {\n  return acumulador + prox;\n});\nconsole.log(soma);\nconsole.log('Usando o Filter: '); //Filter - filtra todos os itens que satisfação o requisito\n\nvar arrFiltrado = array.filter(function (item) {\n  return item % 2 === 0;\n});\nconsole.log(arrFiltrado);\nconsole.log('Usando o Find: '); //Find - encontra um item no array \n\nvar numero3 = array.find(function (item) {\n  return item === 3;\n});\nconsole.log(numero3);\nconsole.log('--------------------------------------------------------------------'); //Desestruturação de objetos \n//Operador Rest \n\nconsole.log('Usando os operadores Rest e Spread');\nvar nome = 'Fulano';\nvar idade = 20;\nvar obj = {\n  nome: nome,\n  //usando o Object Short Syntax \n  idade: idade,\n  // Para receber o valor de uma váriavel, basta apenas deixar o nome da váriavel como atributo\n  endereco: {\n    rua: 'Rua tal',\n    numero: 100\n  },\n  caminhar: function caminhar() {\n    return console.log('Caminhando ...');\n  }\n};\n\nfunction mostrarInfo(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade,\n      resto = _objectWithoutProperties(_ref, [\"nome\", \"idade\"]);\n\n  console.log(\"\".concat(nome, \" tem \").concat(idade, \" anos\"));\n  console.log(\"Mais informa\\xE7\\xF5es:\");\n  console.log(resto.endereco);\n  resto.caminhar();\n}\n\nmostrarInfo(obj);\n\nfunction receber() {\n  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {\n    parametros[_key] = arguments[_key];\n  }\n\n  console.log(parametros);\n}\n\nreceber(obj.nome, obj.idade); //Operador Spread\n\nvar obj2 = _objectSpread(_objectSpread({}, obj), {}, {\n  pular: function pular() {\n    return console.log('Pulando ...');\n  },\n  nome: 'outra pessoa'\n});\n\nmostrarInfo(obj2);\nobj2.pular();\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });