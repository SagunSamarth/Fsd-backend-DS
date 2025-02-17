const fs=require('fs');
const data="I am appemded data"
fs.appendFile("./data.txt","I am appended data",(err)=>{
    if(err)
        console.log(err);
    console.log("Data appended")

});

console.log("data append")