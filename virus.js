// start fetch data API Covid Indonesia
fetch("https://covid19.mathdro.id/api/countries/Indonesia")
  .then((res) => res.json())
  .then((data) => {
    let dataIndo = document.querySelector(".list-covidIndo");

    dataIndo.innerHTML += `
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-10 p-4">
        <div class="card bg-dark border-white mx-sm-4 p-4">
            <div class="card border-mute shadow rounded bottom-100 border-primary text-dark p-2 mx-sm-2 p-2" ><span class="text-dark text-center mt-3"><h2>INDONESIA</h2></span></div>
                <div class="list-covidIndo">
                    <div class="text-info text-center mt-3"><h3>${data.confirmed.value}</h3></div>
                    <div class="text-info text-center mt-2"><h3>Kasus</h3></div>
                    <div class="text-danger text-center mt-3"><h3>${data.deaths.value}</h3></div>
                    <div class="text-danger text-center mt-2"><h3>Meninggal</h3></div>
                    <div class="text-success text-center mt-3"><h3>${data.recovered.value}</h3></div>
                    <div class="text-success text-center mt-2"><h3>Sembuh</h3></div>
                </div>
        </div>
    </div>
</div>
</div>
    `;
  });
// Finish fetch data API Covid Indonesia

// Start fetch data API Covid Global 01
fetch("https://covid19.mathdro.id/api/")
  .then((res) => res.json())
  .then((data) => {
    let dataGlobal = document.querySelector(".list-covidGlobal");

    dataGlobal.innerHTML += `
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-10 p-4">
        <div class="card bg-dark border-white mx-sm-4 p-4">
            <div class="card border-mute shadow rounded bottom-100 border-primary text-dark p-2 mx-sm-2 p-2" ><span class="text-dark text-center mt-3"><h2>GLOBAL</h2></span></div>
                <div class="list-covidGlobal">
                    <div class="text-info text-center mt-3"><h3>${data.confirmed.value}</h3></div>
                    <div class="text-info text-center mt-2"><h3>Kasus</h3></div>
                    <div class="text-danger text-center mt-3"><h3>${data.deaths.value}</h3></div>
                    <div class="text-danger text-center mt-2"><h3>Meninggal</h3></div>
                    <div class="text-success text-center mt-3"><h3>${data.recovered.value}</h3></div>
                    <div class="text-success text-center mt-2"><h3>Sembuh</h3></div>
                </div>
        </div>
    </div>
</div>
</div>
    `;
  });
// // Finish fetch data API Covid Global 01

// Fetch Data API Covid Global's Search
const getDataGlobal = async () => {
  const response = await fetch("https://covid19.mathdro.id/api/confirmed");
  result = await response.json();
  alldataCountry(result);
  console.log(response);
};
let result = [];

// Tampilkan data Covid dengan DOM js
const listGlobal = document.querySelector(".covidGlobal");
const alldataCountry = (countries) => {
  const objectData = countries
    .map((data) => {
      return `
    <div class="col">
            <div class="row justify-content-center">
            <div class="col-md-10 p-4">
                <div class="card bg-dark border-white mx-sm-4 p-4">
                    <div class="card border-mute shadow rounded bottom-100 border-primary text-dark p-2 mx-sm-2 p-2" ><span class="text-dark text-center mt-3"><h2>${data.countryRegion}</h2></span></div>
                        <div class="covidGlobal">
                            <div class="text-info text-center mt-3"><h3>${data.confirmed}</h3></div>
                            <div class="text-info text-center mt-2"><h3>Kasus</h3></div>
                            <div class="text-danger text-center mt-3"><h3>${data.deaths}</h3></div>
                            <div class="text-danger text-center mt-2"><h3>Meninggal</h3></div>
                            <div class="text-success text-center mt-3"><h3>${data.recovered}</h3></div>
                            <div class="text-success text-center mt-2"><h3>Sembuh</h3></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    `;
    })
    .join("");
  listGlobal.innerHTML = objectData;
};

getDataGlobal();

// Pencarian DataString di Search Bar
const searchString = document.querySelector(".search");
searchString.addEventListener("keyup", (e) => {
  const target = e.target.value.toLowerCase();
  const filteredData = result.filter((data) => {
    return data.countryRegion.toLowerCase().includes(target.toLowerCase());
  });

  // Function Data tidak Ditemukan
  if (Object.keys(filteredData).length !== 0) {
    console.log("Data Tidak Ditemukan");

    alldataCountry(filteredData);
    console.log(filteredData);
  } else {
    // Munculkan gambar
    listGlobal.innerHTML = `
    
    <h3 class="card-title card-body text-center">
    <p class="text-danger">Data Yang Anda Cari Tidak Ada !!!</p>
    <img src="./img/page-not-found.svg" alt="gambar salah input"></img>;
    `;
  }
});
