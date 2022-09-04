// SF Задание 4.
let num = Math.random() * (101 - 0) + 0;
console.log(num);
alert(parseInt(num));

// проверка, что 100 выпадает
while (num < 100) {
    num = Math.random() * (101 - 0) + 0;
} 
console.log(num)
alert(parseInt(num));