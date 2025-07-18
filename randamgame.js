/*let n=prompt("enter a max value")
let random=Math.ceil(Math.random()*n);
let guess=prompt("enter a number");
while(true){
    if(guess!=random){
        guess=prompt("wrong guess again");
    }
    if(guess==random){
        console.log("congrats");
        break;
    }
    if(guess=="quit"){
        console.log("your quit");
        break;
    }
}
/*let n=prompt("enter a max value")
let random=Math.ceil(Math.random()*n);
let guess=prompt("enter a number");
while(true){
    if(guess>random){
        guess=prompt("guess is big guess again");
    }
    else if(guess==random){
        console.log("congrats");
        break;
    }
    else if(guess<random){
        guess=prompt("guess is small guess again");
    }
    if(guess=="quit"){
        console.log("your quit");
        break;
    }
}
function myfun(a,b){ /*write a function to concatenate the elements of array
    return a+b;
}
console.log(myfun(2,4));
let result=" "
function str(arr){
    for(let i=0;i<arr.length;i++){
        result+=arr[i]+" ";
    }
    return result;
}
let arr=["Hello","Every","One"];
console.log(str(arr));*/
let x=8;/*global scope*/
function myfun(){
    let y=4;/* function scope*/
    console.log(y);
    console.log(x);
}
myfun();
console.log(x);
console.log(y);
