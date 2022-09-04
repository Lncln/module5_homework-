// SF Задание 7.
let arr = [1, 2, 42, 5, null, NaN, 'asdf', true, Infinity, undefined];
let arrEven = [];
let arrOdd = [];
let arrOther = [];
for (let elem of arr) {
    if ((typeof elem !== 'number') || isNaN(elem) || elem == null || elem == Infinity || elem == -Infinity) {
        arrOther.push(elem);
    } else if (elem % 2 === 0) {
        arrEven.push(elem);
    } else if (elem % 2 !== 0) {
        arrOdd.push(elem);
    }
}
console.log(arrEven.length, arrOdd.length);
// console.log(arrEven, arrOdd);