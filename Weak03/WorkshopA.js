const express = require('express');
const app = express();
const port = 3000;

const data = {
    fullname:'Siripong',
    nickname:'Fluk',
    hobby:'Sleep',
    gitusername:'dragon150766'
}
function getdata({nickname, hobby, gitusername}){
    let info = `
    "My nickname is ${nickname}, My hobby is ${hobby}
    and my postcode is ${gitusername}"
 `
    return info
}

app.get('/',(req, res) =>{
    res.send(getdata);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});