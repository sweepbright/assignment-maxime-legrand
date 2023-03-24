# It's a game of rock paper scissors

You can find the rules [here](https://en.wikipedia.org/wiki/Rock_paper_scissors)

# Install

```
nvm use
npm ci
```

# Build the app

```
npm run build
```

# Start the app

```
npm run start
```
or 
```
npm run start:build
```
to build then start
or 
```
npm run start:dev
```
to start the app in dev mode
# Tests

```
npm run test
```


---

Sirio> I'm adding here a bit of context. The candidate wrote saying the following:

I heard from Mathilde I was taking a bit too long to finish the test, and sadly I didn’t (and won’t) have a lot of time to spend on it, so I can’t guarantee I’ll finish a whole lot more any time soon.

So here’s what I’ve done up to now :
	- Basic command line interface to play the game
	- Basic 1 & 2 players game
And that’s it 😞

What I had in mind going forward (in no particular order)
	- Multiplayers game (more than 2 players)
	- Registered player
		- Add a server with basic REST interface, using existing app interface
		- A database
	- History of moves made by players
	- Use history for AI (term used really loosely) player to determine moves more likely to win (basic stuff, like if the human player does ROCK half of the time, there would be a fifty percent change of paper being played by the AI)
	- Experiment with various ways to represent possible moves
		- would an enum with number be easier/faster ? Especially with a lot of players
		- would a class be better ?

That’s it from me 😉
