/*for(let i=1; i<100; i++){
    console.log(i);
}
let i=0;
while(i<=5){
    console.log(i);
    i++;
} (odd numbers)*/
for(let i=1; i<=15;i++){
    if(i%2!=0){
        console.log(i);
        }
}
/* even numbers
for( let i=1; i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}
let f="salar";
let guess=prompt("guess my fav movie");
while(guess!=f){
    if(guess=="quit")
        break;
    guess=prompt("wrong ans enter again");
    }
    if(guess==f)
        console.log("congrats");
    else{
            console.log("welcome");
      }
      arr=[1,5,6,8,9];
      for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
      }
      for(num of arr){/*for of loop
        console.log(num);
      }
    for(char of "coding"){
        console.log(char);
    }
   arr=[[1,2,3],[4,5,6],[7,8,9]]
   for(rows of arr){
    for(col of rows){
        console.log(col);
    }
   }*/
  const person={
    name:"kaveri",
    age:20,
    qualification:"btech"
  };
  console.log(person);
  console.log(person["age"]);
  console.log(person["name"]);
  console.log(person["qualification"]);
  const obj={
    null:0,
    undefined:1,
    g:3,
    let:12
  }
  console.log(obj);
  console.log(obj.department="cse");
  obj["null"]=15;
  console.log(delete obj.null);
const students=[
    {name:"kaveri",age:20},
    {name:"papa",age:20},
    {name:"smarty",age:20}
];
console.log(students[0]);
console.log(students[0]["age"]);
console.log(students[0].age);
console.log(Math.PI);
console.log(Math.floor(3.977676));
console.log(Math.random()*10);
console.log(Math.ceil(Math.random()*6));
   
    
