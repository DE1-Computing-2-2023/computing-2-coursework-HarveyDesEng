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

/* const needs_lighting = function (column_index, row_index, row_grid, column_grid) {
    row_grid === column_index && column_grid ===row_index;
};
 */
const ply_on_board = function (row_index, column_index, board) {
    return (R.update(
        row_index,
        R.update(column_index, 1, board[row_index]),
        board
    ))
};


/**
 * Function that allows the player to make a ply.
 * @function
 * @param {DotsNBoxes.Player} player The player making a ply.
 * @param {DotsNBoxes.Line_type} line_type If the line is horizontal or
 * verticle.
 * @param {DotsNBoxes.row_index} row_index The x index of line.
 * @param {DotsNBoxes.column_index} column_index The y axis of the line.
 * @param {DotsNBoxes.Board_of_Horizontal_Lines} board_h_lines The board of
  horizontal lines before a move is made.
 * @param {DotsNBoxes.Board_of_Vertical_Lines} board_v_lines The board of
 * vertical lines before a move is made.
 * @returns {DotsNBoxes.game_state} A collection of all boards.
 */

DotsNBoxes.v_ply = function (row_index, column_index,
    game_state) {
    return {
        "v_board": ply_on_board(row_index, column_index, game_state.v_board),
        "h_board": game_state.h_board,
        "b_board": DotsNBoxes.update_box_array_after_v(row_index, column_index, game_state)
    }
};

DotsNBoxes.h_ply = function (row_index, column_index,
    game_state) {
    return {
        "v_board": game_state.v_board,
        "h_board": ply_on_board(row_index, column_index, game_state.h_board),
        "b_board": DotsNBoxes.update_box_array_after_h(row_index, column_index, game_state)
    };
};
/**
 * Function that determines whether a box is made by the player after their ply.
 * @function
 * @param {DotsNBoxes.Player} player The player making a ply.
 * @param {DotsNBoxes.Board} board The board after the player's move.
 */

DotsNBoxes.update_box_array_after_v = function (r_i, c_i, state) {
    if (
        //both boxes around vertical line
        (state.v_board[r_i][c_i+1] === 1)
        && (state.h_board[r_i][c_i] === 1)
        && (state.h_board[r_i+1][c_i] === 1)
        && (state.v_board[r_i][c_i-1] === 1)
        && (state.h_board[r_i][c_i-1] === 1)
        && (state.h_board[r_i+1][c_i-1] === 1)
    ) {
        console.log(`${r_i},${c_i} should be red`);
        const intermediate_board = ply_on_board(r_i, c_i, state.b_board);
        console.log(`${r_i},${c_i-1} should be red`)
        return ply_on_board(r_i, c_i-1, intermediate_board);
    }
    if (
        // box to the right of vertical line
        (state.v_board[r_i][c_i+1] === 1)
        && (state.h_board[r_i][c_i] === 1)
        && (state.h_board[r_i+1][c_i] === 1)
    ) {
        console.log(`${r_i},${c_i} should be red`);
        return ply_on_board(r_i, c_i, state.b_board);
    }
    if (
        // box to the left of vertical line
        (state.v_board[r_i][c_i-1] === 1)
        && (state.h_board[r_i][c_i-1] === 1)
        && (state.h_board[r_i+1][c_i-1] === 1)
    ) {
        console.log(`${r_i},${c_i-1} should be red`)
        return ply_on_board(r_i, c_i-1, state.b_board);
    } else {
        return state.b_board;
    }
};

DotsNBoxes.update_box_array_after_h = function (r_i, c_i, state) {
    if (r_i === 0) {
        if (
            // box below horizonal line
            (state.h_board[r_i+1][c_i] === 1)
            && (state.v_board[r_i][c_i] === 1)
            && (state.v_board[r_i][c_i+1] === 1)
        ) {
            console.log(`${r_i},${c_i} should be red`)
            return ply_on_board(r_i, c_i, state.b_board);
        } else {
            return state.b_board;
        }
    } else {
        if (
            //both boxes around horizontal line
            (state.h_board[r_i-1][c_i] === 1)
            && (state.v_board[r_i-1][c_i] === 1)
            && (state.v_board[r_i-1][c_i+1] === 1)
            && (state.h_board[r_i+1][c_i] === 1)
            && (state.v_board[r_i][c_i] === 1)
            && (state.v_board[r_i][c_i+1] === 1)
        ) {
            console.log(`${r_i-1},${c_i} should be red`)
            const intermediate_board = ply_on_board(r_i-1, c_i, state.b_board);
            console.log(`${r_i},${c_i} should be red`)
            return ply_on_board(r_i, c_i, intermediate_board);
        }
        if (
            // box above horizontal line
            (state.h_board[r_i-1][c_i] === 1)
            && (state.v_board[r_i-1][c_i] === 1)
            && (state.v_board[r_i-1][c_i+1] === 1)
        ) {
            console.log(`${r_i-1},${c_i} should be red`)
            return ply_on_board(r_i-1, c_i, state.b_board);
        }
    }
    if (r_i === 4) {
        return state.b_board;
    } else {
        if (
            // box below horizonal line
            (state.h_board[r_i+1][c_i] === 1)
            && (state.v_board[r_i][c_i] === 1)
            && (state.v_board[r_i][c_i+1] === 1)
        ) {
            console.log(`${r_i},${c_i} should be red`)
            return ply_on_board(r_i, c_i, state.b_board);
        } else {
            return state.b_board;
        }
    }
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

