

arr = [100,200,300,400,500,600,700,800,900,1000]

for(var i=0; i<arr.length;i++){
    console.log(arr[i])
}

let myObj = {
    name: "Hyder",
    cms: "021-21-0043",
    sem: "7th",
    program: "CS",
    address: {
        street: "2nd",
        floor : "5th"
    }
}

console.log(myObj['name'])

var keys = Object.keys(myObj)

for(var i=0;i<keys.length;i++){
    console.log(myObj[keys[i]]);
    if(Object.keys(myObj[keys[i]]).length>0){
        for(var c in myObj[keys[i]]){
            console.log(c)
        }
    }
}