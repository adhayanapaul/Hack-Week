
var gall=0;
var kg = 0; 

var start = function(){
	if (localStorage.getItem("points") == null){
	localStorage.setItem("points", 0);
	}
	$("#points").append("Points: "+ parseInt(localStorage.getItem("points")));
	grow();
}

var refresh = function(){
	localStorage.setItem("points", 0);
	$("#points").empty();
	start();
}



//throw away functions
var addRecycle = function(){
	localStorage.setItem("points", parseInt(localStorage.getItem("points")) + 1);
	grow();
	menuReturn();
}

var addCompost = function(){
	localStorage.setItem("points", parseInt(localStorage.getItem("points")) + 2);
	grow();
	menuReturn();
}

var addTrash = function(){
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });
}




//grow function
var grow = function(){
	if (parseInt(localStorage.getItem("points")) <= 0){
		var filename = "tree0.jpg";
		$("#pot").attr('src',filename);
	}
	else if (parseInt(localStorage.getItem("points")) <= 7 && parseInt(localStorage.getItem("points"))>0){
		var filename = "tree1.jpg";
		$("#pot").attr('src',filename);
	}
	else if (parseInt(localStorage.getItem("points")) <= 14 && parseInt(localStorage.getItem("points"))>7){
		var filename = "tree2.jpg";
		$("#pot").attr('src',filename);
	}
	else if (parseInt(localStorage.getItem("points")) <= 21 && parseInt(localStorage.getItem("points"))>14){
		var filename = "tree3.jpg";
		$("#pot").attr('src',filename);
	}
	else if (parseInt(localStorage.getItem("points")) <= 28 && parseInt(localStorage.getItem("points"))>21){
		var filename = "tree4.jpg";
		$("#pot").attr('src',filename);
	}
	else if (parseInt(localStorage.getItem("points")) <= 35 && parseInt(localStorage.getItem("points"))>28){
		var filename = "tree5.jpg";
		$("#pot").attr('src',filename);
	}
	else if (parseInt(localStorage.getItem("points")) >50 && parseInt(localStorage.getItem("points"))>35){
		var filename = "tree6.jpg";
		$("#pot").attr('src',filename);
	}
}




//getting to various pages
var menuReturn = function(){
	$.mobile.changePage( "#menu", { transition: "pop", changeHash: true });	
	$(".gallons").empty();
	$(".kg").empty();
	$("#points").empty();
	grow();
	$("#points").append("Points: "+ localStorage.getItem("points"));

}


var searchpage = function(){
	$.mobile.changePage( "#searchPage", { transition: "pop", changeHash: true });
}

var carbon = function(){
	$.mobile.changePage( "#carbon", { transition: "pop", changeHash: true });
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
    	localStorage.setItem("points", parseInt(localStorage.getItem("points")) - 4);
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
		localStorage.setItem("points", parseInt(localStorage.getItem("points")) - 5);;
	}
	else if (kg<8){
		$.mobile.changePage( "#footprintLess", { transition: "pop", changeHash: true });
		var gallonsString = "You've used " + (gall).toFixed(2) + " gallons!";
    	$(".gallons").append(gallonsString);
    	var carbonString = "You've emitted " + (kg).toFixed(2) + " kilograms of CO2. Good job! :D";
    	$(".kg").append(carbonString);
		localStorage.setItem("points", parseInt(localStorage.getItem("points")) + 1);;
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

	var FoilToDestiny = function(){
		if ($("#select-choice-3m").val() == "Yes"){
			$.mobile.changePage( "#t", { transition: "pop", changeHash: true });
		}else{
			$.mobile.changePage( "#MetalScrap", { transition: "pop", changeHash: true });
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