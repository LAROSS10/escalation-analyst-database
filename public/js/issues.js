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
    //console out our data
    console.log("Data retrieved: ", issues);

    //this next section will split our issues list into two other arrays to display on our group
    const openIssues = [];
    const closedIssues = [];

    //loop through all of our data and sort it into our two arrays
    for (i = 0; i < issues.length; i++) {
      //sorting if statement
      if (issues[i].issueStatus === true) {
        openIssues.push(issues[i]);
      } else {
        closedIssues.push(issues[i]);
      }
    }
    console.log("List of open issues: ", openIssues);
    console.log("List of closed issues: ", closedIssues);

    //post the unresolved issues
    postToPage($unresolved, openIssues);
    //post the resolved issues
    postToPage($resolved, closedIssues);
  });

  //our post to page function, takes in a list to post and a location to post it in
  //requires bootstrap and jquery to work correctly
  function postToPage(location, list) {
    //main loop for our posting info
    for (i = 0; i < list.length; i++) {
      const $card = $("<div>");
      $card.addClass("card");

      //add the Client name as the title
      const $title = $("<h5>");
      $title.addClass("card-title");
      $title.text(list[i].clientName);
      $card.append($title);

      //add the financial impact as the subtitle
      const $subtitle = $("<h7>");
      $subtitle.addClass("card-subtitle mb-2 text-muted");
      $subtitle.text(list[i].financialImpact);
      $card.append($subtitle);

      //add the description to the text part of the card
      const $text = $("<p>");
      $text.addClass("card-text");
      $text.text(list[i].issueDescription);
      $card.append($text);

      //add the card to the location passed
      location.append($card);
    }
  }
});
