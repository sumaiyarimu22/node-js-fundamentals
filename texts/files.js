//file system node js builtin module system =fs
const fs = require("fs");
//👶file read -----------file read async action, 2 param(err,data)
// fs.readFile("./texts/text1.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });

//👧file write-----------file read async action, 3 param
//file path,ki right kora lagbe, then async fun
// fs.writeFile("./texts/text1.txt", "hello none", () => {
//   console.log("file written successfully");
// });

// fs.writeFile("./texts/text2.txt", "hello none", () => {
//   console.log("file written successfully");
// });

//👵make directory
if (!fs.existsSync("./node")) {
  //create folder
  fs.mkdir("./node", (err) => {
    if (err) console.log(err);

    console.log("folder created");
  });
} else {
  //remove folder
  fs.rmdir("./node", (err) => {
    if (err) console.log(err);

    console.log("folder removed");
  });
}

//👮‍♀️remove
