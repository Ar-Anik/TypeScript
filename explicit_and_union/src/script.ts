let a;

// Not show error
a = "aubdur rob anik";
a = 4;
a = true;
a = 3.23;

let b: string;

b = "aubdur rob anik";

//  error
// b = 5
// b = true

let c: number;

// error
// c = "anik"

let ar: number[] = [];

ar.push(1);
ar.push(2);
ar.push(3);
// error
// ar.push("anik");
console.log(ar);

// union
let arr: (string | number)[] = [];

arr.push(100);
arr.push(200);
arr.push("anik");
arr.push("sumit");
// error
// arr.push(true);
// arr.push("anik", 404, true);
console.log(arr);

let d: boolean | number;

d = 1;
d = true;

console.log(d);

let obj = {};

obj = {
  name: "aubdur rob anik",
  roll: 18101073,
  age: 14,
};

console.log(obj);

let obj1: {
  name: string;
  age: number;
  adult: boolean;
};

// error
// obj1 = []

obj1 = {
  name: "aubdur rob anik",
  // error
  // age: "aj"
  age: 14,
  adult: true,
};

obj1.adult = false;
// obj1.adult = 'true';
console.log(obj1);

let e: object;

e = [1, 2, 3, 4.5];
console.log(e);
