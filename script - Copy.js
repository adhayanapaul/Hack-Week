
var gall=0;
var kg = 0; 
var points = 0;
var p = 0;
var start = function(){
	$("#points").append("Points: "+ points);
	grow();
}

var refresh = function(){
	points=0;
	setPoints(points);
	$("#points").empty();
	start();
}



//throw away functions
var addRecycle = function(){
	points=points+1;
	setPoints(points);
	grow();
	menuReturn();
}

var addCompost = function(){
	points=points+2;
	setPoints(points);
	grow();
	menuReturn();
}

var addTrash = function(){
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });
}




//grow function
var grow = function(){
	if (points <= 0){
		var filename = "tree0.jpg";
		$("#pot").attr('src',filename);
	}
	else if (points <= 7 && points>0){
		var filename = "tree1.jpg";
		$("#pot").attr('src',filename);
	}
	else if (points<= 14 && points>7){
		var filename = "tree2.jpg";
		$("#pot").attr('src',filename);
	}
	else if (points <= 21 && points>14){
		var filename = "tree3.jpg";
		$("#pot").attr('src',filename);
	}
	else if (points <= 28 && points>21){
		var filename = "tree4.jpg";
		$("#pot").attr('src',filename);
	}
	else if (points <= 35 && points>28){
		var filename = "tree5.jpg";
		$("#pot").attr('src',filename);
	}
}




//getting to various pages
var menuReturn = function(){
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });	
	$(".gallons").empty();+-
	$(".kg").empty();
	$("#points").empty();
	grow();
	$("#points").append("Points: "+ points);
	document.getElementById("distance").value = '';
	document.getElementById("mpg").value = '';

	 $('input[data-type="search"]').val('');
    $('input[data-type="search"]').trigger("keyup");
}


var searchpage = function(){
	$.mobile.changePage( "#searchPage", { transition: "pop", changeHash: true });
}

var carbon = function(){
	$.mobile.changePage( "#carbon", { transition: "pop", changeHash: true });
}

$( "#login" ).click(function() {
  alert( ho);
});

 var goToLogin = function(){
	$.mobile.changePage( "#login", { transition: "pop", changeHash: true });
 }

var goToCreate = function(){
	$.mobile.changePage( "#create", { transition: "pop", changeHash: true });
}

var distance =function(){
	window.open('try.html')
}

var calculations = function(){
	var distance;
    distance = document.getElementById("distance").value;
    var mpg;
    mpg = document.getElementById("mpg").value;
    var gall =distance/mpg;
    var kg = gall * 8.887;
    if (distance<=1.5){
    	$.mobile.changePage( "#footprintShort", { transition: "pop", changeHash: true });
    	points=points- 4;
    	setPoints(points);
    	var gallonsString = "You've used " + (gall).toFixed(2) + " gallons!";
    	$(".gallons").append(gallonsString);
    	var carbonString = "You've emitted " + (kg).toFixed(2) + " kilograms of CO2.";
    	$(".kg").append(carbonString);
    }
    else if ((kg<=17)&&(kg>=8)){
	    $.mobile.changePage( "#footprintAvg", { transition: "pop", changeHash: true });
	    var gallonsString = "You've used " + (gall).toFixed(2) + " gallons!";
    	$(".gallons").append(gallonsString);
	}
	else if (kg>17){
		$.mobile.changePage( "#footprintMore", { transition: "pop", changeHash: true });
		var gallonsString = "You've used " + (gall).toFixed(2) + " gallons!";
    	$(".gallons").append(gallonsString);
    	var carbonString = "You've emitted " + (kg).toFixed(2) + " kilograms of CO2. Shame on you! >:(";
    	$(".kg").append(carbonString);
		points=points- 5;
		setPoints(points);
	}
	else if (kg<8){
		$.mobile.changePage( "#footprintLess", { transition: "pop", changeHash: true });
		var gallonsString = "You've used " + (gall).toFixed(2) + " gallons!";
    	$(".gallons").append(gallonsString);
    	var carbonString = "You've emitted " + (kg).toFixed(2) + " kilograms of CO2. Good job! :D";
    	$(".kg").append(carbonString);
		points=points+1;
		setPoints(points);
	}
}




