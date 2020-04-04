//document ready function
$(document).ready(function() {
  //variable and pointers declarations
  const $unresolved = $(".first-box");
  const $resolved = $(".second-box");
  const issues = [];

  //initialize all our issues
  $.get("api/case").then(function(data) {
    for (i = 0; i < data.length; i++) {
      issues.push(data[i]);
    }
    console.log("Data retrieved: ", issues);
  });
});
