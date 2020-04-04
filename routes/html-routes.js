// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has signed in, send them to the form page
    if (req.user) {
      res.redirect("/form2");
    }
    //otherwise send them to the login page to login
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user is already logged in
    if (req.user) {
      res.redirect("/form2");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/form2", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form2.html"));
  });
  //route to look at issues, user needs to be signed in
  app.get("/issues", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/issues.html"));
  });
};
