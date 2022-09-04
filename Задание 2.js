// SF Задание 2.
let x = 'sd';
if (typeof x == 'number') {
    console.log('x is a number');
    alert('x is a number');
} else if (typeof x == 'boolean') {
    console.log('x is a bool');
    alert('x is bool');
} else if(typeof x == 'string') {
    console.log('x is a str');
    alert('x is a str');
} else {
    console.log('x is undefined'); 
    alert('x is undefined');
}