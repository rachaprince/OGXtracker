$(document).ready ( function (){
$(function() {
  // this initializes the dialog (and uses some common options that I do)
  $("#dialog").dialog({autoOpen : false, modal : true, show : "blind", hide : "blind"});

  // next add the onclick handler
  $("#contactUs").click(function() {
    $("#dialog").dialog("open");
    return false;
  });
});
}
	/*var stages= document.getElementsByClassName("stage");
	var links= ["application.html", "tnlist.html", "matching.html", "aiesecprofile.html", "an.html", "ops.html"];

for (var i=0; i <stages.length; i++ ){
		stages[i].onclick=function() { window.open(links[i],"", "width=200 height=200 left=500 top=200");
		};
	
	



	function openPopUp(stages){
		var link="";
		switch(stages.find(event.target)){
		
		case 1: link="application.html";
			break;
		case 2: link="tnlist.html";
			break;
		case 3: link="matching.html";
			break;
		case 4: link="aiesecprofile.html"
			break;
		case 5: link="an.html";
			break;
		case 6: link="ops.html";
		break;
		default: 
		}
		window.open(link,"", "width=200 height=200 left=500 top=200");
	}

});*/