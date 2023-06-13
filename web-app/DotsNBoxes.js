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
 * Function that creates an empty board of 6x7.
 * @function
 * @returns {DotsNBoxes.Board} An empty 6x7 board.
 */
DotsNBoxes.default_empty_board = function () {
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

