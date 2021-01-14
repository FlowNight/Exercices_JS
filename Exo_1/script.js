let top = 6;
let bot = 2;

console.log("La variable top est égal à " + top);
console.log("La variable bot est égal à " + bot);

top = top + bot; // top(8) = top(6) + bot(2)
bot = top - bot; // bot(6) = top(8) - bot(2)
top = top - bot; // top(2) = top(8) - bot(6)

console.log("Le nouveau résultat de top est égal à " + top);
console.log("Le nouveau résultat de bot est égal à " + bot);

//------------------------------------------------------------------------------

let pseudo_1 = "Bertyn";
let pseudo_2 = "Alexis";
let stock = pseudo_2;



console.log("La variable pseudo_1 est égal à " + pseudo_1);
console.log("La variable pseudo_2 est égal à " + pseudo_2);

pseudo_2 = pseudo_1;
pseudo_1 = stock;


console.log("La nouvelle variable pseudo_1 est égal à " + pseudo_1);
console.log("La nouvelle variable pseudo_2 est égal à " + pseudo_2);

//------------------------------------------------------------------------------

let name_1 = "Rasta";
let name_2 = "Rebus";
let stack = name_2;

console.log("La variable name_1 est égal à " + name_1);
console.log("La variable name_2 est égal à " + name_2);

function name (name_1, name_2, stack) {
    name_2 = name_1;
    name_1 = stack;
};

console.log("La nouvelle variable name_1 est égal à " + name_1);
console.log("La nouvelle variable name_2 est égal à " + name_2);

// console.log("Hello World");

// console.log ("test");