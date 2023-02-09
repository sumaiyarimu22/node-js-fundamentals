const fs = require("fs");
const myReadStream = fs.createReadStream("./texts/text3.txt", {
  encoding: "utf8",
});

myReadStream.on("data", (chunk) => {
  console.log(
    "---------------------------chunk----------------------------------------"
  );
  console.log(chunk);
});
