console.log("test");

let stringVar = "Hello World!";
console.log(typeof stringVar);

let numVar = 404808;
console.log(typeof numVar);

let booleanVar = true;
console.log(typeof booleanVar);

let fruits = ["banana", "apple", "cherry", "orange"];
console.log(typeof fruits);

let faveCar = {
  name: "Audi",
  year: 2024,
  gearBox: "manual",
};

console.log(typeof faveCar);

let rezultat;
let prvSc;

{
  prvSc = 5;
  let vtorSc;
  let tretSc;
  {
    vtorSc = 5;
    rezultat = prvSc + vtorSc + tretSc;
    console.log(rezultat);
    {
      tretSc = 5;
    }
  }
}
