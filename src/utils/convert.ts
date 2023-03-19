import { Move } from '../types/Move';

export function convertStringToMove(input: string): Move {
  try {
    const lowerCaseInput: string = input.toLocaleLowerCase();
    switch (lowerCaseInput) {
      case 'rock': return Move.Rock;
      case 'paper': return Move.Paper;
      case 'scissors': return Move.Scissors;
      default: throw Error();
    }
  } catch (error) {
    throw Error(`Incorrect input supplied to convertStringToMove: ${input}`)
  }
}

export function convertMoveToString(input: Move): string {
  try {
    const res = Move[input];
    if (res === undefined) throw Error();
    return res;
  } catch (error) {
    throw Error(`Incorrect input supplied to convertMoveToString: ${input}`)
  }
}

export default {
  convertStringToMove,
  convertMoveToString
};
