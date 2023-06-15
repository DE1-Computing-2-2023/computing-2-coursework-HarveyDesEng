import R from "./ramda.js";

/**
 * This is a module for playing Dots and Boxes.
 * @namespace DotsNBoxes
 */
const DotsNBoxes = {};

/**
 * Defining the Board type.
 * @typedef Board
 * @memberof DotsNBoxes
 */

/**
 * Defining the Player type.
 * @typedef {(1 | 2)} Player
 * @memberof DotsNBoxes
 */

/**
 * Function that creates a board of chosen widh and height.
 * @function
 * @param {DotsNBoxes.Width} width The width of the empty board.
 * @param {DotsNBoxes.Height} height The height of the empty board.
 * @returns {DotsNBoxes.Board} An empty board of width and height specified by
 * user.
 */
DotsNBoxes.empty_board = function (width, height) {
};

/**
 * Function that creates an empty board of 5x4.
 * @function
 * @returns {DotsNBoxes.Board} An empty 5x4 board.
 */
DotsNBoxes.default_empty_board = function () {
    const game_rows = 4;
    const game_columns = 5;
    document.documentElement.style.setProperty("--game-rows", game_rows);
    document.documentElement.style.setProperty("--game-columns", game_columns);
    const game_grid = document.getElementById("game_grid");

    const make_item = function (tag, i1, i2) {
        tag = document.createElement(`${tag}`);
        tag.textContent = `${i1},${i2}`;
        tag.onclick = function () {
            console.log(`${i1},${i2}`);
        };
        game_grid.append(tag);
    };

    R.range(0, (game_rows)).forEach(function (row_index) {
        R.range(0, (game_columns)).forEach(function (column_index) {
            make_item("dot", column_index, row_index);
            make_item("h_line", column_index, row_index);
        });
        make_item("dot", game_columns, row_index);
        R.range(0, (game_columns)).forEach(function (column_index) {
            make_item("v_line", column_index, row_index);
            make_item("box", column_index, row_index);
        });
        make_item("v_line", game_columns, row_index);
    });
    R.range(0, (game_columns)).forEach(function (column_index) {
        make_item("dot", column_index, game_rows);
        make_item("h_line", column_index, game_rows);
    });
    make_item("dot", game_columns, game_rows);
};

/**
 * Function that allows the player to make a ply.
 * @function
 * @param {DotsNBoxes.Player} player The player making a ply.
 * @param {DotsNBoxes.Line} line The line plyed.
 * @param {DotsNBoxes.Board} board The state of board before player makes move.
 * @returns {DotsNBoxes.Board} A new board with a line adjusted according to
 * the player's move.
 */
DotsNBoxes.ply = function (player, line, board) {
};

/**
 * Function that determines whether a box is made by the player after their ply.
 * @function
 * @param {DotsNBoxes.Player} player The player making a ply.
 * @param {DotsNBoxes.Board} board The board after the player's move.
 */
DotsNBoxes.is_box_made_by_player = function (player, board) {
};

/**
 * Function that determines the places where a move can be made by the player.
 * @function
 * @param {DotsNBoxes.Board} board The board before a player makes a move.
 */
DotsNBoxes.free_moves = function (board) {
};

/**
 * Function that determines whether the game is tied afte a player ply.
 * @function
 * @param {DotsNBoxes.Board} board The board after a player has moved.
 */
DotsNBoxes.is_game_tied = function (board) {
};

/**
 * Function that determines whether a player has won after a player ply.
 * @function
 * @param {DotsNBoxes.Player} player The player that just moved.
 * @param {DotsNBoxes.Player} board The board after the player has moved.
 */
DotsNBoxes.is_winning_for_player = function (player, board) {
};

export default Object.freeze(DotsNBoxes);

