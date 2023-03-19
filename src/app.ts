import { Move } from './types/Move';
import { compare } from './utils/comparison';
import generateMove from './utils/generateMove';
import { convertStringToMove, convertMoveToString } from './utils/convert';

function play(input: string, onSuccess: (winner: string, moves: Array<string>) => void, onError: (reason?: unknown) => void) {
  try {
    const inputMove: Move = convertStringToMove(input);
    const opponentMove: Move = generateMove();
    
    const result: number = compare(inputMove, opponentMove);
    let winner = 'tie';
    if (result < 0) { winner = 'Player1'; }
    if (result > 0) { winner = 'Opponent'; }


    onSuccess(winner, [convertMoveToString(inputMove), convertMoveToString(opponentMove)]);
  } catch (error) {
    onError(error);
  }
}

export default {
  play,
};
