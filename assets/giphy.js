//create an array to store my dog breeds
var topics = ["labrador", "golden retriever", "german shepherd", "shiba inu", "samoyed", "rottweiler", 
			"goldendoodle", "bernese mountain dog", "border collie", "husky", "newfoundland"];

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

//function for all buttons that will display gifs and relevant info to HTML
function displayPuppies(){

	//use AJAX to access specific breed button being clicked
	var breed = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + breed + "&limit=10&sort=relevant&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
    	//div to hold the breed being pulled
    	var breedDiv = $("<div class='breedImages'>");
    	
		//display gif rating for each of the 10 gifs being pulled for the breed
		for (var j = 0; j < response.data.length; j++) {

			var still = response.data[j].images.original_still.url;
			var gif = response.data[j].images.original.url;
			var displayImg = $("<img>");
			displayImg.attr("src", still);
			displayImg.attr("data-still", still);
			displayImg.attr("data-gif", gif);
			breedDiv.append(displayImg);

			var rating = response.data[j].rating;
			rating = rating.toUpperCase();
			var displayRating = $("<p>").text("Rating: " + rating);
			breedDiv.append(displayRating);

			$("#puppies").prepend(breedDiv);

			//onclick function = 
			displayImg.on("click", function(){
				var currentSource = this.getAttribute("src");
				var stillUrl = this.getAttribute("data-still");
				var gifUrl = this.getAttribute("data-gif");

				if (currentSource === stillUrl)
					$(this).attr("src", gifUrl);   // change the src to data-gif
				else
					$(this).attr("src", stillUrl); // change the src to data-still	

			});	
		};
	});
};	

	$("#add-puppy").on("click", function(event) {
        
        event.preventDefault();
       
        var puppy = $("#puppy-input").val();
        topics.push(puppy);

        renderButtons();
	});

	//onclick for displayPuppies
	$(document).on("click", ".breed", displayPuppies);

 	renderButtons();


