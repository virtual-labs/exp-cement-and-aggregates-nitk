//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
 var n,p,a,b,c,lastp,avg,average;

var values=[[420,830,1726,1466,2.733],
            [420,756,1680,1466,2.754],
            [420,874,1754,1466,2.735],
            [420,918,1782,1466,2.736]];	
			
p=Math.floor(Math.random()*3);

function navNext()
{

for (temp = 0; temp <= 6 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}

var ca;
var questions=["Pycnometer is a laboratory device to measure ",
				"Capacity of pycnometer used is",
				"Weight of pycnometer + 1/3rd of Coarse Aggregate + water is taken as "];
				
var options2=[["Volume of Solid","Density","Both A and B","None of the above"],//Both A and B
			  ["250ml","500ml","750ml","1000ml"],//1000ml
			  ["W1","W2","W3","W4"]];//W3
			  
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	
	if (simsubscreennum==1)
	{  

		refresh1();
	
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML=" ";
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a1').onclick=function() { step1(); };

          	   
	}
	else if (simsubscreennum==2)
	{
		//Prevent repetitive random numbers
		while (p == lastp) 
		{
			p = Math.floor(Math.random() * 3);
		}
		if(repeat==0)
		{
			lastp = p;
		}
		refresh1();
		repeat+=1;
		if(mpointer==0)
		{
			refresh1();
			document.getElementById('a2').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="hidden";
					
			document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML="Trial : " + repeat;
			
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 270px; height: 40px; z-index: 10;";
				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			
			document.getElementById('stl2-1').onclick=function() { step2(); };
			
		}
		else
		{
			refresh1();
			document.getElementById('a3').onclick="";
			document.getElementById('a3').style.visibility="visible";
			document.getElementById('stl2-1').style.visibility="visible";
			document.getElementById('nob2-1').style.visibility="visible";
			document.getElementById('p5-1').style.visibility="hidden";
			document.getElementById('r1').style.visibility="hidden";
			document.getElementById('canvas5').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="hidden";
								
			document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
			document.getElementById('trial').innerHTML="Trial : " + repeat;
			
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('stl2-1').onclick=function() { step2(); };
			
		}
	}
	
	else if (simsubscreennum==3)
	{
		refresh1();
		document.getElementById('a5').onclick="";
		document.getElementById('ca3-2').style.visibility="visible";
		document.getElementById('ca2-2').style.visibility="hidden";

		document.getElementById('a5').style.visibility="visible";
		document.getElementById('stl3-1').style.visibility="visible";
		document.getElementById('nob3-1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="hidden";

		document.getElementById('a4').style.visibility="hidden";
		document.getElementById('ca3-1').style.visibility="hidden";
        
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('stl3-1').onclick=function() { step3(); };
    }
	else if (simsubscreennum==4)
	{
		refresh1();
		document.getElementById('ca3-1').style.visibility="hidden";
		document.getElementById('lcb3-2').style.visibility="hidden";

		document.getElementById('a7').onclick="";

		document.getElementById('a7').style.visibility="visible";
		document.getElementById('stl4-1').style.visibility="visible";
		document.getElementById('nob4-1').style.visibility="visible";
		document.getElementById('lcb4').style.visibility="hidden";

		document.getElementById('nextButton').style.visibility="hidden";
		document.getElementById('a6').style.visibility="hidden";
		document.getElementById('w3').style.visibility="hidden";
				
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('stl4-1').onclick=function() { step4(); };
	}
	else if (simsubscreennum==5)
	{
		refresh1();
		document.getElementById('a8').style.visibility="hidden";
		document.getElementById('wtr4').style.visibility="hidden";

		document.getElementById('lcb4').style.visibility="hidden";
        document.getElementById('can5-1').innerHTML="Weight of empty pycnometer (W<sub>1</sub>) = "+values[p][0] +"g";
		document.getElementById('can5-2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate  (W<sub>2</sub>) = "+values[p][1] +"g" ;
		document.getElementById('can5-3').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate + water (W<sub>3</sub>) = "+values[p][2]  +"g";
		document.getElementById('can5-4').innerHTML="Weight of pycnometer + water (W<sub>4</sub>) = "+values[p][3]  +"g" ;
        calculateSpecificGravity();

        if(repeat>1)
		{
			calculateSpecificGravity2();
		}
		if(repeat < 2 && repeat>0)
		{
			mpointer=1;
			simsubscreennum=1;
        }
	}
	else if (simsubscreennum==6)
	{
		document.getElementById("trial").style.visibility="hidden";
		document.getElementById("p5-2").style.visibility="hidden";
		document.getElementById("l5-2").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("output2").style.visibility="hidden";
		document.getElementById("6-1").innerHTML=values[lastp][4];
		document.getElementById("6-3").innerHTML=values[p][4];
		document.getElementById("check3").onclick=function()
		{
			if(!document.getElementById("avg").value  || !document.getElementById("avg").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				avg = document.getElementById("avg").value;
				average=(values[p][4]+values[lastp][4])/2;
				if(Math.round(avg) == Math.round(average))
				{
					document.getElementById("check3").style.visibility="hidden";
					document.getElementById("rw").style="color:#32CD32; font-size:22px; position:absolute; left:510px; top:118px;";
					document.getElementById("rw").innerHTML="&#10004;";
					document.getElementById("rw").style.visibility="visible";
					document.getElementById("inferenceDiv").style.visibility="visible";
				}
				else
				{
					document.getElementById("rw").style="color:red; font-size:22px; position:absolute; left:510px; top:118px;";
					document.getElementById("rw").innerHTML="&#10008;";
					document.getElementById("rw").style.visibility="visible";
				}
			}	
			
		}
	}
}

function step1()
{
	myStopFunction();
	document.getElementById('a1').style.visibility="hidden";
	setTimeout(function(){
	document.getElementById('a2').style.visibility="visible";
	}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
				//document.getElementById('nextButton').style.visibility="visible";
				validateAnswer(0,2,"100px","200px");
         },500);
		 
		document.getElementById('can1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values[p][0]+"g";
		document.getElementById('v1').innerHTML=values[p][0]+".00g";
    }, 1200);
}

