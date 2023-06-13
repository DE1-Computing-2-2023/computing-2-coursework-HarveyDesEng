import R from "./ramda.js";

const game_rows = 4;
const game_columns = 5;

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_boxes = document.getElementById("game_boxes");
const horizontal_lines = document.getElementById("horizontal_lines");

R.range(0, game_rows).forEach(function (row_index) {
    const tr = document.createElement("tr");

    R.range(0, game_columns).forEach(function (column_index) {
        const td = document.createElement("td");
        td.textContent = `${column_index},${row_index}`;
        tr.append(td);
    });

    game_boxes.append(tr);
});

R.range(0, (game_rows)).forEach(function (row_index) {
    const tr = document.createElement("tr");

    R.range(0, (game_columns + 1)).forEach(function (column_index) {
        const td = document.createElement("td");
        td.textContent = `${column_index},${row_index}`;
        tr.append(td);
    });

    horizontal_lines.append(tr);
});