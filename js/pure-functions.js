
// The function always returns the same result if the same arguments are passed in.
//  It does not depend on any state, or data, change during a program’s execution.
// It must only depend on its input arguments.
// The function does not produce any observable side effects such as network requests, 
//input and output devices, or data mutation.
const add=(x,y)=>{
    return x+y;
}

// impure
const addRandowm=(x)=>{
    return Math.random() + x;
}

// impure it is effects outside function 
let result=0;
const addMoreNumber=(x,y)=>{
 result=1;
 return x+y;
}

// impure it is change array or object 
let h=[1,2,3]; 
const addToArray=(arr)=>{
   arr.push(4);
   return arr;
}
addToArray(h);