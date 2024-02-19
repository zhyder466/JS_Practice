arr = ['apple','banana','grapes','orange','chiku','turnip','fruiter']

for(i in arr){
    console.log(arr[i])
}
console.log('\n')
arr.push('guava') //push()

for(i in arr){
    console.log(arr[i])
}

arr.pop() //Pop()
console.log('\n')

for(i in arr){
    console.log(arr[i])
}
console.log('\n')

console.log(arr.shift()) //shift()

console.log('\n')

for(i in arr){
    console.log(arr[i])
}

arr.unshift('apple') //unshift()
console.log('\n')

for(i in arr){
    console.log(arr[i])
}

arr2 = ['Gobi','potato','tomato','onion']

arr3 = arr.concat(arr2) //concat
console.log('\n')

for(i in arr3){
    console.log(arr3[i])
}

arr4 = arr3.slice(1,3) //slice
console.log('\n')

for(i in arr4){
    console.log(arr4[i])
}

arr5 = arr3.splice(2,2) //splice, changes the original array

console.log('\n')

for(i in arr5){
    console.log(arr5[i])
}

console.log('\n')

for(i in arr3){
    console.log(arr3[i])
}

console.log(arr.includes('banana'))// returns true/false if element is present in array

var myDict= {
    "name": "Ahsan Qadri",
    'Cms': "021-21-0016",
    "Age" : "23",
    "Address": "House no 1263, shorai street, old sukkur"
}

console.log(Object.keys(myDict))
console.log(Object.values(myDict))

add = (n,m) => n+m //arrow ftns

console.log(add(5,6))

const greet = function(name) { return "Hello, "+name+""}; //anonymous ftns
console.log(greet("Hyder"))

const numbers = [1, 2, 3, 4, 5];


// const squared = numbers.map(function(num){
//     return num*num;
// });

// console.log(squared)

arr = []
function a(arr,num1)
{
    const doubled = numbers.map(function(num) {
    arr.push(num1 * num); });

    return arr
}
console.log(a(numbers,3))