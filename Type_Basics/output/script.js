"use strict";
let a = "aubdur rob Anik";
// error
// a = 34
let b = 6;
// error
// b = "anik"
// show error
// function multiply(a, b) {
//   console.log(a + b);
// }
// multiply("anik", "purnima");
function multiply(a, b) {
    console.log(a + b);
}
multiply(4, 6);
// error
// multiply("anik", "030");
let array = ["anik", "big", "banana"];
// error
// array.push(5);
let arr = ["anik", 4, true];
arr.push("hire");
arr.push(7);
arr.push(false);
// error
// arr.push({
//     name: "",
// })
console.log(arr);
let ar = [];
ar.push("Anik");
ar.push(0);
ar.push(true);
ar.push({
    name: "aubdur",
    age: 14,
    roll: 18101073,
});
console.log(ar);
let person = {
    name: "anik",
    age: 14,
    roll: 18101073,
};
// error
// person.roll = "Dj Anik"
// person.country = "Bangladesh";
