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
 * Function that creates boards of chosen widh and height.
 * @function
 * @param {DotsNBoxes.width} width The width of the empty board.
 * @param {DotsNBoxes.height} height The height of the empty board.
 * @returns {DotsNBoxes.board} An empty board of width and height specified by
 * user.
 */

const empty_board = function (width, height) {
    return R.repeat(R.repeat(0, width), height);
};

const empty_v_board = empty_board(6, 4);
const empty_h_board = empty_board(5, 5);
const empty_b_board = empty_board(5, 4);

DotsNBoxes.starting_state = function () {
    return {
        "v_board": empty_v_board,
        "h_board": empty_h_board,
        "b_board": empty_b_board
    };
};

const needs_flipping = function (row_index, column_index, row_grid, column_grid) {
    row_grid === row_index && column_grid ===column_index;
};

const ply_on_board = function (column_index, row_index, board) {
    return board.map((row, row_grid) => row.map((cell, column_grid) => (
        needs_flipping(row_index, column_index, row_grid, column_grid)
        ? !cell
        : cell
    )));
};


/**
 * Function that allows the player to make a ply.
 * @function
 * @param {DotsNBoxes.Player} player The player making a ply.
 * @param {DotsNBoxes.Line_type} line_type If the line is horizontal or
 * verticle.
 * @param {DotsNBoxes.Column_Index} column_index The x index of line.
 * @param {DotsNBoxes.Row_Index} row_index The y axis of the line.
 * @param {DotsNBoxes.Board_of_Horizontal_Lines} board_h_lines The board of
  horizontal lines before a move is made.
 * @param {DotsNBoxes.Board_of_Vertical_Lines} board_v_lines The board of
 * vertical lines before a move is made.
 * @returns {DotsNBoxes.Board_of_Horizontal_Lines} A new board with a line
 * adjusted according to the player's move.
 * @returns {DotsNBoxes.Board_of_Vertical_Lines} A new board with a line
 * adjusted according to the player's move.
 */

DotsNBoxes.ply = function (column_index, row_index,
    board) {
        return {
            "v_board": ply_on_board(column_index, row_index, board),
            "h_board": ply_on_board(column_index, row_index, board),
            "b_board": empty_b_board
        }
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

/**
* Returns a  function, mapping tokens to provided string representations.
* @function
* @param {string[]} thing_strings
* @returns {function} The string representation.
*/
DotsNBoxes.to_string = (board) => R.pipe(
        R.transpose, // Columns to display vertically.
        R.reverse, // Empty slots at the top.
        R.map(R.join(" ")), // Add a space between each slot.
        R.join("\n") // Stack rows atop each other.
    )(board);

export default Object.freeze(DotsNBoxes);

