<script>
//Matus Nikolett, Junior Frontend, Team 11

function keszito(){
	document.write("Matus Nikolett<br> Junior frontend<br> #Team11");
}
keszito();
 
document.write("<hr>")

function hatvanyozo(szam,hatvany){
	let eredmeny=szam**hatvany
    return eredmeny;
}

document.write(hatvanyozo(5,3));

document.write("<hr>")

function parosLetrehoz(also,felso){
	let randomSzam=(Math.round(Math.random()*felso-also))+also;
       if(randomSzam%2==0){
    	return randomSzam
    }
    else{
    	return randomSzam+1
    }
}

document.write(parosLetrehoz(1,100));

document.write("<hr>")

function testTomegIndex(suly,magassag){
	let TTI=suly/(magassag*magassag)
   
    if(TTI<16){
		return "sulyosSovanysag";
	}
	else if(TTI<17){
		return "mersekeltSovanysag";
	}
	else if(TTI<18.5){
		return "enyheSovanysag";
	}
	else if(TTI<25){
		return "normalisTestsuly";
	}
	else if(TTI<30){
		return "tulsulyos";
	}
	else if(TTI<35){
		return "IfokuElhizas";
	}
	else if(TTI<40){
		return "IIfokuElhizas";
	}
	else{
		return "IIIfokuSulyosElhizas";
	}

}
document.write(testTomegIndex(95,1.5));

document.write("<hr>")

function egeszOsztoE(szam,oszto){
	
   	if(szam%oszto==0){
    	return true;
    }
    
    else{
    	return false;
    }
      
}
document.write(egeszOsztoE(25,5));    

</script>