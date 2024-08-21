//2. При помощи цикла for выведите чётные числа от 2 до 10
// for(let i = 2; i <= 10; i+=2){
//     console.log(i)
// }
// console.log('------------------------------------')
// for (let i = 2; i <= 10; i ++) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
// }



//============ is number a prime number =================
/**3. Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его 
делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
 */
//1)
//  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20]
// //let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let isPrime = ''
// //let primeNumbers = []
// let primeNumbers = ''
// for (let i = 1; i < num.length; i++) {
//     if (num[i] == 1) {
//         isPrime = num[i] + " is not prime"
//     }
//     else if (num[i] % 2 === 0 && num[i] != 2) {
//         isPrime = i + " is not prime"
//     }
//     else if (num[i] != 3 && num[i] % 3 === 0) {
//         isPrime = i + " is not prime"
//     }
//     else if (num[i] != 5 && num[i] % 5 === 0) {
//         isPrime = i + " is not prime"
//     }
//     else if (num[i] != 7 && num[i] % 7 === 0) {
//         isPrime = num[i] + " is not prime"
//     }
//     else {
//         isPrime = '         ' + num[i] + " is prime"
//         primeNumbers = primeNumbers + num[i] + ' '

//     }
//      console.log(isPrime)
//  }
// console.log("These are: ", primeNumbers)


// 2) inner loop example for this problem
// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { //go through all numbers

//     for (let j = 2; j < i; j++) { // check
//         if (i % j == 0) continue nextPrime; // if no, go to next
//     }
// // 2, 3, 4, 5, 6, 7, 8, 9, 10
//     console.log(i);
// }




/**
 * =================4.Задача на смекалку===============================
 Имеется зашифрованное предложение 
 “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
 мы знаем, что оно означает “You are the best QA ever”.
 Нам нужно придумать программу дешифратор.
 */
//coder
// let text = "You are the best QA ever"
// let newText = ''
// let count = 0
// for (let i = 0; i < text.length; i++) {

//     if (count % 2 == 0) {
//         newText = newText + text[i] + "br"
//     }
//     count += 2
// }
// console.log(newText)

// //decoder
// let text2 = ''
// for (let i = 0; i < newText.length; i += 3) {

//     text2 = text2 + newText[i]

// }
// console.log(text2)

/**
 * ================ 5.Задачка посложнее* =============================
  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему
 */

// let message = 'Work smarter, not harder! Be on time'
// let keyWord = "Today will be a good day!"
// let encriptedMessage = ''
// let countE = 0
// let countI = 0
// for (let i = 0; i < message.length; i++) {

//     for ( let e = 0; e < keyWord.length; e++) {

//         if( i == e)   {
//             encriptedMessage = encriptedMessage + message[i] + keyWord[e]
//             keyWord += keyWord[e]
//         }
//     }   
// }
// console.log(keyWord)
// console.log(encriptedMessage)


// let decriptedMessage = ''
// for (let i = 0; i < encriptedMessage.length; i+=2) {
//     decriptedMessage = decriptedMessage + encriptedMessage[i] 
// }
// console.log(decriptedMessage)


// //================ inner loop work example================
// let keyWord2 = "+++"
// let message2 = 'Work smarter, not harder!Be on time'
// let encriptedMessage2 = ''
// let countE = 0
// let countI = 0
// for (let i = 0; i < message2.length; i++) {

//     for (let e = 0; e < keyWord2.length; e++) {
        
//             encriptedMessage2 = encriptedMessage2 + message2[i] + keyWord2[e]
        
//         //else { encriptedMessage = encriptedMessage + message[i] + keyWord[e+1] }
//         countE++
//     }
//     countI++
// }
// console.log(countI, countE)
// console.log(encriptedMessage2)

//decoder
// let str2 = ''
// for (let i = 0; i < newText.length; i += 3) {

//     text2 = text2 + newText[i]

// }
// console.log(text2)

//================ 6. Задача с интервью*====================================

//У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] ,
//количество элементов и последовательность может быть разной.
//Нужно выяснить, у каждой ли скобки есть соответствующая пара(открывающая и закрывающая).

let sum1 = 0
let sum2 = 0

//let str = ['(', ')', '(', ')', ')']
let str = ['(', ')', '(', ')', ')', '(',  '(',  ')', 2, 'a']
for (let i = 0; i < str.length; i++) {

    if (str[i] == '(') {
        sum1 += 1
    }
    else if (str[i] == ')') {
        sum2 += 1
    }
}
console.log('openning = ' + sum1 + ', closing = ' + sum2)

if (sum1 == sum2) {
    console.log('equal')
}
else console.log('not equal')





// let arr = []
// arr[0]= 5
// console.log(arr)

