let myFunc: Function;

myFunc = () => {
  console.log("Aubdur Rob Anik");
};

myFunc();

const func1 = (a: string, b: string) => {
  console.log(`Hello ${a} and ${b}`);
};

func1("anik", "sourov");

// error
// func1(3, 4);
// func1(true, 4);

// optional function perameter
const func2 = (a: string, b: string, c?: string) => {
  console.log("C : ", c);
  console.log(`${a} and ${b}`);
};

func2("banana", "apple");

// return undefined
const func3 = (a: string, b: string, c: string = "alu") => {
  console.log("C : ", c);
  console.log(a, " and ", b);
  return undefined;
};

func3("apple", "frutika");
func3("apple", "frutika", "Banana");

// expline return type
const func4 = (a: string, b: string) => {
  return a + b;
};

console.log(func4("Aubdur Rob ", "Anik"));

const func5 = (a: string, b: string): string => {
  return a + b;
};

console.log(func5("Khil", "gaon"));

// error
// const func6 = (a: string, b: string): number => {
//     return a + b;
// };
