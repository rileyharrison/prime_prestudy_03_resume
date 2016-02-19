
var avengersMovie = {
    name:"Avengers",
    runtime:"143 mins",
    releaseYear:"2012",
    director: "Joss Whedon"
};
function toggle(){
	var strButton = document.getElementById("toggle").value;
	if (strButton == "show"){
		document.getElementById("hide").style.visibility = "visible";
		document.getElementById("toggle").value = "hide";

	} else {
		document.getElementById("hide").style.visibility = "hidden";
		document.getElementById("toggle").value = "show";

	}
	
	


}

function toggleShow(){

	document.getElementById("hide").style.visibility = "visible";

 
    document.getElementById("btnShow").style.visibility = "hidden";
    document.getElementById("btnHide").style.visibility = "visible";
    document.getElementById("btnHide").style.left = "-47px";

      document.getElementById("toggle").value = "riley was here";


};

function toggleHide(){

	document.getElementById("hide").style.visibility = "hidden";

 
    document.getElementById("btnHide").style.visibility = "hidden";

    document.getElementById("btnShow").style.visibility = "visible";

};
