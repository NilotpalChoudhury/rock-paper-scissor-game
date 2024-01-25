$(document).ready(function () {
  // Add a click event listener to the button
  $(".submit button").click(function (event) {
    event.preventDefault();

    // Get the selected option value from the dropdown
    var selectedOption = $("#option").val();

    // Check if a valid option is selected
    if (selectedOption !== "default") {
      // Call functions to handle image display and result
      // Redirect to the submit.html page
      window.location.href = "./submit.html?selectedOption=" + selectedOption;
    } else {
      alert("Please choose an option!");
    }

    // Functions for submit handling
    function showimg() {
      $("#user").attr(
        "src",
        "../public/images/" + selectedOption.toLowerCase() + ".jpg"
      );
    }
  });
});