function step2()
{
	myStopFunction();
	document.getElementById('stl2-1').style.visibility="hidden";
	document.getElementById('stl2-2').style.visibility="visible";
    document.getElementById("stl2-2").onclick=""; 
    document.getElementById("stl2-2").onclick=""; 
    setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute;left: 240px; top: 240px;  height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('nob2-1').onclick=function() { step21(); };
	}, 1200);
}


function step21()
{
	myStopFunction();
	document.getElementById('nob2-1').style.visibility="hidden";
	document.getElementById('nob2-2').style.visibility="visible";
    document.getElementById('a3').onclick=""; 
	document.getElementById("nob2-2").onclick=""; 
    document.getElementById("stl2-2").onclick="";
    setTimeout(function(){
	   document.getElementById('hand2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 590px; top: 165px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand2').onclick=function() { step22(); };
	}, 1200);
}

	
function step22()
{
    myStopFunction();
    document.getElementById('hand2').style.transformOrigin = "100% 80%";
	document.getElementById('hand2').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pca').style.visibility="visible";
        document.getElementById('ca2-1').style.visibility="visible";
	    document.getElementById('ca2-1').style.animation = "water-5 1.8s 1 forwards";
		 setTimeout(function()
		{	
		document.getElementById('pca').style.visibility="hidden";
		},1000);
     },500);
	document.getElementById('stl2-2').onclick="";
   setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('hand2').style.visibility="hidden";
	document.getElementById('nob2-2').onclick=function() { step23();}
	},800);			  	
}				

 function step23()
{	  
        myStopFunction();  
	    document.getElementById('nob2-2').style.visibility="hidden";
	    document.getElementById('nob2-1').style.visibility="visible"
	    document.getElementById('nob2-1').onclick="";
        setTimeout(function(){
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('stl2-2').onclick=function() { step24();}
		},800);
}				
					
            	
function step24()
{
     myStopFunction();  
	 document.getElementById('stl2-2').style.visibility="hidden";
	 document.getElementById('stl2-1').style.visibility="visible";
	 document.getElementById('nob2-1').onclick="";
	 document.getElementById('stl2-1').onclick="";
    setTimeout(function()
	{
 	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('a3').onclick=function() { step25(); }
	}, 1000);
}
 
