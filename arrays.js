//javascript arrays are objects and they are resizible  it can be string ,number,boolean ,objects,arrays,or either it can be mixed .
//it collection of multiple elements in a single variable
//arrays cant be accesed using arbitary strings 
const arr=[2,3,4,5,6];
//accessing arrays
console.log(arr[2]);
//it gives shallpw copies shallow copies are copies that gives the same refernce

//methods in arrays 
//pushing data in arrays 
arr.push(4); //add elements in ararys by push methods
console.log(arr);
//reemoving the last value from the array
arr.pop();
console.log(arr);
//array unshifting 
arr.unshift(3);//add value to the first element
console.log(arr);
//removing the first elemnt from the array using shift method
arr.shift();
console.log(arr);
//comparing the data 
console.log(arr.includes(5));
//indexof 
console.log(`element index is ${arr.indexOf(4)}`);//i have used string interpolation 

