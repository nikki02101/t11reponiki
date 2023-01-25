<script>

// 1)feladat
//Készíts egy olyan kódot mely kiírja az adott file készítőjének 
//•Nevét
//•Csoportjának azonosítóját (melyik #Teamtagja)
//•3.-4. és 5. sorpedig az legyen, mennyire érti a HTML, CSS és 
//jelenlegi JavaScript tananyagokat1-100-ig(pl.: html:90)

document.write(" név: Matus Nikolett <br>")
document.write(" csop: #Team11 <br>")
document.write("HTML 90% <br>")
document.write(" CSS 90% <br>")
document.write(" JS 50% <br>")
document.write("<hr>");

//2)feladatKészíts egy olyan programot, mely bekér egy számot és a 
//hatványozás mértékét, éskiírjaannak hatványát.pl.: 2 és 3,azazkettő a harmadikon,
//azaz az eredmény 8 lesz!

let szamEgy=prompt ("Adj meg egy 0-nál nagyobb számot");
let hatvany=prompt("Adj meg hányadik hatványt keresed");
let eredmeny=szamEgy**hatvany;

document.write(`A ${szamEgy}<sup>${hatvany}</sup> -dikon eredménye= ${eredmeny}<br>`);

document.write("<hr>");
//3)feladatKészíts egy programot, ami egy adott intervallumban generál ki páros számot, 
//és írjaki az értékét, a határétéket te magad állíthatod be,bekérés,alapján.

let also=Number(prompt("Add meg az intervallum elejét"));
let felso=Number(prompt("Add meg az intervallum végét"));
let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
if(generaltParosSzam%2==0){
	document.write("Az intervallumban generált random páros szám:"+generaltParosSzam);
}

else{

	document.write(`A generált random szám: ${generaltParosSzam-1}`);
}

document.write("<hr>");
//4)feladat
//Készíts egy programot, ami bekér egy életkort 1-120között és ennek függvényében 
//megjeleníti az illető besorolását. 120 kor felettvagy 0 alatt, pedig hibát kapjunk!
//•Kisgyermekkor:0-6 év
//•Gyermekkor: 6-12 év
//•Serdülőkor: 12-16 év
//•Ifjúkor: 16-20 év
//•Fiatal felnőttkor: 20-30 év
//•Felnőttkor: 30-60
//•Aggkor: 60-tól


let eletkorod=prompt("Add meg az életkorod");

if (eletkorod<=0){
	document.write("hibás adat!");
}
    
else if (eletkorod<6){
	document.write(`A ${eletkorod} korú személy Kisgyermek`);
}

else if (eletkorod<12){
	document.write(`A ${eletkorod} korú személy Gyermek`);
}
else if (eletkorod<16){
	document.write(`A ${eletkorod} korú személy Serdülő`);
}
else if (eletkorod<20){
	document.write(`A ${eletkorod} korú személy Ifjú`);
}
else if (eletkorod<30){
	document.write(`A ${eletkorod} korú személy Fiatal felnőtt`);
}
else if (eletkorod<60){
	document.write(`A ${eletkorod} korú személy Felnőtt`);
}
else if (eletkorod<120){
	document.write(`A ${eletkorod} korú személy Agg korú`);
}
else {
	document.write("hibás adat!")
}

document.write("<hr>");


//5. Feladat
//Készíts egy olyan kódot, mely paraméterként bekér egy számot és egy osztót és kiírjaszövegesen,
//hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla



let szam=prompt("Add meg az osztandó számot:");
let oszto=prompt("Add meg az osztót:");

if(szam%oszto==0){
	document.write(`A ${szam}:${oszto} maradék nélküli osztást eredményez`);
}

else{

	document.write(`A ${szam}:${oszto} nem eredményez maradék nélküli osztást`);
}

document.write("<hr>");

//6. feladat
//Készíts egy programot,ami kiírja az első 10 négyzetszámot!

document.write(" A 10 első négyzetszám:");
for(let i=1;i<=10;i++){
	document.write(` ${i}<sup>${i}</sup>=${i*i},`);
}




</script>