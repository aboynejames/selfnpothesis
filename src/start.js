/**
*  jQuery listen for clicks and interaction	
* 
*/	
$(document).ready(function(){

	$("#dshare-api").hide();
	// starting objects
	livenpMap = new selfNpothesisSpace();

	/**
	* Stitch between stream and map view
	*
	*/
	$("a").click(function(e) {
		e.preventDefault(e);
		idclick = $(this).attr("id");
		
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
			/*
			*  Dapp connectiviity control
			*
			*/
			case"dshare":
				var dshareidstatus = $("#dshare").data("dshare-status");
				if(dshareidstatus == "on")
				{
					$("#dshare-api").show();
					$("#dshare").data("dshare-status", "off");
				}
				else
				{
					$("#dshare-api").hide();
					$("#dshare-api-add").hide();
					$("#dshare").data("dshare-status", "on");
				}	
			break;

		}
		
	});

	$("#displaybox").click(function(e) {
		e.preventDefault(e);
		idclick = $(this).attr("id");
		var thediv=document.getElementById('displaybox');
		thediv.style.display = "none";
		thediv.innerHTML = '';
		$("#build-npothesis").hide();
	
	});
	

	/*
	*  Dapp connectiviity control
	*
	*/
	$(".D-apis").click(function(e) {
		e.preventDefault(e);
		var $sotgt = $(e.target);			
		idclick = $($sotgt).attr("id");
		switch(idclick){
						
			case"bitcoin-api-status":
				
			
			break;
			
			case"Dsensor-api-status":
				$("#dshare-api-add").show();
				$("#Dsensor-api-status").text('live');
				$("#Dsensor-api-status").css("background-color", "green");
			
			break;
			
			case"ethereum-api-status":
				
			break;
			
			case"maidsafe-api-status":
				
			break;
		}

	});		
	
});