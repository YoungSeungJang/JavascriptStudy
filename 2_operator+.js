// false: 0, -0, '', null, undefined
// true: -1, 'hello', [], 'false'
let num;    // undefined
if(num){
    console.log('ture!');
}else{
    console.log('false!');
}
num = 9;    // undefined
if(num){
    console.log('ture!');
}else{
    console.log('false!');
}
num && console.log(num);