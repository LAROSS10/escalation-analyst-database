//document ready function
$(document).ready(function() {
  //variable and pointers declarations
  const $unresolved = $(".first-box");
  const $resolved = $(".second-box");
  const issues = [];
  let userId = null;

  //get who is logged in
  $.get("api/user_data").then(function(data) {
    userId = data.id;
    console.log("User ID: ", userId);
  });

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

  //our post to page function, takes in a list to post and a locate to post it in
  //requires bootstrap and jquery to work correctly
  function postToPage(locate, list) {
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

      //resolve/reopen button
      //will move the issue to the resolved side, or the unresolved side
      const $button = $("<button>");
      $button.addClass("btn btn-sml");
      //check to see if resolved or unresolved
      if (list[i].issueStatus === true) {
        $button.addClass("btn-primary");
        $button.text("Resolve");
        $button.attr("data-status", true);
      } else {
        $button.addClass("btn-danger");
        $button.text("Re-open");
        $button.attr("data-status", false);
      }
      $button.attr("id", list[i].id);
      //add the click event to our new button
      $button.on("click", function(event) {
        event.preventDefault();
        let newUpdate;
        //update our new case after an if statement
        console.log($(this).data("status"));
        if ($(this).data("status")) {
          newUpdate = {
            escalationAnalyst: parseInt(userId),
            issueStatus: false,
            id: this.id
          };
        } else {
          newUpdate = {
            escalationAnalyst: parseInt(userId),
            issueStatus: true,
            id: this.id
          };
        }

        console.log(newUpdate);
        //call the update api
        $.ajax({
          url: "/api/case/" + this.id,
          type: "PUT",
          data: newUpdate
        }).then(function() {
          console.log("Updated");
          location.reload();
        });
      });
      //add our button
      $card.append($button);

      //add the card to the locate passed
      locate.append($card);
    }
  }
});
