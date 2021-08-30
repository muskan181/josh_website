var sindex=1;
var eindex=4;
function sliding(){
    var dis=document.getElementById(sindex);
    var no=document.getElementById(eindex);
    dis.style.display="none";
    no.style.display="block";
    console.log(sindex);
    console.log(eindex);

    if(eindex==6){
        eindex=1;
    }
    else{
        eindex++;
    }
    if(sindex==6){
        sindex=1;
    }
    else{
        sindex++
    }
}
        