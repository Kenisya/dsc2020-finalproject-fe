var keywords = document.getElementById("keyword");
var containerBody = document.getElementById("container-body");

function showData(data){
  return `<div class="content">
  <div class="text">
  <h3 class="province">${data.provinsi}</h3>
  <br>
  <span class="positiveProvince">${data.kasusPosi} </span><span class="provinceall"> Positive</span> 
  <hr>
  <span class="recoveredProvince">${data.kasusSemb}</span><span class="provinceall"> Recovered</span> 
  <hr>
  <span class="deathProvince">${data.kasusMeni}</span><span class="provinceall"> Death</span> 
  </div>
  </div>`;
}

keywords.addEventListener("keyup", function (e) {
  containerBody.innerHTML = '';
  // Fetch
  fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((response) => response.json())
    .then((response) => {
      var search = e.target.value.toLowerCase();
      var Datacovid = response.data;

      Datacovid.filter(response => {
        if (response.provinsi.toLowerCase().includes(search)) {
          console.log(showData(response));
          containerBody.innerHTML += showData(response);
        }
      })
    })
});




