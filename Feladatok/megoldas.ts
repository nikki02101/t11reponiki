export{};
function DiakInfo(nev:string,csoport:number,típus:boolean):void{
    if(típus==true){
        console.log(nev+" Team"+csoport+" Junior Frontend");
    }
    else{
        console.log(nev+" Team"+csoport+" Webprogramozó");
    }
}

DiakInfo("Matus Nikolett", 11, true);