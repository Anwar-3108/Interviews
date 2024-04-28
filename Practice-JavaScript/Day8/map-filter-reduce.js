console.log("heyy")


let  arr = [1,2,3,4,5,6,7,8,9]

let squ=  arr.map((e)=>{
    return e*e
})

console.log(squ)


let filterData= arr.filter(e=>{
    return e>3
})
console.log(filterData)


let reducingData=  arr.reduce((acc,curr)=>{
    return acc+curr
})

console.log(reducingData)