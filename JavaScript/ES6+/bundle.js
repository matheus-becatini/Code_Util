"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var array = [1, 3, 4, 5, 6, 7];
console.log("O array inicial \xE9: ".concat(array));
console.log('Usando o MAP: '); //MAP (Percorre todo a estrutura de dados e executa alguma tarefa com cada item)

var newArray = array.map(function (item, index) {
  return "O item ".concat(index, " x2 = ").concat(item * 2);
});
console.log(newArray);
console.log('Usando o Reduce: '); //Retorna uma unica string 

console.log(newArray.reduce(function (acumulador, next) {
  return acumulador + ' ' + next;
})); //Reduce - reduz todo a estrutura de dados em um unico item

var soma = array.reduce(function (acumulador, prox) {
  return acumulador + prox;
});
console.log(soma);
console.log('Usando o Filter: '); //Filter - filtra todos os itens que satisfação o requisito

var arrFiltrado = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(arrFiltrado);
console.log('Usando o Find: '); //Find - encontra um item no array 

var numero3 = array.find(function (item) {
  return item === 3;
});
console.log(numero3);
console.log('--------------------------------------------------------------------'); //Desestruturação de objetos 
//Operador Rest 

console.log('Usando os operadores Rest e Spread');
var nome = 'Fulano';
var idade = 20;
var obj = {
  nome: nome,
  //usando o Object Short Syntax 
  idade: idade,
  // Para receber o valor de uma váriavel, basta apenas deixar o nome da váriavel como atributo
  endereco: {
    rua: 'Rua tal',
    numero: 100
  },
  caminhar: function caminhar() {
    return console.log('Caminhando ...');
  }
};

function mostrarInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      resto = _objectWithoutProperties(_ref, ["nome", "idade"]);

  console.log("".concat(nome, " tem ").concat(idade, " anos"));
  console.log("Mais informa\xE7\xF5es:");
  console.log(resto.endereco);
  resto.caminhar();
}

mostrarInfo(obj);

function receber() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  console.log(parametros);
}

receber(obj.nome, obj.idade); //Operador Spread

var obj2 = _objectSpread(_objectSpread({}, obj), {}, {
  pular: function pular() {
    return console.log('Pulando ...');
  },
  nome: 'outra pessoa'
});

mostrarInfo(obj2);
obj2.pular();
