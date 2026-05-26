const si= new Object() //singleton object
const nsi={} // non singleton object
console.log(si)
console.log(nsi)

// adding values to object
nsi.name= "shinchan"
nsi.age=5
nsi.hobby="dancing :) "
console.log(nsi)
const doraemon={
    name: {
        firstname:"nobita",
        lastname: "nobi"
    },
    age:12,
    marks:0
}
console.log(doraemon.name)
console.log(doraemon)
const obj3= Object.assign({},nsi,doraemon)

console.log("combinned:",obj3)
//destructing
const{name: n}=nsi
console.log(n)