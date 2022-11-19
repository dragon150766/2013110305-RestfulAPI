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
    let info = `
    "My nickname is ${nickname}, My hobby is ${hobby}
    and my postcode is ${province.postcode}"
 `
    return info
}

console.log(getPeople(people));