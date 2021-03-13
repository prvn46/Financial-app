
	var count=0;
		
	

	function valuecheck()
	{


	var check1=document.getElementById("principal1").value;
	var check2=(document.getElementById("intrest1").value);
	var check3=document.getElementById("term").value;
	var check4=document.getElementById("termy").value;	

	
	if(check1==""||check2==""|| (check3=="" && check4=="")){
	alert("Enter some input:");
	hidetb();
	reloadcontent();

	}

	
	else if(count>0)
		{ 
	
			alert("Reset values");
			hidetb();
			reloadcontent();
			
	
	}
	
	else if(check2>100||isNaN(check1)||isNaN(check2)||isNaN(check3))
	{
			
			hidetb();
			alert("Enter valid input"); 
			reloadcontent();
		
	
	}
	
	else if(check3!=="")
	{
			document.getElementById("termy").value=(check3/12).toFixed(2);
	}
	
	else
	{
	document.getElementById("term").value=check4*12;
	}

	}


	function cal(){

	document.getElementById("table-container").style.display="block";
	valuecheck();
		
		


	var bal=(document.getElementById("principal1").value);
	var irate= (document.getElementById("intrest1").value/100.0);
	var loanperiod=parseFloat(document.getElementById("term").value);
	
	//irate-intrest rate, mrate-monthly intrest rate
	var mrate=(irate/12);
	mrate.toFixed(2);
	//payamt-payment amount,begamt-begining balance
	var payamt=bal*(mrate/(1-Math.pow(
    1+mrate, -loanperiod)));
	var begamt=bal;
	



	for(var i=0;i<loanperiod;i++){

	var intrst=0;
	var pma=0;
	



	document.getElementById("num").innerHTML=document.getElementById("num").innerHTML+"Month "+(i+1)+"<br>";
	
	document.getElementById("payment").innerHTML=document.getElementById("payment").innerHTML+"&#8377;"+payamt.toFixed(2)+"<br>";


	intrst=begamt*mrate;
	
	pma=payamt-intrst;
	
	document.getElementById("intrest").innerHTML=document.getElementById("intrest").innerHTML+"&#8377;"+intrst.toFixed(2)+"<br>";

	
	document.getElementById("principal").innerHTML=document.getElementById("principal").innerHTML+"&#8377;"+pma.toFixed(2)+"<br>";
	
	
	begamt=begamt-pma;

	document.getElementById("remaining").innerHTML=document.getElementById("remaining").innerHTML+"&#8377;"+begamt.toFixed(2)+"<br>";
	

	}
	count++;
	}

	function reloadcontent(){
    window.location.reload();
    count=0;
	} 
	function hidetb() {
	document.getElementById("table-container").style.display="none";
	}


	