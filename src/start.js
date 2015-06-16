/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){


	// starting objects
	livenpMap = new selfNpothesisSpace();

	/**
	* Stitch between stream and map view
	*
	*/
	$("a").click(function(e) {
		e.preventDefault(e);
		idclick = $(this).attr("id");
console.log(idclick);
		switch(idclick){

			case "npothesis-map-view": 
				$("#map-npothesis").show();
				$("#stream-npothesis").hide();
			
			break;
			
			case "npothesis-stream-view": 

				$("#stream-npothesis").show();
				$("#map-npothesis").hide();
			
			break;
				
			case "npothesis-add": 

				var thediv=document.getElementById('displaybox');
				if(thediv.style.display == "none"){
					thediv.style.display = "";
					var collectbndiv = '<div id="new-nbuild-box">';
					collectbndiv += $("#build-npothesis").html();
					collectbndiv += '<a href="" id="npothesis-add" >CLOSE WINDOW</a></div>'
					thediv.innerHTML = collectbndiv;
				}
				else
				{
					thediv.style.display = "none";
					thediv.innerHTML = '';
				}
				return false;
						
			break;
				
			case "add-sensor-new": 

				var thediv=document.getElementById('displaybox');
				if(thediv.style.display == "none"){
					thediv.style.display = "";
					var collectbndiv = '<div id="new-nbuild-box">';
					collectbndiv += $("#sensor").html();
					collectbndiv += '<a href="" id="npothesis-add" >CLOSE WINDOW</a></div>'
					thediv.innerHTML = collectbndiv;
				}
				else
				{
					thediv.style.display = "none";
					thediv.innerHTML = '';
				}
				return false;
						
			break;				
		}
		
	});

	$("#displaybox").click(function(e) {
		e.preventDefault(e);
		idclick = $(this).attr("id");
console.log(idclick);
		var thediv=document.getElementById('displaybox');
		thediv.style.display = "none";
		thediv.innerHTML = '';
		$("#build-npothesis").hide();
	
	});
	
});