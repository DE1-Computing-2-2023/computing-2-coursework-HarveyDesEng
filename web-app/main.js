import R from "./ramda.js";

const game_rows = 4;
const game_columns = 5;

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_grid = document.getElementById("game_grid");

R.range(0, game_rows).forEach(function (row_index) {
    R.range(0, (game_columns)).forEach(function (column_index) {
        const td = document.createElement("td");
        td.textContent = `${column_index},${row_index}`;
        game_grid.append(td);
    });
});