# Tic-Tac-Toe Multiplayer

Turn-based demonstration project using Colyseus.

This repository has:
- `server/`: The Colyseus server, with tic-tac-toe room implementation.
- `javascript-pixi/`: A JavaScript/PixiJS client-side project.
- `defold/`: A [Defold](https://defold.com/) client-side project.

# Running the server locally

You'll need two terminal windows open to be able to run this. One for the
client, and one for the server:

**Running the server**

```
cd server
npm install
npm start
```

**Important files to have look at**

- [registering room](server/index.ts#L20)
- [room and state implementation](server/rooms/tictactoe.ts)

## JavaScript / PixiJS

The JavaScript/PixiJS example uses:

- [colyseus](https://colyseus.io)
- [pixi.js v4](http://npmjs.com/package/pixi.js)
- [parcel](http://npmjs.com/package/parcel)

**Running the JavaScript/PixiJS client**

```
cd javascript-pixi
npm install
npm start
```

**Important files to have look at**

- [room connection](javascript-pixi/src/screens/GameScreen.js#L36)
- [receiving state updates](javascript-pixi/src/screens/GameScreen.js#L39-L63)

## Defold Engine

The Defold project was made by [Selim Anaç](https://github.com/selimanac/).

## License

MIT
