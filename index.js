const express = require("express");

const app = express();

//function that return a boolean if the person is more than 14.
// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }
//but we can do the same thing using middleware
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you have not of age yet.",
    });
  }
}

//If we know a certain middleware needs to go on every route then,we can remove it from every individual routes and just use it on top like below
app.use(isOldEnoughMiddleware);
//The most important thing about app.use is "app.use() only triggers for all the end points blow the app.use()".
//So the order matters here.

app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have successfully riden the Ride 1.",
  });
});

app.get("/ride2", function (req, res) {
  res.json({
    msg: "You have successfully riden the Ride 2.",
  });
});

app.listen(3000, function () {
  console.log("Your app is listening on port 3000");
});
