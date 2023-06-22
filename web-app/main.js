import DotsNBoxes from "./DotsNBoxes.js";
import R from "./ramda.js";

const game_rows = 4;
const game_columns = 5;

let game_state = DotsNBoxes.starting_state();

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_grid = document.getElementById("game_grid");

const make_v_line = function (i1, i2) {
    const v_line = document.createElement("v_line");
    v_line.textContent = `${i1},${i2}`;
    v_line.onclick = function () {
        console.log(`v_line: ${i1},${i2}`);
        game_state = DotsNBoxes.v_ply(i1, i2, game_state);
        console.log(game_state.v_board);
        update_v_board();
    };
    game_grid.append(v_line);
    return v_line;
};

const make_h_line = function (i1, i2) {
    const h_line = document.createElement("h_line");
    h_line.textContent = `${i1},${i2}`;
    h_line.onclick = function () {
        console.log(`h_line: ${i1},${i2}`);
        game_state = DotsNBoxes.h_ply(i1, i2, game_state);
        console.log(game_state.h_board);
        update_h_board();
    };
    game_grid.append(h_line);
    return h_line;
};

const make_box = function (i1, i2) {
    const box = document.createElement(`box`);
    box.textContent = `${i1},${i2}`;
    game_grid.append(box);
};

const make_dot = function () {
    const dot = document.createElement(`dot`);
    game_grid.append(dot);
};

R.range(0, (game_rows)).forEach(function (row_index) {
    R.range(0, (game_columns)).forEach(function (column_index) {
        make_dot();
        make_h_line(row_index, column_index);
    });
    make_dot();
    R.range(0, (game_columns)).forEach(function (column_index) {
        make_v_line(row_index, column_index);
        make_box(row_index, column_index);
    });
    make_v_line(row_index, game_columns);
});
R.range(0, (game_columns)).forEach(function (column_index) {
    make_dot();
    make_h_line(game_rows, column_index);
});
make_dot();

const table_h_lines = (
    Array.from(document.getElementsByTagName("h_line"))
);

const table_v_lines = (
    Array.from(document.getElementsByTagName("v_line"))
);

const table_boxes = (
    document.getElementsByTagName("box")
);

const update_v_board = function () {
    console.log(table_v_lines);
    game_state.v_board.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            const table_v_line = table_v_lines[(row_index) * 6 + column_index];
            table_v_line.className = (
                (cell === 1)
                ? "lit"
                : "unlit"
            );
        });
    });
};

const update_h_board = function () {
    console.log(table_h_lines);
    game_state.h_board.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            const table_h_line = table_h_lines[(row_index) * 5 + column_index];
            table_h_line.className = (
                (cell === 1)
                ? "lit"
                : "unlit"
            );
        });
    });
};