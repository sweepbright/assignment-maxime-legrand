import { Move } from '../types/Move';

import {compare} from './comparison';

describe('utils/comparison', () => {
  describe('compare', () => {
    it('should return 0 if both moves are the same', () => {
      const res = compare(Move.Paper, Move.Paper);
      expect(res).toEqual(0);
    });
    it('should return -1 if first move wins', () => {
      const res = compare(Move.Scissors, Move.Paper);
      expect(res).toEqual(-1);
    });
    it('should return 1 if second move wins', () => {
      const res = compare(Move.Rock, Move.Paper);
      expect(res).toEqual(1);
    });
  });
});
