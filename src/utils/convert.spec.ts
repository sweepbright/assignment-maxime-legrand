import {Move} from '../types/Move';
import convert from './convert';

describe('utils/convert', () => {
  describe('convertStringToMove', () => {
    function expectError(input: any) {
      expect(() => convert.convertStringToMove(input)).toThrowError(`Incorrect input supplied to convertStringToMove: ${input}`);
    }

    it('should return Move.Paper enum when receiving corresponding string input', () => {
      let res: Move = convert.convertStringToMove('paper');
      expect(res).toEqual(Move.Paper);
      res = convert.convertStringToMove('PAPER');
      expect(res).toEqual(Move.Paper);
      res = convert.convertStringToMove('Paper');
      expect(res).toEqual(Move.Paper);
      res = convert.convertStringToMove('PaPer');
      expect(res).toEqual(Move.Paper);
    });
    it('should return Move.Rock enum when receiving corresponding string input', () => {
      let res: Move = convert.convertStringToMove('rock');
      expect(res).toEqual(Move.Rock);
      res = convert.convertStringToMove('ROCK');
      expect(res).toEqual(Move.Rock);
      res = convert.convertStringToMove('Rock');
      expect(res).toEqual(Move.Rock);
      res = convert.convertStringToMove('RoCk');
      expect(res).toEqual(Move.Rock);
    });
    it('should return Move.Scissors enum when receiving corresponding string input', () => {
      let res: Move = convert.convertStringToMove('scissors');
      expect(res).toEqual(Move.Scissors);
      res = convert.convertStringToMove('SCISSORS');
      expect(res).toEqual(Move.Scissors);
      res = convert.convertStringToMove('Scissors');
      expect(res).toEqual(Move.Scissors);
      res = convert.convertStringToMove('SciSSorS');
      expect(res).toEqual(Move.Scissors);
    });
    it('should throw exception when supplied with incorrect input', () => {
      expectError('Papers');
      expectError('Rocks');
      expectError('Scissor');
      expectError(null);
      expectError(undefined);
      expectError({});
      expectError([]);
      expectError(1);
    });
  });
  describe('convertMoveToString', () => {
    function expectError(input: any) {
      expect(() => convert.convertMoveToString(input)).toThrowError(`Incorrect input supplied to convertMoveToString: ${input}`);
    }

    it('should return corresponding string when receiving Move.Rock enum input', () => {
      const res: string = convert.convertMoveToString(Move.Rock);
      expect(res).toEqual('Rock');
    });
    it('should return corresponding string when receiving Move.Paper enum input', () => {
      const res: string = convert.convertMoveToString(Move.Paper);
      expect(res).toEqual('Paper');
    });
    it('should return corresponding string when receiving Move.Scissors enum input', () => {
      const res: string = convert.convertMoveToString(Move.Scissors);
      expect(res).toEqual('Scissors');
    });
    it('should throw exception when supplied with incorrect input', () => {
      expectError('Papers');
      expectError('Rocks');
      expectError('Scissor');
      expectError(null);
      expectError(undefined);
      expectError({});
      expectError([]);
    });
  });
});
