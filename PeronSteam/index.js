const name = document.getElementById(gameName).value;
function buscarJuego() {
  fetch("http://localhost:3000/game${}")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
