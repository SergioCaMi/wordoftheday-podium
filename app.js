const buttonUpdate = document.querySelector("button");
const firstPlayer = document.querySelector(".first-place .player-name");
const firstPlayerScore = document.querySelector(".first-place .score");
const secondPlayer = document.querySelector(".second-place .player-name");
const secondPlayerScore = document.querySelector(".second-place .score");
const thirdPlayer = document.querySelector(".third-place .player-name");
const thirdPlayerScore = document.querySelector(".third-place .score");

buttonUpdate.addEventListener("click", async function () {
  const response = await fetch(
    "https://score-word-of-the-dat.onrender.com/scores"
  );
  const data = await response.json();
  console.log(data);
  console.log(`${data[0].nombre} con ${data[0].puntos} puntos`);
  console.log(`${data[1].nombre} con ${data[1].puntos} puntos`);
  console.log(`${data[2].nombre} con ${data[2].puntos} puntos`);
  firstPlayer.textContent = data[0].nombre;
  firstPlayerScore.textContent = `${data[0].puntos} palabras adivinadas`;
  secondPlayer.textContent = data[1].nombre;
  secondPlayerScore.textContent = `${data[1].puntos} palabras adivinadas`;
  thirdPlayer.textContent = data[2].nombre;
  thirdPlayerScore.textContent = `${data[2].puntos} palabras adivinadas`;

  const playersTable = document.querySelector("#players tbody");
  for (let player of data) {
    const newTr = document.createElement("tr");
    newTr.innerHTML = `<td>${player.nombre}</td><td>${player.puntos} puntos</td>`;
    playersTable.appendChild(newTr);
  }
});
