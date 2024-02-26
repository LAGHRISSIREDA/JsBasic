// import minus,{PI,add} from './Utils.js'
// let str = `my name is reda and i know that you want ti build this in our case`
// let check = str.toLocaleLowerCase().includes('reda');
// console.log('check:', check);
// let str1 = str.slice(0,2);
// let whiteSpace = '        test test         test3    '+str;
// console.log('whiteSpace:', whiteSpace);
// console.log('whiteSpace:', whiteSpace.trim());
// console.log('str1:', str1);


// create Object JS
// let obj = {
//     name : 'salesforce',
//     age : 23,
//     dob : '23/12/1944'
// }

// Object.keys
// console.log('Object.keys(obj):', Object.keys(obj));

// Object.value
// console.log('Object.values(obj):', Object.values(obj));

// // Stringify
// let str = JSON.stringify(obj);
// console.log('str:', str);
// console.log('JSON.parse(str):', JSON.parse(str));

// Map Function

// let arr = [1,2,3,4,5,45,56,34];
// let arr2 = arr.map((item)=> item*item);
// console.log('arr:', arr);
// console.log('arr2:', arr2);


//  let arr4 = arr.map(function(item,index,array){
//     console.log(`item ${item}, index : ${index}, Array : ${array}`);
//     return item*2;
// });

// console.log('arr:', arr);
// console.log('arr4:', arr4);

// let arr5 = arr.filter(function(item,index,array){
// return item>4;
// });

// console.log('arr:', arr);
// console.log('arr5:', arr5);

// Sorting Array in JS

// let stringArray = ['reda','samir','Ahlam','Karima'];
// console.log('Sorting Array : ',stringArray.sort());
// console.log('stringArray:', stringArray);

// let numberArray = [34,3,45,5,77,23,9];
// let newArray = numberArray.sort(function(a,b){
//     return a-b;
// })

// console.log('numberArray:', numberArray);
// console.log('newArray:', newArray);

// let numberArray = [100,2,5,6,7];
// let number = numberArray.reduce(function(total,item,index,array){
//     return total*item
// },1);

// console.log('number:', number);

// Foreach

// numberArray.forEach(element => {
//     console.log('element:', element);
// });


// check is success
// function checkIsSuccess(data){
//     return new Promise(function(resolve,reject){
//         if(data === 'success'){
//             return resolve('Successfully Executed');
//         }else{
//             return reject('Unsuccessfully Executed');
//         }
//     })
// }

// checkIsSuccess('').then(function(result){
//     console.log('result:', result);
// }).catch(function(error){
//     console.error('error:', error);
// })

// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(function(result){
//     console.log('result:', result);
//     return result.json();
// }).then(function(response){
//     console.log('response:', response);
// })





// console.log('PI:'+ PI);
// console.log('minus:', minus(5,4));

import * as Utils from './Utils.js'

console.log(Utils.PI);