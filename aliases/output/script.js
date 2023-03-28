"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHellow = (user) => {
    console.log(`Hello ${user.age > 30 ? "Sir" : "Mr"} ${user.name}`);
};
const usrDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const syHlw = (user) => {
    console.log(`Hello ${user.age > 30 ? "Sir" : "Mr"} ${user.name}`);
};
userDetails(1, { name: "Anik", age: 14 });
sayHellow({ name: "Aubdur Rob", age: 15 });
usrDetails(2, { name: "Joy", age: 28 });
syHlw({ name: "Sarma", age: 29 });
