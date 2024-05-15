/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from 'node:fs';
import qr from "qr-image";
inquirer
    .prompt([
        /* Pass your questions in here */
        {"message": "What url u want ",
        "name": "URL"
    }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        fs.writeFile("url3.txt", answers.URL, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img3.png"));
        // const url = answers.URL;
        // var qr_svg = qr.image(url);
        // qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
