//create an array to store my dog breeds
var topics = ["labrador", "golden retriever", "german shepherd", "irish setter", "samoyed", "rottweiler", 
			"golden doodle", "bernese mountain dog", "border collie", "english bulldog"];

//create variable and store result of users "puppy-input" (from HTML form)

//push puppy-input to topics array

//loop array and append a button for each to div id="puppybuttons"
function renderButtons() {

        //empty puppy buttons display area
        $("#puppybuttons").empty();

        // Loop through the array of breeds
        for (var i = 0; i < topics.length; i++) {

        //generate button for each breed
          var button = $("<button>");
          // Adding a class of breed to button
          button.addClass("breed");
          // Adding a data-attribute
          button.attr("data-name", topics[i]);
          // Providing the initial button text
          button.text(topics[i]);
          // Adding the button to the buttons-view div
          $("#puppybuttons").append(button);
        }
};

renderButtons();
//on click function for all buttons that will:

	//empty puppies div (where gifs display)

	//use AJAX to access Giphy API (key dc6zaTOxFJmzC) and:

		//pull 10 gifs related to the topic of the button that was pushed

		//display gif rating

		//display still image of gif

	
//on click to make gif animation start/stop

