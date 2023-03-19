import { Move } from "../types/Move";

export function randomGeneration(): Move {
  const moveKeys = Object.keys(Move);
  const index = Math.floor(Math.random() * moveKeys.length);
  return <Move> moveKeys[index];
}


export default randomGeneration;
