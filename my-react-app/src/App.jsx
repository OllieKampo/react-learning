import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}


function Square({ value }) {
    function handleClick() {
      console.log('Button clicked!');
    }

    return (
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );
}

function Board() {
    return (
      <>
        <div className="board-row">
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div className="board-row">
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div className="board-row">
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </>
    );
}
