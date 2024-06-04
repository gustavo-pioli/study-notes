//"Print"
console.log("Hello World");

let person = {
  name: "Mosh",
  age: 30,
};

// Dot Notation
person.name = "John";

console.log(person.name);

// Bracket Notation
persona["name"] = "Mary";

console.log(person.name);

// Performing a task
function greet(name, lastName) {
  console.log("Hello" + name + " " + lastName);
}

//Calculating a values
function square(number) {
  return number * number;
}

greet("John", "Smith");

let number = square(2);
console.log(number);

// Strict Equality
console.log(1 === 1); //true
console.log("1" === 1); //false

// Lose Equality
console.log(1 == 1); //true
console.log("1" == 1); //true

//Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting (executa da esquerda pra direita e o que completar
// os requisitos primeiro é retornado)

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor || 2;

console.log(currentColor); //blue

// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// AND = 00000000

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Implementacao util dos Bitwise (START)

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission; //Adiciona a permissao de escrita

let message = myPermission & readPermission ? "yes" : "no"; // Verifica se tenho permissao de leitura

console.log(message);

// END

// for-in
const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) console.log(key, person[key]); // name Mosh, age 30

//for-of
const colors = ["red", "green", "blue"];

for (let color of colors) console.log(color); // red, green, blue

// Objetos
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
  move: function () {
    console.log("move");
  },
};

circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Function
function Circle(radius) {
  this.radiuws = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);

const circle4 = {
  radius: 1,
};

// circle = {}; // ERRO

circle4.color = "yellow";
circle4.draw = function () {};

delete circle4.color;
delete circle4.draw;

console.log(circle4);

//Value vs Reference
let x = { value: 10 };
let y = x;

//y recebeu a mesma referencia de x, portanto terá o valor 11 apos increase
function increase(number) {
  number.value++;
}

increase(x);
console.log(y);

// Enumerating Properties of an Object
for (let entry of Object.entries(circle)) // Mostra key e depois valor (um em cada linha)
  console.log(entry);

// Cloning an Object

const another = Object.assign(
  {
    color: "yellow",
  },
  circle
); // Copia as propriedades e valores do objeto circle e atribui a another com a adição de color

console.log(another);

const another2 = { ...circle };
console.log(another2);

// Template Literals
const messageTemplate = `Hi John,
I need that report for yesterday, please hurry

your friend,

Robert`;

console.log(messageTemplate);

// Date
const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9); // Meses de 0 a 11

now.setFullYear(2017);

// String
// Adding elementes

const numbers = [3, 4];

//End
numbers.push(5, 6);

// Begining
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, "a", "b"); // Posicao onde vao ser colocados, quantos itens serao deletados, valores a serem adicionados

console.log(numbers);

// Finding elementes References
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  // Declare a função usada para encontrar o objeto
  return course.name === "a";
});

console.log(course);

// Arrow Functions
const course2 = courses.findIndex((course) => course.name === "a"); // course é parametro, use () caso não seja necessario

console.log(course2);

// Removing Elements
const numbers2 = [1, 2, 3, 4];

// End
const last = number2.pop();

// Beginning
const first = number2.shift();

// Middle
numbers2.splice(2, 2); // Remove 2 a partir da posicao 2
console.log(numbers2);

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];

const combined = firstArr.concat(secondArr);
const combined2 = [...firstArr, ...secondArr];

const slice = combined.slice(2, 4); // Array com apenas os elementos entre a segunda e quarta posicao de combined
const copy = [...combined];

// Iterating an Array
copy.forEach((element) => console.log(element));

// Joining Arrays

let num = [1, 2, 3];
let joined = num.join(","); // Junta os elementos utilizando ',' entre eles

let messages = "This is my first message";
let parts = messages.split(" ");
console.log(parts);

let comb = parts.join("-");
console.log(comb); // This-is-my-first-message

// Sorting Arrays
let objects = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

objects.sort(function (a, b) {
  // Declare funcao utilizada para ordenar (-1 para menor, 1 para maior e 0 para igual)
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(objects);

// Testing the elements of an Array
num = [1, -1, 2, 3];

// Métodos novos do javaScript que podem não estar presentes em browsers antigos
let atLeastOnePositive = num.some(function (value) {
  //Pelo menos um encaixa no criterio estabelecido pela funcao
  return value >= 0;
});

let allPositive = num.every(function (value) {
  // Todos os elementes se encaixam no criterio estabelecido pela funcao
  return value >= 0; // Pára quando retornar false pelo menos uma vez
});

// Filtering an Array
let filtered = num.filter((value) => value >= 0); // Adiciona em filtered quem se encaixar no criterio >= 0

// Mapping an Array
let items = filtered.map((n) => "<li>" + n + "</li>"); // Realiza uma funcao para cada elemento do array

// Coloca-se parenteses na arrow function para as chaves não serem interpretadas como um code block e sim um objeto
let items2 = filtered.map((n) => ({ value: n })); // Exemplo de transformacao dos elemntos do array em objetos

// Outra maneira de escrever
// Chaining Methods
items = num.filter((n) => (n) => 0).map((n) => ({ value: n }));

console.log(items);

// Reducing na Array
num = [1, -1, 2, 3];

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
// Funcao converte todos os elementos do array em um unico elemento
sum = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 // 0 é o valor inicial do accumulator
);

console.log(sum);

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
sum = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue // Sem um valor inicial o accumulator recebera o valor do primeiro elemento
);

console.log(sum);
