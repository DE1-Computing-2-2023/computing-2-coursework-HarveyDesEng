import DotsNBoxes from "../DotsNBoxes.js";
import R from "../ramda.js";

const throw_if_invalid = function (board) {
    if (!Array.isArray(board) || !Array.isArray(board[0])) {
        throw new Error(
            "The board is not a 2D array: " + board
        );
    }
};

describe("Validity of empty boards", function () {

    it(`empty_v_board:
    Given that an empty board of vertical lines are made;
    At the begining of the game;
    Then the board is valid.`, function () {
        const empty_v_board = DotsNBoxes.starting_state().v_board;
        throw_if_invalid(empty_v_board);
    });

    it(`empty_h_board
    Given that an empty board of horizonal lines are made;
    At the begining of the game;
    Then the board is valid.`, function () {

    });

    it(`empty_b_board:
    Given that an empty board of horizonal lines are made;
    At the begining of the game;
    Then the board is valid.`, function () {

    });
});