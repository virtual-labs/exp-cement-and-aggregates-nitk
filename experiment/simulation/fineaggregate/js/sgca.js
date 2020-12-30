//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
var n,p,a,b,c,lastp,value;

var values=[[500.00,880.00,1508.00,1270.00,2.676],
            [500.00,886.00,1512.00,1270.00,2.681],
            [500.00,892.00,1518.00,1270.00,2.722],
            [500.00,900.00,1524.00,1270.00,2.74]];
			
var values1=[[650.00,976.00,1756.00,1554.00,2.629],
             [650.00,935.00,1734.00,1554.00,2.714],
             [650.00,950.00,1740.00,1554.00,2.632],
             [650.00,990.00,1768.00,1554.00,2.698]];

p=Math.floor(Math.random()*3);

function navNext()
{

for (temp = 0; temp <= 7 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}

var ca;
var questions=["In the experiment W<sub>1</sub> represents ",
				"Pycnometer is a laboratory device to measure ",
				"Pycnometer is used to determine specific gravity as it"];
				
var options2=[["weight of empty pycnometer","weight of Pycnometer and one third of pycnometer with fine aggregate","weight of fine aggregate","none of the above"],// weight of Pycnometer and one third of pycnometer with fine aggregate
			  ["Density ","Volume of Solid","Both A and B","None of the above"],//Both A and B
			  ["supplies warm air","is an airtight container large enough to take the sample","has Filter papers and funnel","All of the Above"]];//All of the Above
			  
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
	
	if(simsubscreennum==1)
	{
		document.getElementById('a2').style.visibility="hidden";
      	document.getElementById('nextButton').style.visibility="hidden";
      	document.getElementById('sand').style.visibility="visible";
		setTimeout(function()
		{
			setTimeout(function()
			{
			    if(document.getElementById('r').checked)
			    {
					flag=1;
			    }
			    else 
			    {
					flag=2;
				}
			},500);
			document.getElementById('nextButton').style.visibility="visible";
		}, 3000);
	}
	
	else if(simsubscreennum==2)
	{  

		refresh1();
		document.getElementById('sand').style.visibility="hidden";
	
		document.getElementById('nextButton').style.visibility="hidden";
		setTimeout(function()
		{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML=" ";
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a1').onclick=function() { step2(); };  
		},500);		
	}
	else if(simsubscreennum==3)
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
			setTimeout(function(){
		    document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		    document.getElementById('trial').innerHTML="Trial : " + repeat;
		    myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 270px; height: 40px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(180deg)";
		    document.getElementById('stl3-1').onclick=function() { step3(); };
			},800);
		}
		else
		{
			refresh1();
			document.getElementById('a3').onclick="";
            document.getElementById('a3').style.visibility="visible";
            document.getElementById('stl3-1').style.visibility="visible";
			document.getElementById('nob3-1').style.visibility="visible";
			document.getElementById('canvas6').style.visibility="hidden";
			document.getElementById('can6-1').style.visibility="hidden";
            document.getElementById('can6-2').style.visibility="hidden";
            document.getElementById('can6-3').style.visibility="hidden";
            document.getElementById("p6-1").style.visibility="hidden";
            document.getElementById("r1").style.visibility="hidden";
            document.getElementById('can6-4').style.visibility="hidden";
            document.getElementById('nextButton').style.visibility="hidden";
		    document.getElementById('trial').style="visibility:visible ;left:700px; top:100px; position: absolute;font-weight: bold;text-transform: uppercase;";
		    document.getElementById('trial').innerHTML="Trial : " + repeat;
			setTimeout(function(){
		    myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 270px; height: 40px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	        document.getElementById('stl3-1').onclick=function() { step3(); };
			},500);
		}
	}
	else if(simsubscreennum==4)
	{
		refresh1();
		document.getElementById('a5').onclick="";
        document.getElementById('a5').style.visibility="visible";
        document.getElementById('stl4-1').style.visibility="visible";
		document.getElementById('nob4-1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="hidden";
        document.getElementById('a4').style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById('wrs3').style.visibility="hidden";
            document.getElementById('rs4').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('wbs3').style.visibility="hidden";
            document.getElementById('bs4').style.visibility="visible";
		}
		setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('stl4-1').onclick=function() { step4(); };
		},800);
    }
	else if (simsubscreennum==5)
	{
		refresh1();
		document.getElementById('a7').onclick="";
        document.getElementById('a7').style.visibility="visible";
        document.getElementById('stl5-1').style.visibility="visible";
		document.getElementById('nob5-1').style.visibility="visible";
		document.getElementById('lcb4').style.visibility="hidden";
        document.getElementById('nextButton').style.visibility="hidden";
        document.getElementById('a6').style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById('wmr').style.visibility="hidden";
		}
		else if(flag==2)
		{
			document.getElementById('wmb').style.visibility="hidden";
		}
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('stl5-1').onclick=function() { step5(); };
	}
	else if (simsubscreennum==6)
	{
		refresh1();
        document.getElementById('a8').style.visibility="hidden";
		document.getElementById('wtr5').style.visibility="hidden";
        document.getElementById('lcb5').style.visibility="hidden";
		document.getElementById('can6-1').style.visibility="visible";
		document.getElementById('can6-2').style.visibility="visible";
		document.getElementById('can6-3').style.visibility="visible";
		document.getElementById('can6-4').style.visibility="visible";
		if(flag==1)
		{
			document.getElementById('can6-1').innerHTML="Weight of empty pycnometer(W<sub>1</sub>) ="+values[p][0]+" g"
			document.getElementById('can6-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate (W<sub>2</sub>) ="+values[p][1]+" g"
			document.getElementById('can6-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) ="+values[p][2]+" g"
			document.getElementById('can6-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) ="+values[p][3]+" g"
        }
		else if(flag==2)
		{
			document.getElementById('can6-1').innerHTML="Weight of empty pycnometer(W<sub>1</sub>) ="+values1[p][0]+" g"
			document.getElementById('can6-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate (W<sub>2</sub>) ="+values1[p][1]+" g"
			document.getElementById('can6-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) ="+values1[p][2]+" g"
			document.getElementById('can6-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) ="+values1[p][3]+" g"
        }
		calculateSpecificGravity();

        if(repeat>1)
		{
			calculateSpecificGravity2();
		}
		if(repeat < 2 && repeat>0)
		{
			mpointer=1;
			simsubscreennum=2;
		}
	}
	if(simsubscreennum==7)
	{
		document.getElementById("trial").style.visibility="hidden";
		document.getElementById("p6-2").style.visibility="hidden";
		document.getElementById("l6-2").style.visibility="hidden";
		document.getElementById("r1").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("can6-1").style.visibility="hidden";
		document.getElementById("can6-2").style.visibility="hidden";
		document.getElementById("can6-3").style.visibility="hidden";
		document.getElementById("can6-4").style.visibility="hidden";
		document.getElementById("output2").style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById("7-1").innerHTML=values[lastp][4];
			document.getElementById("7-3").innerHTML=values[p][4];
			average=(values[p][4]+values[lastp][4])/2;
		}
		if(flag==2)
		{
			document.getElementById("7-1").innerHTML=values1[lastp][4];
			document.getElementById("7-3").innerHTML=values1[p][4];
			average=(values1[p][4]+values1[lastp][4])/2;
		}
		document.getElementById("check3").onclick=function()
		{
			if(!document.getElementById("avg").value  || !document.getElementById("avg").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				avg = document.getElementById("avg").value;
				
				if(Math.round(avg) == Math.round(average))
				{
					document.getElementById("check3").style.visibility="hidden";
					document.getElementById("rw").style="color:#32CD32; font-size:22px; position:absolute;  left:510px; top:118px;";
					document.getElementById("rw").innerHTML="&#10004;";
					document.getElementById("rw").style.visibility="visible";
					document.getElementById("inferenceDiv"+flag).style.visibility="visible";
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

function step2()
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
			validateAnswer(1,2,"100px","150px");
			//document.getElementById('nextButton').style.visibility="visible";
        },500);
		if(flag==1)
		{
		    document.getElementById('can1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values[p][0]+"g";
		    document.getElementById('v1').innerHTML=+values[p][0]+".00g";
		}
		else if(flag==2)
		{
		    document.getElementById('can1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values1[p][0]+"g";
            document.getElementById('v1').innerHTML=+values1[p][0]+".00g";
        }
	}, 1200);
}

function step3()
{
	myStopFunction();
	document.getElementById('stl3-1').style.visibility="hidden";
	document.getElementById('stl3-2').style.visibility="visible";
    document.getElementById("stl3-2").onclick=""; 
    setTimeout(function(){
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute;left: 240px; top: 240px;  height: 40px; z-index: 10;";
	    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById("stl3-2").onclick=""; 
        document.getElementById('nob3-1').onclick=function() { step31(); };
    }, 1000);
}


function step31()
{
	myStopFunction();
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('nob3-2').style.visibility="visible";
    document.getElementById('a3').onclick=""; 
	document.getElementById('nob3-2').onclick=""; 
	document.getElementById("nob3-2").onclick=""; 
    document.getElementById("stl3-2").onclick="";
    setTimeout(function(){
		if(flag==1)
		{
	    document.getElementById('hand3r').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('hand3b').style.visibility="visible";
		}
    
    	
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 580px; top: 130px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
	
         
		if(flag==1)
		{
            document.getElementById('hand3r').onclick=function() { step32(); };
		}
		else if(flag==2)
		{
		    document.getElementById('hand3b').onclick=function() { step32(); };
		}
    }, 1400);
}

	
function step32()
{
    myStopFunction();
	if(flag==1)
	{
    document.getElementById('hand3r').style.transformOrigin = "100% 80%";
	document.getElementById('hand3r').style.animation = "valveturn-4 1.5s forwards ";
	}
	else if(flag==2)
	{
	document.getElementById('hand3b').style.transformOrigin = "100% 80%";
	document.getElementById('hand3b').style.animation = "valveturn-4 1.5s forwards ";
	}
	if(flag==1)
	{
		setTimeout(function()
		{
			document.getElementById('prs3').style.visibility="visible";
            document.getElementById('lrs3').style.visibility="visible";
	        document.getElementById('lrs3').style.animation = "water-5 1.5s 1 reverse";
	        document.getElementById('rs3').style.visibility="visible";
	        document.getElementById('rs3').style.animation = "water-5 1.8s 1 forwards";
            setTimeout(function()
			{	
			    document.getElementById('prs3').style.visibility="hidden";
	            document.getElementById('lrs3').style.visibility="hidden";
			},1000);
        },500);
	}
	else if(flag==2)
	{
		setTimeout(function()
	    {
			document.getElementById('pbs3').style.visibility="visible";
            document.getElementById('lbs3').style.visibility="visible";
	        document.getElementById('lbs3').style.animation = "water-5 1.5s 1 reverse";
	        document.getElementById('bs3').style.visibility="visible";
	        document.getElementById('bs3').style.animation = "water-5 1.8s 1 forwards";
		    setTimeout(function()
		    {	
		        document.getElementById('pbs3').style.visibility="hidden";
	            document.getElementById('lbs3').style.visibility="hidden";
		    },1000);
		},500);
	}
	setTimeout(function()
	{		
        if(flag==1)
		{			
             document.getElementById('hand3r').style.visibility="hidden";
		}
	    else if(flag==2)
		{
			 document.getElementById('hand3b').style.visibility="hidden";
		}
	},800);
	document.getElementById('stl3-2').onclick="";
	setTimeout(function(){
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	
	document.getElementById('nob3-2').onclick=function() { step33();}
	},1600);
}				
function step33()
{	  
    myStopFunction();  
	document.getElementById('nob3-2').style.visibility="hidden";
	document.getElementById('nob3-1').style.visibility="visible"
	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('nob3-1').onclick="";
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
       document.getElementById('a3').onclick=function() { step35(); }
	}, 1000);
}
function step35()
{
	myStopFunction();
	if(flag==1)
	{
		document.getElementById('a3').style.visibility="hidden";
		document.getElementById('stl3-1').style.visibility="hidden";
		document.getElementById('nob3-1').style.visibility="hidden";
		document.getElementById('rs3').style.visibility="hidden";
        document.getElementById('a4').style.visibility="visible";
	    document.getElementById('wrs3').style.visibility="visible";
		document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)="+values[p][1]+"g";
		document.getElementById('v3').innerHTML=+values[p][1]+".00g";
    }
	 else if(flag==2)
	{
		document.getElementById('stl3-1').style.visibility="hidden";
		document.getElementById('nob3-1').style.visibility="hidden";
		document.getElementById('bs3').style.visibility="hidden";
		document.getElementById('a3').style.visibility="hidden";
	    document.getElementById('a4').style.visibility="visible";
	    document.getElementById('wbs3').style.visibility="visible";
		document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)="+values1[p][1]+"g";
        document.getElementById('v3').innerHTML=+values1[p][1]+".00g";    
	}
	// if(repeat==2 || repeat==4)
	// {
	// var q0 = Object.create(questions);																								
	// generateQuestion(q0,"What is the weight of fine aggregate taken?:","",(values[p][1]-values[p][0]+121.3).toFixed(1)+"g", (values[p][1]-values[p][0]+28.5).toFixed(1)+"g", (values[p][1]-values[p][0]+129.1).toFixed(1)+"g",(values[p][1]-values[p][0]).toFixed(1)+"g",4,f2,160,190,180,160);
	// }
	// else
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
    document.getElementById('nob4-2').onclick=""; 
    document.getElementById("a5").onclick=""; 
	document.getElementById("stl4-2").onclick=""; 
    setTimeout(function()
	{
		document.getElementById('hand4').style.visibility="visible";
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
       document.getElementById('hand4').onclick=function() { step42(); };
    }, 1400);
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
			document.getElementById('w4').style.visibility="hidden";
            document.getElementById('cb4').style.visibility="visible";
            if(flag==1)
		    {
				document.getElementById('rs4').style.visibility="hidden";
                document.getElementById('riv').style.visibility="visible";
            }
		    else if(flag==2)
		    {
				document.getElementById('bs4').style.visibility="hidden";
                document.getElementById('bch').style.visibility="visible";
            }
		},1000);
    },500);
	setTimeout(function()
	{				  
        document.getElementById('hand4').style.visibility="hidden";
	},800);
	setTimeout(function(){
	document.getElementById('stl4-2').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    
	document.getElementById('nob4-2').onclick=function() { step43();}
	},1500);
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
    
        document.getElementById('a5').onclick=function() { step45(); }
	}, 1000);
}
 
