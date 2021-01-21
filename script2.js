function getCorona2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            for (var i = 0; i < data.data.length; i++) {
                //buat div content
                var newdiv = document.createElement("div");
                newdiv.className = "content";

                //buat <h3></h3>
                var newh3 = document.createElement("h3");
                newh3.id = "province-" + i;
                newh3.className = "province";
                newh3.textContent = data.data[i].provinsi;
                newdiv.appendChild(newh3);

                var newbr = document.createElement("br");
                newdiv.appendChild(newbr);

                //buat span
                var newspan = document.createElement("span");
                newspan.id = "positiveProvince-" + i;
                newspan.className = "positiveProvince";

                newspan.textContent = data.data[i].kasusPosi;
                newdiv.appendChild(newspan);

                var newspan = document.createElement("span");
                newspan.className = "provinceall";
                var newtext = document.createTextNode(" Positive");
                newspan.appendChild(newtext);
                newdiv.appendChild(newspan);

                //buat hr
                var newhr = document.createElement("hr");
                newdiv.appendChild(newhr);

                //buat span
                var newspan = document.createElement("span");
                newspan.id = "recoveredProvince-" + i;
                newspan.className = "recoveredProvince";
                newspan.textContent = data.data[i].kasusSemb;
                newdiv.appendChild(newspan);

                var newspan = document.createElement("span");
                newspan.className = "provinceall";
                var newtext = document.createTextNode(" Recovered");
                newspan.appendChild(newtext);
                newdiv.appendChild(newspan);

                //buat hr
                var newhr = document.createElement("hr");
                newdiv.appendChild(newhr);

                //buat span
                var newspan = document.createElement("span");
                newspan.id = "deathProvince-" + i;
                newspan.className = "deathProvince";
                newspan.textContent = data.data[i].kasusMeni;
                newdiv.appendChild(newspan);

                var newspan = document.createElement("span");
                newspan.className = "provinceall";
                var newtext = document.createTextNode(" Death");
                newspan.appendChild(newtext);
                newdiv.appendChild(newspan);

                var contents = document.getElementById("container-body");
                contents.appendChild(newdiv);
            }

        }
    }

    xhttp.open('get', "https://indonesia-covid-19.mathdro.id/api/provinsi");
    xhttp.send();
}

getCorona2();
