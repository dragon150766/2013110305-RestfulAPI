const drink = ["cola", "tea", "water"]

for(const d of drink){
    console.log(d)
}

//----------------for-of----------------
const users = [
    {name:'A', age: 18},
    {name:'B', age: 16},
    {name:'C', age: 19},
    {name:'D', age: 20}
]

for(const u of users){
    let info = `My name is ${u.name} and my Age is ${u.age}`
    console.log(info)
}

//-----Error----------
const err = new Error('invalid email');

function validateEmail(email){
    return email.match(/@/)?
        email:
            new Error(`invalid email ${email}`);
}
