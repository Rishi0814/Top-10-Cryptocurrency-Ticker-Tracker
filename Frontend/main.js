window.onload = function () {
  const endpoint = "https://top-10-cryptocurrency-tracker.onrender.com/getData";
  const gridContainer = document.querySelector(".grid-container");

  function fetchData() {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((item) => {
          const gridItems = `
            <div class="grid-item grid-item-data">${item.id}</div>
            <div class="grid-item grid-item-data">${item.name}</div>
            <div class="grid-item grid-item-data">${item.last}</div>
            <div class="grid-item grid-item-data">${item.buy}/${item.sell}</div>
            <div class="grid-item grid-item-data">${item.volume}</div>
            <div class="grid-item grid-item-data">${item.base_unit}</div>
          `;
          gridContainer.insertAdjacentHTML("beforeend", gridItems);
        });
      })
      .catch((error) => console.error(error));
  }

  fetchData();
};
