let number = +prompt("Введите число")
let result = number*0.1
console.log(result)

let number1= +prompt("Input number 1")
let number2= +prompt("Input mumber 2")
if(number1<number2) {
    alert(number1)
    } else alert(number2)

const number= +prompt("Введите число")
if(number>100) {
    console.log("Чтсло больше 100")
    } else if(number<100) {
        console.log("Число меньше 100")
        } else console.log("Число равно 100")

let userName= prompt("Введите ваше имя")
let userAge= +prompt("Введите ваш возраст")
if(userAge>18) {
    console.log("Hello, "+ userName)
    } else console.log("Hi, " + userName)