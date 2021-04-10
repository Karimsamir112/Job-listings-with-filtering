// for media max-width
var mq = window.matchMedia("(max-width: 850px)");

function chooseOne(item){
	
	
	document.querySelector(".search-list").style.display="block";
		
	var create = document.createElement("span");

	create.style.display="inline-block";
	create.innerHTML=item;
	create.style.backgroundColor="hsl(180, 52%, 96%)";
	//create.style.backgroundColor="hsl(180, 31%, 95%)";
	create.style.marginLeft="10px";
	//create.style.marginTop="5px";
	var create2 = document.createElement("img");
	create2.src="https://fmc-9-static-job-listings.vercel.app/images/icon-remove.svg";
	create2.style.cursor="pointer";
	create2.style.backgroundColor="hsl(180, 29%, 50%)";
	create2.style.marginLeft="3px";
	create2.style.marginTop="-2px";
	create2.style.padding="3px";
	create2.style.transition="all 0.3s"
	create2.onmouseover=function() {
		create2.style.backgroundColor="black";
	}
	create2.onmouseout=function() {
		create2.style.backgroundColor="hsl(180, 29%, 50%)";
	}
	create2.onclick=function() {
		
		create.style.display="none";
		//setTimeout(check , 10); 
	} 
	document.querySelector(".search-list").appendChild(create);
	create.appendChild(create2);
	
	var x = document.querySelectorAll(".it");
	for(var i =0; i < x.length; i++){
		
		
		
		if(x[i].innerHTML==item){
          
			x[i].onclick=function() {
				create.style.display="inline-block";
				
			}
		}
		
	
	
	}    
	
		
	


function check() {  
	
	var a1 = document.querySelector(".Photosnap");
	var a2 = document.querySelector(".manage");
	var a3 = document.querySelector(".account");
	var a4 = document.querySelector(".myhome");
	var a5 = document.querySelector(".loop-studios");
	var a6 = document.querySelector(".faceIt");
	var a7 = document.querySelector(".shortly");
	var a8 = document.querySelector(".insure");
	var a9 = document.querySelector(".eyecam");
	var a10 = document.querySelector(".air-company");
	
	/*var search = document.querySelector(".search-list");
	var item = search.getElementsByTagName("span");
	
	for(var i=0; i <item.length; i++)
{
} */

	
	/*if(create.style.display=="inline-block"){
		create.style.visibility="visible";
	} */
	
	if(mq.matches){
		var disp = "block";
	}
	
	else{
		var disp = "flex";
	} 
	

	
	 if(item==="Frontend" && create.style.display=="inline-block"){
		 

		
		a1.style.display=disp;
		a3.style.display=disp;
		a4.style.display=disp;
		a7.style.display=disp;
		a8.style.display=disp;
		a10.style.display=disp;
		
		a2.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a9.style.display="none";
			 
			
		
	} 
	
	else if(item==="JavaScript" && create.style.display=="inline-block"){
	
	
		 
		a1.style.display=disp;
		a3.style.display=disp;
		a4.style.display=disp;
		a5.style.display=disp;
		a7.style.display=disp;
		a8.style.display=disp;
		a9.style.display=disp;
		a10.style.display=disp;
	
		a2.style.display="none";
		a6.style.display="none";
			
	} 
	
	else if(item==="HTML" && create.style.display=="inline-block"){
		

		a1.style.display=disp;
		a7.style.display=disp;
		
		a2.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a8.style.display="none";
		a9.style.display="none";
		a10.style.display="none";
			
	}
	
	else if(item==="CSS" && create.style.display=="inline-block"){
		
		
	
		
		a1.style.display=disp;
		a4.style.display=disp;
		
		a2.style.display="none";
		a3.style.display="none";
		a7.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a8.style.display="none";
		a9.style.display="none";
		a10.style.display="none";
			
			
	}
	
	else if(item==="Senior" && create.style.display=="inline-block"){
		
		
		a1.style.display=disp;
		
		a4.style.display="none";
		a2.style.display="none";
		a3.style.display="none";
		a7.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a8.style.display="none";
		a9.style.display="none";
		a10.style.display="none";
			
	}
	else if(item==="Fullstack" && create.style.display=="inline-block" || item==="Midweight" && create.style.display=="inline-block"){
		
		a2.style.display=disp;
		a5.style.display=disp;
		a9.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a6.style.display="none";
		a7.style.display="none";
		a8.style.display="none";
		a10.style.display="none";
		
	}
	
	else if(item==="Python" && create.style.display=="inline-block"){
		
		a2.style.display=disp;
		a9.style.display=disp;
		
		a1.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a7.style.display="none";
		a8.style.display="none";
		a10.style.display="none";
	}

	else if(item==="React" && create.style.display=="inline-block"){
		
		a2.style.display=disp;
		a3.style.display=disp;
		a10.style.display=disp;
		
		a1.style.display="none";
		a4.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a7.style.display="none";
		a8.style.display="none";
		a9.style.display="none";
	}
	
	else if(item==="Sass" && create.style.display=="inline-block"){
		
		a3.style.display=disp;
		a5.style.display=disp;
		a7.style.display=disp;
		a8.style.display=disp;
		a10.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a4.style.display="none";
		a6.style.display="none";
		a9.style.display="none";
	}
	else if(item==="Junior" && create.style.display=="inline-block"){
		
		a3.style.display=disp;
		a4.style.display=disp;
		a6.style.display=disp;
		a7.style.display=disp;
		a8.style.display=disp;
		a10.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a5.style.display="none";
		a9.style.display="none";
		
	}
	
	else if(item==="Ruby" && create.style.display=="inline-block") {
		
		a5.style.display=disp;
		a6.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a7.style.display="none";
		a8.style.display="none";
		a9.style.display="none";
		a10.style.display="none";
	}
	
	else if(item==="Backend" && create.style.display=="inline-block" || item==="RoR" && create.style.display=="inline-block"){
		
		a6.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a5.style.display="none";
		a7.style.display="none";
		a8.style.display="none";
		a9.style.display="none";
		a10.style.display="none";
	}
	
	else if(item==="Vue" && create.style.display=="inline-block"){
		
		a8.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a7.style.display="none";
		a9.style.display="none";
		a10.style.display="none";
	}
	
	else if(item==="Django" && create.style.display=="inline-block"){
		
		a9.style.display=disp;
		
		a1.style.display="none";
		a2.style.display="none";
		a3.style.display="none";
		a4.style.display="none";
		a5.style.display="none";
		a6.style.display="none";
		a7.style.display="none";
		a8.style.display="none";
		a10.style.display="none";
	} 
	

 
	

	else {
		
		a1.style.display=disp;
		a2.style.display=disp;
		a3.style.display=disp;
		a4.style.display=disp;
		a5.style.display=disp;
		a6.style.display=disp;
		a7.style.display=disp;
		a8.style.display=disp;
		a9.style.display=disp;
		a10.style.display=disp; 
		
		
	} 


//setInterval(check , 100);
	
	
//setInterval(chooseOne , 100);

	/* setTimeout(check , 10);
	
	setTimeout(check2 , 10); */
	/*}
	}
	setInterval(check , 10); */
}
	setInterval(check , 10);
	
	

	}
//setInterval(check , 10);

// clear 

function hideList() {
	document.querySelector(".search-list2").style.display="none";
	document.querySelector(".list").style.display="block";
	window.location.href="Job listings with filtering.html";
}

function clearr() {  
	document.querySelector(".search-list").style.display="none";
	document.querySelector(".search-list2").style.display="block";
	setTimeout(hideList , 500);
}


