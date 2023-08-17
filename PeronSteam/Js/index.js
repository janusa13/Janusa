document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("peronBoton");

  function buscarJuego(name) {
    fetch(`http://localhost:3000/game/${name}`, {
      Headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const gameKey = Object.keys(data)[0];
        const gameInfo = data[gameKey].data;

        const gameName = gameInfo.name;
        const gamePrice = gameInfo.price;

        console.log("Nombre del juego:", gameName);
        console.log("Precio del juego:", gamePrice);
      });
  }
  button.addEventListener("click", () => {
    const gameName = document.getElementById("gameName").value;
    buscarJuego(gameName);
  });
});