function step25()
{
	myStopFunction();
	console.log("p="+p+"lastp="+lastp+",values[p][1]="+values[p][1]+".00g");
	document.getElementById('a3').style.visibility="hidden";
	document.getElementById('stl2-1').style.visibility="hidden";
	document.getElementById('nob2-1').style.visibility="hidden";
	document.getElementById('ca2-1').style.visibility="hidden";
    document.getElementById('a4').style.visibility="visible";
	document.getElementById('ca2-2').style.visibility="visible";
	document.getElementById('v2').innerHTML=values[p][1]+".00g";
	document.getElementById('can2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate(W<sub>2</sub>)="+values[p][1]+"g";
	if(repeat==1)
	{
		validateAnswer(1,3,"150px","150px");
	}
	else
	{
		document.getElementById('nextButton').style.visibility="visible";
	}
}

function step3()
{
	myStopFunction();
	document.getElementById('stl3-1').style.visibility="hidden";
	document.getElementById('stl3-2').style.visibility="visible";
    document.getElementById("stl3-2").onclick=""; 
   	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 240px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('nob3-1').onclick=function() { step31(); };
	}, 1200);
}


function step31()
{
	myStopFunction();
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('nob3-2').style.visibility="visible";
    document.getElementById("nob3-2").onclick=""; 
    document.getElementById("stl3-2").onclick="";  
    document.getElementById("a5").onclick=""; 
    setTimeout(function(){
	document.getElementById('hand3').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand3').onclick=function() { step32(); };
	}, 1400);
}

function step32()
{
    myStopFunction();
    document.getElementById('hand3').style.transformOrigin = "100% 80%";
	document.getElementById('hand3').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw3').style.visibility="visible";
		document.getElementById('w3').style.visibility="visible";
	    document.getElementById('w3').style.animation = "water-5 1.8s 1 forwards";
        setTimeout(function()
		{	document.getElementById('pw3').style.visibility="hidden";
			document.getElementById('w3').style.visibility="hidden";
            document.getElementById('lcb3-1').style.visibility="visible";
					
		},1000);

	},500);
	document.getElementById('stl3-2').onclick="";
	setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('hand3').style.visibility="hidden";
	document.getElementById('nob3-2').onclick=function() { step33();}
	},800);			  	
}		
  
function step33()
{	  
   myStopFunction();  
   document.getElementById('nob3-2').style.visibility="hidden";
	document.getElementById('nob3-1').style.visibility="visible";
	document.getElementById('nob3-1').onclick="";
	setTimeout(function(){
	   myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
       document.getElementById('stl3-2').onclick=function() { step34();}
	},500);
}				
					
function step34()
{
     myStopFunction();  
	document.getElementById('stl3-2').style.visibility="hidden";
	document.getElementById('stl3-1').style.visibility="visible";
	document.getElementById('nob3-1').onclick="";
	document.getElementById('stl3-1').onclick="";
    setTimeout(function()
	{
 	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('a5').onclick=function() { step35(); }
	}, 1000);
}
 
function step35()
{
    myStopFunction();
	document.getElementById('a5').style.visibility="hidden";
	document.getElementById('stl3-1').style.visibility="hidden";
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('lcb3-1').style.visibility="hidden";
    document.getElementById('lcb3-2').style.visibility="visible";
    document.getElementById('w3').style.visibility="hidden";
    document.getElementById('a6').style.visibility="visible";
	document.getElementById('ca3-1').style.visibility="visible";
	document.getElementById('ca3-2').style.visibility="hidden";
    document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate +water (W<sub>3</sub>)="+values[p][2]+"g";
    document.getElementById('v3').innerHTML=+values[p][2]+".00g";
	document.getElementById('nextButton').style.visibility="visible";
}
		
