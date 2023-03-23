import { Move } from '../types/Move';
import { PlayerMove } from '../types/PlayerMove';

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

export function comparePlayersMove(pm1: PlayerMove, pm2: PlayerMove): PlayerMove | null {
  const res: number = compare(pm1.move, pm2.move);
  if (res < 0) return pm1;
  if (res > 0) return pm2;
  return null;
}

export default comparePlayersMove;
