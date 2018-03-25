// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat-btn").on("click", function(event) {
    console.log ("found click");   
    
    var id = $(this).data("id");

    console.log ("id: " + id);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: "devoured"
    }).then(
      function() {
        console.log("done");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#new-burger").on("click", function(event) {
    console.log ("found a new burger click!");
    var newBurger = {
      burger_name: $("#name").val().trim(),
      devoured: "0"
    };

    $.ajax("/api/burgers/", {
      type: "POST", 
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});