function step45()
{
	myStopFunction();
	if(flag==1)
	{
		document.getElementById('a5').style.visibility="hidden";
		document.getElementById('stl4-1').style.visibility="hidden";
		document.getElementById('nob4-1').style.visibility="hidden";
		document.getElementById('riv').style.visibility="hidden";
        document.getElementById('lcb4').style.visibility="visible";
        document.getElementById('cb4').style.visibility="hidden";
        document.getElementById('a6').style.visibility="visible";
	    document.getElementById('wmr').style.visibility="visible";
		document.getElementById('can4').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>)="+values[p][2]+"g";
        document.getElementById('v4').innerHTML=+values[p][2]+".00g";
	}
	else if(flag==2)
	{
		document.getElementById('stl4-1').style.visibility="hidden";
		document.getElementById('nob4-1').style.visibility="hidden";
		document.getElementById('bch').style.visibility="hidden";
        document.getElementById('lcb4').style.visibility="visible";
        document.getElementById('cb4').style.visibility="hidden";
        document.getElementById('a5').style.visibility="hidden";
	    document.getElementById('a6').style.visibility="visible";
	    document.getElementById('wmb').style.visibility="visible";
        document.getElementById('can4').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>)="+values1[p][2]+"g";
        document.getElementById('v4').innerHTML=+values1[p][2]+".00g";
	}
		// if(repeat==1 || repeat==3)
	// {
	// var q1 = Object.create(questions);																								
	// generateQuestion(q1,"What is the amount of water added?:","",(values[p][2]-values[p][1]+20.3).toFixed(1)+"g", (values[p][2]-values[p][1]).toFixed(1)+"g",(values[p][2]-values[p][1]+127.1).toFixed(1)+"g",(values[p][2]-values[p][1]+87.5).toFixed(1)+"g",2,f2,160,190,180,140);
