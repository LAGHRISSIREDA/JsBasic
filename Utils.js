// Noraml export
 const PI=3.14;

 function add(a,b){
    console.log('a+b:', a+b);
}

export {PI as PI,add}

export default function minus(a,b){
    return a-b;
}