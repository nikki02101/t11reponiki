<script>

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

function Kiirato(objektum)
{
	for(let i=0;i<objektum.length;i++)
    {
    	document.write("<br> Név: "+objektum[i].nev);
        document.write("<br> Kor: "+objektum[i].kor);
   		document.write("<br> Új bér: "+objektum[i].fizetes);
        document.write("<br> Beosztás: "+objektum[i].beosztas);
        document.write("<hr>");
    }
}

//Készíts egy függvényt, mely paraméterként bekér egy objektumot, melyben biztosan tartozikegy[fizetes] 
//tulajdonság minden elemhez, melyben meghatározza mennyi az átlagfizetés 



function atlagFizu(Dolgozok)
{
	let osszesFizetes=0;
	for(let i=0; i<Dolgozok.length; i++)
	{
		osszesFizetes+=Dolgozok[i].fizetes;
	}
	return Math.round(osszesFizetes/Dolgozok.length);
}
document.write("A dolgozók átlegfizetése:  "+atlagFizu(Dolgozok)+" Ft");






document.write("<hr>");
document.write("<hr>");


document.write("Béradatok: ");
document.write("<hr>");
//Majd az átlag fizetés alatti emberek fizetésétemeli 10%-kal. 
//Ezekután visszaadja a módosított objektumot a programnak.A függvényt úgy készítse el, 
//hogy bármilyen [fizetes] attribútummal rendelkező paraméter esetén helyes megoldás adjon.



let atlagFizetes=atlagFizu(Dolgozok);


function fizetesEmeles(vizsgaltObjektum)
{
	let eredmenyTomb=[];
	for(let i=0;i<vizsgaltObjektum.length;i++)
    {	
    	let eredmenyObjektum={};
    	eredmenyObjektum.nev=vizsgaltObjektum[i].nev;
		eredmenyObjektum.kor=vizsgaltObjektum[i].kor;
        
		eredmenyObjektum.fizetes=vizsgaltObjektum[i].fizetes;        
       	if(vizsgaltObjektum[i].fizetes<atlagFizetes)
        {
        	eredmenyObjektum.fizetes=Math.round(vizsgaltObjektum[i].fizetes*1.1);
        }
        
        eredmenyObjektum.beosztas=vizsgaltObjektum[i].beosztas;
        eredmenyTomb.push(eredmenyObjektum);
    }   
        return eredmenyTomb;
}




Kiirato(fizetesEmeles(Dolgozok));
document.write("<hr>");

</script>
