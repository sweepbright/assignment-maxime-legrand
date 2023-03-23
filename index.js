#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const readlineSync = require('readline-sync');
const { default: app } = require('./build/app');

function displayPlayerMove({name, move}) {
  console.log(`${name} played ${move}`);
}

const movesOpts = {
  limit: ['Rock', 'Paper', 'Scissors'],
  hideEchoBack: true,
  mask: ''
}

function askQuestion(query, opts) {
  return new Promise(resolve => {
    const answer = readlineSync.question(query, opts);
    resolve(answer);
  })
}


function onSuccess(winner, playersMove) {
  const [p1, p2] = playersMove;
  displayPlayerMove({...p1, ...p1.player});
  displayPlayerMove({...p2, ...p2.player});
  if (!winner?.name) {
    console.log('TIE');
  } else {
    console.log(`The winner is: ${winner.name}`);
  }
}

function onError(error) {
  console.error(error);
}

async function playSoloGame() {
  const ans = await askQuestion('Enter your move ("Rock", "Paper", "Scissors"):', movesOpts);
  app.playSolo(ans, onSuccess, onError);
}

async function play2Players() {
  console.log('2 Players : Enter your move ("Rock", "Paper", "Scissors")')
  const p1Input = await askQuestion('Player1 : ', movesOpts);
  const p2Input = await askQuestion('Player2 : ', movesOpts);
  app.play2Players(p1Input, p2Input, onSuccess, onError);
}

function menu() {
  askQuestion(`
--------
--MENU--
--------
1 -> Play Solo
2 -> 2 players

Exit -> Quit Application
`, {limit: ['1', '2', 'Exit']}).then(ans => {
    switch (ans) {
      case '1': playSoloGame().then(menu); break;
      case '2': play2Players().then(menu); break;
      case 'exit':
      case 'Exit': {
        console.log('Thanks for playing');
        return;
      }
      default: {
      console.log('Incorrect selection');
      menu();
      }
    }
  });
}

menu();
