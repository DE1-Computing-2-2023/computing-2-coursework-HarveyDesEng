import DotsNBoxes from "./DotsNBoxes.js";
import R from "./ramda.js";

const game_rows = 4;
const game_columns = 5;

let game_state = DotsNBoxes.starting_state();

const update_v_board = function () {
    game_state.v_board.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            const table_v_line = table_v_lines[row_index][column_index];
            table_v_line.className = (
                cell
                ? "lit"
                : "unlit"
            );
        });
    });
};

const update_h_board = function () {
    game_state.h_board.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            const table_h_line = table_h_lines[row_index][column_index];
            table_h_line.className = (
                cell
                ? "lit"
                : "unlit"
            );
        });
    });
};

const update_box_board = function () {
    game_state.b_board.forEach(function (row, row_index) {
        row.forEach(function (cell, column_index) {
            const table_box = table_boxes[row_index][column_index];
            table_box.className = (
                cell
                ? "red"
                : "unlit"
            );
        });
    });
};

document.documentElement.style.setProperty("--game-rows", game_rows);
document.documentElement.style.setProperty("--game-columns", game_columns);

const game_grid = document.getElementById("game_grid");

const make_item = function (tag, i1, i2) {
    tag = document.createElement(`${tag}`);
    tag.textContent = `${i1},${i2}`;
    game_grid.append(tag);
};

const make_h_line = function (i1, i2) {
    const h_line = document.createElement("h_line");
    h_line.textContent = `${i1},${i2}`;
    h_line.onclick = function () {
        game_state = DotsNBoxes.ply("h", i1, i2, game_state.h_board);
        update_h_board();
    };
    game_grid.append(h_line);
    return h_line;
};

const make_v_line = function (i1, i2) {
    const v_line = document.createElement("v_line");
    v_line.textContent = `${i1},${i2}`;
    v_line.onclick = function () {
        game_state = DotsNBoxes.ply("v", i1, i2, game_state.v_board);
        update_v_board();
    };
    game_grid.append(v_line);
    return v_line;
};


R.range(0, (game_rows)).forEach(function (row_index) {
    R.range(0, (game_columns)).forEach(function (column_index) {
        make_item("dot", column_index, row_index);
        make_h_line(column_index, row_index);
    });
    make_item("dot", game_columns, row_index);
    R.range(0, (game_columns)).forEach(function (column_index) {
        make_v_line(column_index, row_index);
        make_item("box", column_index, row_index);
    });
    make_v_line(game_columns, row_index);
});
R.range(0, (game_columns)).forEach(function (column_index) {
    make_item("dot", column_index, game_rows);
    make_h_line(column_index, game_rows);
});
make_item("dot", game_columns, game_rows);


const table_h_lines = function () {
    document.getElementsByTagName("h_line");
};

const table_v_lines = function () {
    document.getElementsByTagName("v_line");
};

const table_boxes = function () {
    document.getElementsByTagName("box");
};