// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-da-burger").on("click", function(event) {
        var id = $(this).data("id");

        var eatenState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function() {
                // console.log("changed to", eatenState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                // console.log("added a new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});