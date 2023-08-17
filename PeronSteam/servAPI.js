import express, { response } from "express";
import cors from "cors";
import morgan from "morgan";
import games from "./src/games.json" assert { type: "json" };
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/game/:name", async (rec, res) => {
  const resultGameId = findGame(rec.params.name);
  if (resultGameId) {
    const infoGame = await consulta(resultGameId.appid);
    res.json(infoGame);
  } else {
    res.status(404).json({ mensaje: "Juego no encontrado" });
  }
});
app.listen(3000, () => {
  console.log("server running");
});

function findGame(name) {
  const gameName = games.applist.apps.find((game) => game.name === name);
  return gameName;
}

async function consulta(idGame) {
  return fetch(
    "https://store.steampowered.com/api/appdetails?appids=" + idGame
  ).then((response) => response.json());
}
