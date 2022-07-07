listCountries();

function listCountries() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();

  request.addEventListener("load", () => {
    const data = JSON.parse(request.responseText);
    console.log(data);

    for (let i = 0; i < 250; i += 3) {
      let html = `
      <div id="card">
        <img src="${data[i].flags.png}" />
          <div class="content">
            <span>${data[i].name.common}</span>
            <span>Continent: ${data[i].continents}</span>
            <span>Capital: ${data[i].capital}</span>
          </div>
      </div>
      `;

      document.querySelector("body").insertAdjacentHTML("beforeend", html);
    }
  });
}
