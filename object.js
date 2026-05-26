// object literal 
const user={
    name:"neha",
    id:456
}
console.log(user)
console.log(user['name'])
console.log(user.name)
//user.id= 439
//Object.freeze(user.id)
//console.log(user)
user.greeting=function(){
    console.log(`hehehe, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greeting) //gives reference of the function
console.log(user.greeting())