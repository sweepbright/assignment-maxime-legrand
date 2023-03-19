import { Move } from '../types/Move';

const WIN_AGAINST = {
  [Move.Rock]: Move.Scissors,
  [Move.Paper]: Move.Rock,
  [Move.Scissors]: Move.Paper,
}

export function compare(a: Move, b: Move): number {
  if (a === b) { return 0; }
  if (WIN_AGAINST[a] === b) {return -1; }
  return 1;
}

export default {
  compare,
}