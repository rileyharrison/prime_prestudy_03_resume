
var avengersMovie = {
    name:"Avengers",
    runtime:"143 mins",
    releaseYear:"2012",
    director: "Joss Whedon"
};


function toggleShow(){

	document.getElementById("hide").style.visibility = "visible";

 
    document.getElementById("btnShow").style.visibility = "hidden";
    document.getElementById("btnHide").style.visibility = "visible";
    document.getElementById("btnHide").style.left = "-47px";
    

};

function toggleHide(){

	document.getElementById("hide").style.visibility = "hidden";

 
    document.getElementById("btnHide").style.visibility = "hidden";

    document.getElementById("btnShow").style.visibility = "visible";

};
