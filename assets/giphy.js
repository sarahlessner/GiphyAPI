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
        };
};

renderButtons();

//function for all buttons that will display gifs and relevant info to HTML
function displayPuppies(){

	//use AJAX to access specific breed button being clicked
	var breed = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + breed + "+puppy&limit=10&sort=relevant&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	//div to hold the breed being pulled
    	var breedDiv = $("<div class='breed'>");
    	
		//display gif rating for each of the 10 gifs being pulled for the breed
		for (var j = 0; j < response.data.length; j++) {

			var rating = response.data[j].rating;
			var displayRating = $("<p>").text("Rating: " + rating);
			breedDiv.append(displayRating);

			var still = response.data[j].images.fixed_height_still.url;
			var displayStill = $("<img>").attr("src", still);
			breedDiv.append(displayStill);

			$("#puppies").prepend(breedDiv);
		};
		
		
		
	});

};	

	//onclick for displayPuppies
	$(document).on("click", ".breed", displayPuppies);

    // Calling the renderButtons function to display the intial buttons
 	renderButtons();


//on click to make gif animation start/stop