function step4()
{
	myStopFunction();
	document.getElementById('stl4-1').style.visibility="hidden";
	document.getElementById('stl4-2').style.visibility="visible";
    document.getElementById("stl4-2").onclick=""; 

	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 240px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('nob4-1').onclick=function() { step41(); };
	}, 1200);
}


function step41()
{
	myStopFunction();
	document.getElementById('nob4-1').style.visibility="hidden";
	document.getElementById('nob4-2').style.visibility="visible";
	document.getElementById("a7").onclick=" ";
	document.getElementById("nob4-2").onclick=""; 
    document.getElementById("stl4-2").onclick=""; 
	setTimeout(function(){
	document.getElementById('hand4').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand4').onclick=function() { step42(); };
	}, 1600);
}


function step42()
{
    myStopFunction();
    document.getElementById('hand4').style.transformOrigin = "100% 80%";
	document.getElementById('hand4').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw4').style.visibility="visible";

		document.getElementById('lw4').style.visibility="visible";
	    document.getElementById('lw4').style.animation = "water-5 1.5s 1 reverse";
	    document.getElementById('w4').style.visibility="visible";
	    document.getElementById('w4').style.animation = "water-5 1.8s 1 forwards";
        setTimeout(function()
		{	
		    document.getElementById('pw4').style.visibility="hidden";
	        document.getElementById('lw4').style.visibility="hidden";
			document.getElementById('cb4').style.visibility="visible";
	    },1000);
    },500);
	document.getElementById('w4').style.visibility="hidden";
	document.getElementById('stl4-2').onclick="";
	setTimeout(function()
	{
	document.getElementById('hand4').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('nob4-2').onclick=function() { step43();}
	},800);			  	
}	
	
function step43()
{	  
        myStopFunction();  
	    document.getElementById('nob4-2').style.visibility="hidden";
	    document.getElementById('nob4-1').style.visibility="visible";
		document.getElementById('nob4-1').onclick="";
		setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
	    document.getElementById('stl4-2').onclick=function() { step44();}
		},500);
}				
					
function step44()
{
    myStopFunction();  
	document.getElementById('stl4-2').style.visibility="hidden";
    document.getElementById('stl4-1').style.visibility="visible";
	document.getElementById('nob4-1').onclick="";
	document.getElementById('stl4-1').onclick="";
    setTimeout(function()
	{
 	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('a7').onclick=function() { step45(); }
	}, 1000);
}
 