// }
// else
	if(repeat==1)
	{
		validateAnswer(0,1,"50px","100px");
	}
	else
	{
		document.getElementById('nextButton').style.visibility="visible";
	}
}
		
function step5()
{
	myStopFunction();
	document.getElementById('stl5-1').style.visibility="hidden";
	document.getElementById('stl5-2').style.visibility="visible";
    document.getElementById("stl5-2").onclick=""; 
    setTimeout(function()
	{
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 240px; height: 40px; z-index: 10;";
	    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	    // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('nob5-1').onclick=function() { step51(); };
    }, 1200);
}


function step51()
{
	myStopFunction();
	document.getElementById('nob5-1').style.visibility="hidden";
	document.getElementById('nob5-2').style.visibility="visible";
    document.getElementById("a7").onclick="";
	document.getElementById('nob5-2').onclick="";
    document.getElementById("stl5-2").onclick=""; 	
    setTimeout(function()
	{
		document.getElementById('hand5').style.visibility="visible";
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
	    document.getElementById('hand5').onclick=function() { step52(); };
    }, 1400);
}
function step52()
{
    myStopFunction();
    document.getElementById('hand5').style.transformOrigin = "100% 80%";
	document.getElementById('hand5').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw5').style.visibility="visible";
        document.getElementById('lw5').style.visibility="visible";
	    document.getElementById('lw5').style.animation = "water-5 1.5s 1 reverse";
	    document.getElementById('w5').style.visibility="visible";
	    document.getElementById('w5').style.animation = "water-5 1.8s 1 forwards";
        setTimeout(function()
		{	
		    document.getElementById('pw5').style.visibility="hidden";
	        document.getElementById('lw5').style.visibility="hidden";
			document.getElementById('cb5').style.visibility="visible";
	    },1000);

	},500);
	setTimeout(function()
	{				  
        document.getElementById('hand5').style.visibility="hidden";
	},800);
	document.getElementById('w5').style.visibility="hidden";
	document.getElementById('stl5-2').onclick="";
	setTimeout(function(){
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";	
	document.getElementById('nob5-2').onclick=function() { step53();}
	},1600);
}		
function step53()
{	  
    myStopFunction();  
	document.getElementById('nob5-2').style.visibility="hidden";
	document.getElementById('nob5-1').style.visibility="visible";
	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('nob5-1').onclick="";
    document.getElementById('stl5-2').onclick=function() { step54();}
	},500);
}				
function step54()
{
    myStopFunction();  
	document.getElementById('stl5-2').style.visibility="hidden";
	document.getElementById('stl5-1').style.visibility="visible";
	document.getElementById('nob5-1').onclick="";
	document.getElementById('stl5-1').onclick="";
	setTimeout(function()
	{
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";			
	document.getElementById('a7').onclick=function() { step55(); }
	},1000);
}
 
