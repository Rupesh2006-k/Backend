// let val = require('./one/index');   // './' means same folder
// console.log(val);
// node js install✅
// import and export✅
// run the code✅
// node js core usage & understanding✅
// npm usage✅
// express
// routes
// responses
// ejs, dynamic values
// error handling

const figlet = require('figlet');

figlet("Kavita Don 🤨", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});