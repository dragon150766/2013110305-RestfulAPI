// const datefns = require('date-fns')

const { id } = require("date-fns/locale");

//console.log(datefns.format(new Date(1989,11,10),"MM/dd/yyy"))
//console.log("Hello Word!!!");

let firstName = "Siripong"
let age = 16
// //console.log(firstNameage+age)

// let info = `
//     My name is ${firstName}
//     My age is ${age}
// `
// console.log(info)

const worker = {
    name:'Olaf', 
    age:20, 
    detail:{
        work:'Data Mannagemnet' ,
        id:2013110305,
        salary:14200
    } 
}

const showData = () => `${studen.name}`
//console.log(showData())

 const showData2 = () => {
    let info = 'My name is'
    return `${info} ${worker.name}`
 }
//console.log(showData2())

const sumNumber = (a,b) => a+b
//console.log(sumNumber(9,1))

const{name,detail:{salary}} = worker
//console.log(salary)

const people = {
    name:'Siripong',
    nickname:'Fluk',
    hobby:'Video-Game',
    address:'You not need to Know about this',
    province:{
        province:'Thai',
        postcode:6486
    }
}

function getPeople({nickname, hobby, province}){
    return `${nickname} ${hobby} ${province.postcode}`
}

console.log(getPeople(people));