function step45()
{
	myStopFunction();
	    document.getElementById('a7').style.visibility="hidden";
		document.getElementById('w4').style.visibility="hidden";
        document.getElementById('cb4').style.visibility="hidden";

		document.getElementById('stl4-1').style.visibility="hidden";
		document.getElementById('nob4-1').style.visibility="hidden";

        document.getElementById('lcb4').style.visibility="visible";

	    document.getElementById('a8').style.visibility="visible";
	    document.getElementById('wtr4').style.visibility="visible";
		
		document.getElementById('can4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>)="+values[p][3]+"g";
		document.getElementById('v4').innerHTML=values[p][3]+".00g";
		 
		 if(repeat==2)
		 {
			 validateAnswer(2,2,"50px","150px");
		 }
		 else
		 {
			document.getElementById('nextButton').style.visibility="visible";
		 }
	
}
		

function refresh1()
{
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand2').style.transformOrigin = "";
	document.getElementById('hand2').style.animation = "";
	document.getElementById('arrow1').style.animation = "";
	
	document.getElementById('ca2-1').style.transformOrigin = "";
	document.getElementById('ca2-1').style.animation = "";
	document.getElementById('lcb3-1').style.transformOrigin = "";
	document.getElementById('lcb3-1').style.animation = "";
	document.getElementById('lw4').style.transformOrigin = "";
	document.getElementById('lw4').style.animation = "";
	document.getElementById('w4').style.transformOrigin = "";
	document.getElementById('w4').style.animation = "";
	document.getElementById('wtr4').style.transformOrigin = "";
	document.getElementById('wtr4').style.animation = "";
	
	document.getElementById('can1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate(W<sub>2</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate + water (W<sub>3</sub>) =  ";
	document.getElementById('can4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	
	
	
	document.getElementById('can5-1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can5-2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate (W<sub>2</sub>) = ";
	document.getElementById('can5-3').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate + water (W<sub>3</sub>) =  ";
	document.getElementById('can5-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	//document.getElementById('can6-5').innerHTML=" Specific gravity of fine aggregate= ";
	 

		document.getElementById('v1').innerHTML=" ";
        document.getElementById('v3').innerHTML=" ";
		document.getElementById('v4').innerHTML=" ";
		document.getElementById('v2').innerHTML=" ";
	document.getElementById('nextButton').style.visibility="hidden";	
	

}

function calculateSpecificGravity()
{
	document.getElementById("form").onclick=function()
	{
		document.getElementById("formula").style.visibility="visible";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("w1").style.visibility="hidden";
	}
	
	document.getElementById("check").onclick=function()
	{
		document.getElementById("formula").style.visibility="hidden";
		if(!document.getElementById("output").value  || !document.getElementById("output").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n = document.getElementById("output").value;
			console.log(values[p][4]);
			if(Math.round(n) == Math.round(values[p][4]))
			{
				document.getElementById("check").style.visibility="hidden";
				document.getElementById("form").style.visibility="hidden";
				document.getElementById("r1").style.visibility="visible";
				document.getElementById("result").style.visibility="hidden";
				document.getElementById("w1").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result").style.visibility="visible";
				document.getElementById("w1").style.visibility="visible";
			}
		}	
		document.getElementById("result").onclick=function()
		{
			document.getElementById("output2").style.visibility="hidden";
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
			document.getElementById("form").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("5-1").style.visibility="hidden";
			document.getElementById("p5-1").innerHTML="Specific gravity of coarse aggregate = "+values[p][4];
			document.getElementById("p5-1").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}	

function calculateSpecificGravity2()
{
	document.getElementById("l5-1").style.visibility="hidden";
	document.getElementById("5-2").style.visibility="visible";
	document.getElementById("output2").style.visibility="visible";
	document.getElementById("l5-2").style.visibility="visible";
	document.getElementById("form2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="visible";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
	}
	
	document.getElementById("check2").onclick=function()
	{
		document.getElementById("formula2").style.visibility="hidden";
		if(!document.getElementById("output2").value  || !document.getElementById("output2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("output2").value;
			console.log(values[p][7]);
			if(Math.round(n2) == Math.round(values[p][7]))
			{
				document.getElementById("check2").style.visibility="hidden";
				document.getElementById("form2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("result2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("result2").style.visibility="visible";
				document.getElementById("w2").style.visibility="visible";
			}
		}	
		document.getElementById("result2").onclick=function()
		{
			document.getElementById("output2").style.visibility="hidden";
			document.getElementById("l5-2").style.visibility="hidden";
			document.getElementById("check2").style.visibility="hidden";
			document.getElementById("result2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="hidden";
			document.getElementById("formula2").style.visibility="hidden";
			document.getElementById("5-2").style.visibility="hidden";
			document.getElementById("p5-2").innerHTML="Specific gravity of coarse aggregate = "+values[p][4];
			document.getElementById("p5-2").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}

function checkInference()
{
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==2)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is 2.5 - 2.8";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(average>=2.5 && average<=2.8)
		{
			document.getElementById("infAns").innerHTML="According to IS 2386, specific gravity of coarse aggregate lies between 2.5 - 2.8. The specific gravity of given coarse aggregate sample is "+average+". Hence it can be used for marine concrete applications.";
		}
		else 
		{
			document.getElementById("infAns").innerHTML="According to IS 2386, specific gravity of coarse aggregate lies between 2.5 - 2.8. The specific gravity of given coarse aggregate sample is "+average+". Hence it cannot be used for marine concrete applications.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}					