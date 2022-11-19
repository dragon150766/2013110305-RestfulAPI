const users = [
    {
        name:'Siripong',
        nickname:'Fluk',
        hobby:'Video-Game',
        address:'You not need to Know about this',
        provinces:{
            province:'Thai',
            postcode:6486
        }
    },
    {
        name:'Yamamoto-Takeshi',
        nickname:'Takeshi',
        hobby:'Travl',
        address:'You not need to Know about this',
        provinces:{
            province:'Japan',
            postcode:99468
        }
    },
    {
        name:'Alex-Frussia',
        nickname:'Alex',
        hobby:'Excociating',
        address:'You not need to Know about this',
        provinces:{
            province:'English',
            postcode:22315
        }
    }
]

for(const u of users){
    let info = `"My nickname is ${u.nickname}, My hobby is ${u.hobby}
and my postcode is ${u.provinces.postcode}"
    `
    console.log(info)
}