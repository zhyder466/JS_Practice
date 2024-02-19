items = [1,2,3,4,5]

items.forEach(element => {
    console.log(element)
});

items.forEach(function(element){
    console.log(element*2)
});

items2 = items.map(function(element) {
    return element*element
});

console.log(items2)

evens = items.map(function(element){
    return element%2==0
})

console.log(evens)

check = items.filter(element => element%2);
console.log(check)

str = ['a','b','c','d','e']
result = str.filter(item => item.includes('a'))
console.log(result)
