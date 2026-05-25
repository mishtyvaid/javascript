const arr1=[1,2,3,4,5]
console.log(arr1)
const arr2= new Array(10,20,30,40,50)
console.log(arr2)
arr1.push(98)
console.log(arr1)
arr1.pop()
console.log(arr1)
arr2.unshift(98)
console.log(arr2)
arr2.shift()
console.log(arr2)
//console.log("join",arr2=arr1.join(arr2))

console.log("slice",arr1.slice(1,3))
console.log(arr1)
console.log("splice",arr1.splice(1,3))
console.log(arr1)
//arr1.push(arr2)
//console.log(arr1)
//console.log(arr1[2][1])
const arr3= arr1.concat(arr2)
console.log(arr3)
const arr4=[1,2,3,[7,8],[10,[29,36]]]
const arr5=arr4.flat(2)
console.log(arr5)
console.log(Array.from("hello"))
const v1="hehe"
const v2="ohoh"
const v3="waowie"
console.log(Array.of(v1,v2,v3))