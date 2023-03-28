const userDetails = (
  id: string | number,
  user: { name: string; age: number }
) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHellow = (user: { name: string; age: number }) => {
  console.log(`Hello ${user.age > 30 ? "Sir" : "Mr"} ${user.name}`);
};

// type aliases
type StringOrNumber = string | number;
type userType = { name: string; age: number };

const usrDetails = (id: StringOrNumber, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const syHlw = (user: userType) => {
  console.log(`Hello ${user.age > 30 ? "Sir" : "Mr"} ${user.name}`);
};

userDetails(1, { name: "Anik", age: 14 });
sayHellow({ name: "Aubdur Rob", age: 15 });

usrDetails(2, { name: "Joy", age: 28 });
syHlw({ name: "Sarma", age: 29 });