//Tree functions
var PageToMaterial = function(){
		if ($("#select-choice-1m").val() == "Metals"){
			$.mobile.changePage( "#MetalCan", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Plastic"){
			$.mobile.changePage( "#pagePlastic", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Glass"){
			$.mobile.changePage( "#pageGlass", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Styrofoam"){
			$.mobile.changePage( "#t", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Food"){
			$.mobile.changePage( "#c", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Paper/Cardboard"){
			$.mobile.changePage( "#paper", { transition: "pop", changeHash: true });
		}else if ($("#select-choice-1m").val() == "Electronic Appliance"){
			$.mobile.changePage( "#h", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#Select A Material", { transition: "pop", changeHash: true });
		}
	}
  
	var CanToDestiny = function(){
		if ($("#select-choice-2m").val() == "Yes"){
			$.mobile.changePage( "#r", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#MetalFoil", { transition: "pop", changeHash: true });
		}
	}

	var FoilToNext = function(){
		if ($("#select-choice-3m").val() == "Yes"){
			$.mobile.changePage( "#MetalFoilStain", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#MetalScrap", { transition: "pop", changeHash: true });
		}
	}

	var FoilToDestiny = function(){
		if ($("#select-choice-3m").val() == "Yes"){
			$.mobile.changePage( "#t", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#r", { transition: "pop", changeHash: true });
		}
	}

	var changeGlassPage = function (){
			if ($("#select-choice-1g").val() == "Yes"){
				$.mobile.changePage( "#t", { transition: "pop"} );
			}
			else if ($("#select-choice-1g").val() == "No"){
				$.mobile.changePage( "#pageNotBroken", { transition: "pop"} );
			}
		}

	var changePlasticPage = function (){
		if ($("#select-choice-2p").val() == "Yes"){
			$.mobile.changePage( "#c", { transition: "pop"} );
		}
		else if ($("#select-choice-2p").val() == "No"){
			$.mobile.changePage( "#r", { transition: "pop"} );
		}
	}

	var changePlasticRecPage = function (){
		if ($("#select-choice-3p").val() == "Yes"){
			$.mobile.changePage( "#r", { transition: "pop"} );
		}
		else if ($("#select-choice-3p").val() == "No"){
			$.mobile.changePage( "#t", { transition: "pop"} );
		}
	}

	var changePaper =function(){
	if ($("#select-choice-1c").val()=="yes"){
		$.mobile.changePage( "#c", { transition: "pop"} );
	}
	else if ($("#select-choice-1c").val()=="no"){
		$.mobile.changePage( "#r", { transition: "pop"} );
	}

}

var goBack =function(){
	document.location.href = "index%20-%20Copy.html#carbon";
}



// Set the database to one that connects to the firebase online database
	// ubase is the reference to the user
	var database = new Firebase('https://grow-green.firebaseIO.com/');
	var ubase = new Firebase('https//:grow-green.firebaseIO.com');
	/**
	 * @function login
	 * Attempts to login the user into the databse by changing the reference in the ubase to that of name
	 */	

	var login = function(uname){
		try{
			ubase = database.child(document.getElementById('name').value);
			//Go to the menu
			getPoints();
			window.setTimeout(function(){menuReturn();}, 200);
		}
		catch(err)
		{
			//Displays this alert if the user is unable to login, most likely due to a wrong username
			alert(err);
		}
	}

var loadLogin = function(){
	if(document.cookie!=null)
	{
		ubase = database.child(document.cookie);
	}
}

	/**
	 * @function createUser 
	 * Adds a new JSON tree to the database using newName as the key for the user
	 * Calls login to set the user reference
	 */
	var createUser = function(){
		var uname = document.getElementById('newName').value;
		//Create a JSON tree that will be put into the database using  uname as the key
		var json = { };
		json[uname] = {points:0};
		//Writes the JSON tree to the database
		database.update(json);
		//Logs the user in
		ubase = database.child(document.getElementById('newName').value);
		//Goes to menu
		menuReturn();
	}
	/**
	 * @function setPoints 
	 * Changes the amount of points in the database of the selected user to @param p
	 * @param p
	 * The amount of points that the user should have
	 */
	var setPoints = function(p){
		ubase.set({points:p});
	}
	/**
	 * @function getPoints
	 * Retrieves the amount of points that the user has in the database
	 */
	var getPoints = function(){
		ubase.child('points').on('value', function(dataSnapshot){
			p = parseInt(dataSnapshot.val());
			points=p;
		});
		
		return parseInt(p);
	}