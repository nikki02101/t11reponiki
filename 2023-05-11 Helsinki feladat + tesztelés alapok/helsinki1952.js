var eredmenyek = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];
function Objektumfeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var darabolandoSor = feltoltendoElem[i].split(" ");
        var objektum = {
            helyezes: Number(darabolandoSor[0]),
            sportolokSzama: Number(darabolandoSor[1]),
            sport: darabolandoSor[2],
            versenyszam: darabolandoSor[3]
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var helsinki1952Adatok = Objektumfeltolto(eredmenyek);
function AdatKiiro(adatok) {
    for (var i = 0; i < adatok.length; i++) {
        console.log(adatok[i].helyezes + ":" + adatok[i].sportolokSzama + ":" + adatok[i].sport + ":" + adatok[i].versenyszam);
    }
}
AdatKiiro(helsinki1952Adatok);
var pontszerzoHelyekSzama = helsinki1952Adatok.length;
console.log("3.feladat:");
console.log("Pontszerző helyezések száma:" + pontszerzoHelyekSzama);
function ErmekSzama(adatok) {
    var arany = 0;
    var ezust = 0;
    var bronz = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            arany++;
        }
        else if (adatok[i].helyezes == 2) {
            ezust++;
        }
        else if (adatok[i].helyezes == 3) {
            bronz++;
        }
        else { }
    }
    var osszesen = arany + ezust + bronz;
    console.log("4. feladat:");
    console.log("Arany " + arany);
    console.log("Ezüst: " + ezust);
    console.log("Bronz " + bronz);
    console.log("Összesen:" + osszesen);
}
ErmekSzama(helsinki1952Adatok);
function olimpiaiPontokSzama(adatok) {
    var elso = 0;
    var masodik = 0;
    var harmadik = 0;
    var negyedik = 0;
    var otodik = 0;
    var hatodik = 0;
    for (var i = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            elso++;
        }
        else if (adatok[i].helyezes == 2) {
            masodik++;
        }
        else if (adatok[i].helyezes == 3) {
            harmadik++;
        }
        else if (adatok[i].helyezes == 4) {
            negyedik++;
        }
        else if (adatok[i].helyezes == 5) {
            otodik++;
        }
        else if (adatok[i].helyezes == 6) {
            hatodik++;
        }
        else { }
    }
    var olimpiaiPontokSzama = elso * 7 + masodik * 5 + harmadik * 4 + negyedik * 3 + otodik * 2 + hatodik * 1;
    console.log("5. feladat:");
    console.log("Olimpiai pontok száma:" + olimpiaiPontokSzama);
}
olimpiaiPontokSzama(helsinki1952Adatok);
