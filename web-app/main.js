import R from "./ramda.js";

const game_rows = 4;
const game_columns = 5;

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_grid = document.getElementById("game_grid");

R.range(0, (game_rows)).forEach(function (row_index) {
    R.range(0, (game_columns)).forEach(function (column_index) {
        const dot = document.createElement("dot");
        dot.textContent = `${column_index},${row_index}`;
        game_grid.append(dot);
        const h_line = document.createElement("h_line");
        h_line.textContent = `${column_index},${row_index}`;
        game_grid.append(h_line);
    });
    const dot = document.createElement("dot");
    dot.textContent = `5,${row_index}`;
    game_grid.append(dot);
    R.range(0, (game_columns)).forEach(function (column_index) {
        const v_line = document.createElement("v_line");
        v_line.textContent = `${column_index},${row_index}`;
        game_grid.append(v_line);
        const box = document.createElement("box");
        box.textContent = `${column_index},${row_index}`;
        game_grid.append(box);
    });
    const v_line = document.createElement("v_line");
    v_line.textContent = `5,${row_index}`;
    game_grid.append(v_line);
});
R.range(0, (game_columns)).forEach(function (column_index) {
    const dot = document.createElement("dot");
    dot.textContent = `${column_index},4`;
    game_grid.append(dot);
    const h_line = document.createElement("h_line");
    h_line.textContent = `${column_index},4`;
    game_grid.append(h_line);
});
const dot = document.createElement("dot");
dot.textContent = `5,4`;
game_grid.append(dot);