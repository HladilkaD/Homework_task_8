//Створити масив, довжину та елементи якого задає користувач.
//Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const myArr = [];
do {
  req = prompt("Введіть елемент масиву")
    myArr.push(+req || req)
} while (req !== null);
myArr.pop();
document.write(myArr);
alert("Сформрвано масив");
myArr.sort(function(a,b){
    return(a-b)
});
document.write("<br>"+myArr);
alert("Відсортировано масив");
myArr.splice(1,3);
document.write("<br>"+myArr);
alert("Видалено елементи з масиву з 2 по 4 (включно!)");
console.log(myArr);