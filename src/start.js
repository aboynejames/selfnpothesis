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
	
	/**
	*
	* click on fusion element
	*/
	$("#fusionnp").click(function(e) {
		e.preventDefault(e);
		idclick = $(this).attr("id");
		if(idclick)
		{		
			var fusionchain = '';
			fusionchain += '<div class="stream-status-settled"  id="settlednp"><div class="stream-element-settled">Settled</div><div class="stream-element-description" >Heat transfer to pool</div><div class="stream-element-sensors" >thermometer</div><div class="stream-element-ciq" >9343 89%</div></div>';
			fusionchain += '<div class="stream-status-settled"  id="settlednp"><div class="stream-element-settled">Settled</div><div class="stream-element-description" >Monitor temperature</div><div class="stream-element-sensors" >thermometer</div><div class="stream-element-ciq" >543 89%</div></div>';
			fusionchain += '<div class="stream-status-settled"  id="settlednp"><div class="stream-element-settled">Settled</div><div class="stream-element-description" >Pool pump capacity</div><div class="stream-element-sensors" >thermometer</div><div class="stream-element-ciq" >493 89%</div></div>';
			fusionchain += '<div class="stream-status-settled"  id="settlednp"><div class="stream-element-settled">Settled</div><div class="stream-element-description" >Heat element to H20 energy transfer</div><div class="stream-element-sensors" >thermometer</div><div class="stream-element-ciq" >2453 89%</div></div>';
			fusionchain += '<div class="stream-status-settled"  id="settlednp"><div class="stream-element-settled">Settled</div><div class="stream-element-description" >energy conservation</div><div class="stream-element-sensors" ></div><div class="stream-element-ciq" >4543 99.4%</div></div>';			
			$("#fusionnp-chain").html(fusionchain);
		}	
	
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