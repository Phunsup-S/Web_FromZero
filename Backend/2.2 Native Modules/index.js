const fs = require("fs");

// fs.writeFile("art.txt","Hello art122",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// }); 

fs.readFile('./art.txt',"utf8" ,(err, data) => {
    if (err) throw err;
    console.log(data);
}); 