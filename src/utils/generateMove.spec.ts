import { Move } from "../types/Move";

import {randomGeneration} from './generateMove';

const possiblesMoves = Object.keys(Move);

describe('utils/generateMove', () => {
  describe('randomGeneration', () => {
    it('should return a move', () => {
      const res = randomGeneration();
      expect(possiblesMoves.includes(res));
    });
  });
});
