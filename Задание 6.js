// SF Задание 6.
let arr = [1, 3, 'sdf', 34, true];
let check = arr[0];
let flag = true;
for (let elem of arr) { //typeof ?
    if (check == elem) {
    check = elem;
    } else {
        flag = false;
    }
} 
if (flag == true){
    console.log(true);
} else {
    console.log(false);
} 
