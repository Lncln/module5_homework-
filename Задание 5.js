// SF Задание 5.
let arr = [1, 2, 42, 5];

// Вариант 1
console.log(arr.length, arr[0], arr[1], arr[2], arr[3]); //Неправильно?

// Вариант 2
let result = arr.map(function(item, index, array) {

    return item  

});
console.log(result); // Правильно?

// Вариант 3
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} //Правильно?

// Вариант 4
for (let elem of arr) {
    console.log(elem);
} //Правильно?