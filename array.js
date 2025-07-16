let num1=["apple","mango","guava"];
let num2=["banana",1]
num2.push("orange");/* add element at end*/
num1.pop();/* remove element at end*/
console.log(num1);
num1.unshift();/* add at first*/
console.log(num1);
num2.shift();/* delete at first*/
console.log(num2);
console.log(num1.length);
console.log(num1[0][4]);
console.log(num1[1][4]);
console.log(num2);
console.log(num2.length);
console.log(num2[1]="orange");
console.log(num2.shift("orange"));
console.log(num1.includes("guava"));/* it say either the element is present or not*/
console.log(num1.concat(num2));/*merge arrays together*/
console.log(num1.reverse(num1));
console.log(num1.slice(1,2));
console.log(num2.splice(1,0,));/*remove/ insert the elements btw the arrays*/
num2.splice(1,2);
num2.splice(1,0,"papaya","grapes");
console.log(num2);
num3=[7,9,8,45,76,,3];
 const cars = ["Saab", "Volvo", "BMW"];
 console.log(cars);