#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const readline = require('readline');
const { default: app } = require('./build/app');


function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}


function onSuccess(winner, moves) {
  console.log(`You played ${moves[0]}, your opponent played ${moves[1]}`);
  console.log(`The winner is: ${winner}`);
}

function onError(error) {
  console.error(error);
}

async function playSoloGame() {
  const ans = await askQuestion('Enter your move ("Rock", "Paper", "Scissors"):');
  app.play(ans, onSuccess, onError);
}

function menu() {
  askQuestion(`
--------
--MENU--
--------
1 -> Play Solo

Exit -> Quit Application
`).then(ans => {
    switch (ans) {
      case '1': playSoloGame().then(menu); break;
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
