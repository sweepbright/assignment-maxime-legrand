import crypto from 'crypto';

import { Player } from './types/Player';
import { PlayerMove } from './types/PlayerMove';
import compareMoves from './utils/compareMoves';
import generateMove from './utils/generateMove';
import { convertStringToMove } from './utils/convert';

function formatPlayer(name = 'AI', id: string = crypto.randomUUID()): Player {
  return {name, id};
}

function play(p1: PlayerMove, p2: PlayerMove): Player | undefined {
  
  const result: PlayerMove | null = compareMoves(p1, p2);
  
  
  return result?.player;
}

function playSolo(input: string, onSuccess: (winner: Player | undefined, moves: Array<PlayerMove>) => void, onError: (reason?: unknown) => void) {
  try {
    const p1: PlayerMove = {
      player: formatPlayer('Player1'),
      move: convertStringToMove(input)
    };
    const p2: PlayerMove = {
      player: formatPlayer(),
      move: generateMove()
    };
    const winner = play(p1, p2);

    onSuccess(winner, [p1, p2]);
  } catch (error) {
    onError(error);
  }
}

function play2Players(p1Input: string, p2Input: string, onSuccess: (winner: Player | undefined, moves: Array<PlayerMove>) => void, onError: (reason?: unknown) => void) {
  try {
    const p1: PlayerMove = {
      player: formatPlayer('Player1'),
      move: convertStringToMove(p1Input)
    };
    const p2: PlayerMove = {
      player: formatPlayer('Player2'),
      move: convertStringToMove(p2Input)
    };
    const winner = play(p1, p2);

    onSuccess(winner, [p1, p2]);
  } catch (error) {
    onError(error);
  }
}

export default {
  playSolo,
  play2Players
};
