function getCorona(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var data = JSON.parse(xhttp.responseText);
            document.getElementById('text0').innerHTML = data.lastUpdate;
            document.getElementById('text1').innerHTML = data.jumlahKasus;
            document.getElementById('text2').innerHTML = data.perawatan;
            document.getElementById('text3').innerHTML = data.meninggal;
        }
    }


    xhttp.open('get', "https://indonesia-covid-19.mathdro.id/api/");
    xhttp.send();
}

getCorona();





 