function step55()
{
	myStopFunction();
	    document.getElementById('a7').style.visibility="hidden";
		document.getElementById('w5').style.visibility="hidden";
        document.getElementById('cb5').style.visibility="hidden";

		document.getElementById('stl5-1').style.visibility="hidden";
		document.getElementById('nob5-1').style.visibility="hidden";

        document.getElementById('lcb5').style.visibility="visible";

	    document.getElementById('a8').style.visibility="visible";
	    document.getElementById('wtr5').style.visibility="visible";
		if(flag==1)
		 {
		document.getElementById('can5').innerHTML="Weight of pycnometer + water(W<sub>4</sub>)="+values[p][3]+"g";
		document.getElementById('v5').innerHTML=+values[p][3]+".00g";
		 }
		 else if(flag==2)
		 {
			document.getElementById('can5').innerHTML="Weight of pycnometer + water(W<sub>4</sub>)="+values1[p][3]+"g";
            document.getElementById('v5').innerHTML=+values1[p][3]+".00g";
         }
		 if(repeat==1)
		 {
			 validateAnswer(2,3,"50px","100px");
		 }
		 else
		 {
			document.getElementById('nextButton').style.visibility="visible";
		 }
}
		

function refresh1()
{
	document.getElementById('hand3r').style.transformOrigin = "";
	document.getElementById('hand3r').style.animation = "";
	document.getElementById('hand3b').style.transformOrigin = "";
	document.getElementById('hand3b').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand5').style.transformOrigin = "";
	document.getElementById('hand5').style.animation = "";
	document.getElementById('arrow1').style.animation = "";
    document.getElementById('sand').style.transformOrigin = "";

	document.getElementById('prs3').style.transformOrigin = "";
	document.getElementById('prs3').style.animation = "";
	document.getElementById('lrs3').style.transformOrigin = "";
	document.getElementById('lrs3').style.animation = "";
	document.getElementById('pbs3').style.transformOrigin = "";
	document.getElementById('pbs3').style.animation = "";
	document.getElementById('lbs3').style.transformOrigin = "";
	document.getElementById('lbs3').style.animation = "";
	document.getElementById('lw4').style.transformOrigin = "";
	document.getElementById('lw4').style.animation = "";
	document.getElementById('pw4').style.transformOrigin = "";
	document.getElementById('pw4').style.animation = "";
	document.getElementById('pw5').style.transformOrigin = "";
	document.getElementById('pw5').style.animation = "";
	document.getElementById('bs3').style.animation = "";
    document.getElementById('rs3').style.transformOrigin = "";
	
	document.getElementById('bch').style.transformOrigin = "";
	document.getElementById('bch').style.animation = "";
	document.getElementById('riv').style.transformOrigin = "";
	document.getElementById('riv').style.animation = "";
	document.getElementById('w4').style.animation = "";
    document.getElementById('w4').style.transformOrigin = "";
	
	document.getElementById('pw5').style.transformOrigin = "";
	document.getElementById('pw5').style.animation = "";
	document.getElementById('lw5').style.transformOrigin = "";
	document.getElementById('lw5').style.animation = "";
	document.getElementById('w5').style.animation = "";
    document.getElementById('w5').style.transformOrigin = "";
	
	document.getElementById('can1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)=";
	document.getElementById('can4').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) =  ";
	document.getElementById('can5').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	
	document.getElementById('can6-1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can6-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)= ";
	document.getElementById('can6-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) =  ";
	document.getElementById('can6-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";

	document.getElementById('v1').innerHTML=" ";
	document.getElementById('v3').innerHTML=" ";
	document.getElementById('v4').innerHTML=" ";
	document.getElementById('v5').innerHTML=" ";
		
	document.getElementById('nextButton').style.visibility="hidden";	
}

function stepstop()
{
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
	if(flag==1)
	{
		value=values[p][4];
	}
	if(flag==2)
	{
		value=values1[p][4];
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
			if(Math.round(n) == Math.round(values))
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
			document.getElementById("output").style.visibility="hidden";
			document.getElementById("check").style.visibility="hidden";
			document.getElementById("result").style.visibility="hidden";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
			document.getElementById("form").style.visibility="hidden";
			document.getElementById("formula").style.visibility="hidden";
			document.getElementById("6-1").style.visibility="hidden";
			document.getElementById("p6-1").innerHTML="Specific gravity of fine aggregate = "+value;
			document.getElementById("p6-1").style.visibility="visible";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
}	

function calculateSpecificGravity2()
{
	document.getElementById("l6-1").style.visibility="hidden";
	document.getElementById("6-2").style.visibility="visible";
	document.getElementById("l6-2").style.visibility="visible";
	if(flag==1)
	{
		value=values[p][4];
	}
	if(flag==2)
	{
		value=values1[p][4];
	}
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
			if(Math.round(n2) == Math.round(value))
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
			document.getElementById("l6-2").style.visibility="hidden";
			document.getElementById("check2").style.visibility="hidden";
			document.getElementById("result2").style.visibility="hidden";
			document.getElementById("w2").style.visibility="hidden";
			document.getElementById("form2").style.visibility="hidden";
			document.getElementById("formula2").style.visibility="hidden";
			document.getElementById("6-2").style.visibility="hidden";
			document.getElementById("p6-2").innerHTML="Specific gravity of fine aggregate = "+value;
			document.getElementById("p6-2").style.visibility="visible";
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
		if(flag==1)
		{
			document.getElementById("ans").innerHTML="Wrong! Answer is 2.6 - 2.85";
		}
		if(flag==2)
		{
			document.getElementById("ans").innerHTML="Wrong! Answer is 2.4-2.6";
		}
	}
	if(flag==1)
	{
		str="river sand";
	}
	if(flag==2)
	{
		str="beach sand";
	}
	setTimeout(function()
	{	
		document.getElementById("inferenceDiv"+flag).style.visibility="hidden";
		if(flag==1)
		{
			if(average>=2.6 && average<=2.85)
			{
				document.getElementById("infAns").innerHTML="As per IS 2270, the specific gravity of "+str+" lies between 2.6 - 2.85. The specific gravity of given "+str+" sample is "+average.toFixed(2)+". Hence it can be used for marine concrete applications.";
			}
			else 
			{
				document.getElementById("infAns").innerHTML="As per IS 2270, the specific gravity of "+str+" lies between 2.6 - 2.85. The specific gravity of given "+str+" sample is "+average.toFixed(2)+". Hence it can be used for marine concrete applications.";
			}
		}
		if(flag==2)
		{
			if(average>=2.4 && average<=2.6)
			{
				document.getElementById("infAns").innerHTML="As per IS 2270, the specific gravity of "+str+" lies between 2.6 - 2.85. The specific gravity of given "+str+" sample is "+average.toFixed(2)+". It is not suitable for heavy constructions and marine structures. Used only to calculate the overburden pressure on marine offshore structures.";
			}
			else 
			{
				document.getElementById("infAns").innerHTML="As per IS 2270, the specific gravity of "+str+" lies between 2.6 - 2.85. The specific gravity of given "+str+" sample is "+average.toFixed(2)+". It is not suitable for heavy constructions and marine structures. Used only to calculate the overburden pressure on marine offshore structures. ";
			}
		}
		$("#infAns").fadeIn(750);
	},1000);
}					
