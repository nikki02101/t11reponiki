<script>
//Matus Niki
//Team11_Junior Frontwend

function hosszEllenor(szoveg)
{
	let vanENyolcKarakter=szoveg.length;
	if(vanENyolcKarakter>8){
		return true;
    }
    
	else{
		return false;
	}
}

document.write("Hosszellenőr függvény eredménye:  "+(hosszEllenor("Feladatteszt")));
document.write("<hr>");





function tajSzamEllenor(tajszam)
{
	if(tajszam.length==9){   
    	let parosak=(Number(tajszam[1])+Number(tajszam[3])+Number(tajszam[5])+Number(tajszam[7]))*7;
        let paratlanok=(Number(tajszam[0])+Number(tajszam[2])+Number(tajszam[4])+Number(tajszam[6]))*3;
    	if((parosak+paratlanok)%10==tajszam[8]){
    		return true;
    	}
        else{
    		return false;
    	}	
    }	
  	return false;
}
document.write("A tajszámellenőr függvény eredménye:"+(tajSzamEllenor("040655330")));
document.write("<hr>");

function tombTerjedelem(vizsgaltTomb) 
{
let minErtek=vizsgaltTomb[0];
for(let i=1;i<vizsgaltTomb.length;i++){
	if(vizsgaltTomb[i]<minErtek){
    	minErtek=vizsgaltTomb[i];}
    }
   
let maxErtek=vizsgaltTomb[0];
for(let i=1;i<vizsgaltTomb.length;i++){
if(vizsgaltTomb[i]>maxErtek){
	maxErtek=vizsgaltTomb[i];}
	}
   
return maxErtek-minErtek;

}
let vizsgaltTomb=[3, 5, 10, 16, 9];
document.write("A tömb terjedelme: "+tombTerjedelem(vizsgaltTomb));
document.write("<hr>");




const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
];

function legidosebbDolgozo(Dolgozok)
{
	let LegidosebbIndexe=0;
    for(let i=0; i<Dolgozok.length; i++)
    {
    	if(Dolgozok[i].kor>Dolgozok[LegidosebbIndexe].kor)
        {
        	LegidosebbIndexe=i;
        }
    }
	return LegidosebbIndexe;
}

document.write(legidosebbDolgozo(Dolgozok));
document.write("<hr>");

function fizetesEmeles(Dolgozok)
{
	let atlagFizetes=0;
	for(let i=0; i<Dolgozok.length; i++)
	{
		atlagFizetes+=Dolgozok[i].fizetes;
	}
		return Math.round(atlagFizetes/Dolgozok.length);

	for(let i=0; i<Dolgozok.length;i++)
    {
    	if(Dolgozok[i].fizetes<atlagFizetes/Dolgozok.length)
        {
        	let emelt=MAth.round(Dolgozok[i].fizetes*1,1);
        }
    }
	return Dolgozok


}

document.write(fizetesEmeles(Dolgozok));


</script>
