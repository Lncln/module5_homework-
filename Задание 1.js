// SF Задание 1.
let input = prompt('Введите цифру');
let check = +input;
if (!(typeof check == 'number') || isNaN(check)) {
    alert('Enter a number');
    console.log('Enter a number');
} else if (check % 2 == 0) {
    console.log('Even');
    alert('Even');
} else {
    console.log('Odd');
    alert('Odd');
}
// Infinity/-Infinity = Odd 