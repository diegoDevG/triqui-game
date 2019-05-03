import React, { useState, useReducer } from "react";
import Square from "./Square";
import styled from "styled-components";

const BoardHooks = () => {
  const X = "X";
  const O = "O";

  const [board, updateBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(true);

  const handleClickSquare = position => () => {
    const nextBoard = board.slice();
    if (calculateWinner(nextBoard) || nextBoard[position]) {
      return;
    }
    nextBoard[position] = currentPlayer ? X : O;
    setCurrentPlayer(!currentPlayer);
    updateBoard(nextBoard);
    console.log({ board }, { nextBoard });
  };

  const buildSquare = position => {
    handleClickSquare(position);
    return (
      <Square
        row={position}
        value={board[position]}
        onSquareClick={handleClickSquare(position)}
      />
    );
  };

  //i'm stuck
  const reset = () => {
    // updateBoard(board);
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = "El ganador es = " + winner;
  } else {
    status = `Turno para:  ${currentPlayer ? X : O}`;
  }

  const TopRow = styled.div`
    display: flex;
    border-bottom: 2px solid white;
  `;

  const MiddleRow = styled.div`
    display: flex;
    border-bottom: 2px solid white;
  `;

  const BottomRow = styled.div`
    display: flex;
  `;

  const BoardWrap = styled.div`
    background: rgb(20, 189, 172);
    padding: 2rem;
  `;

  const Status = styled.div`
    text-align: center;
    padding-bottom: 2rem;
  `;

  return (
    <BoardWrap>
      <Status>{status}</Status>
      <TopRow>
        {buildSquare(0)}
        {buildSquare(1)}
        {buildSquare(2)}
      </TopRow>
      <MiddleRow>
        {buildSquare(3)}
        {buildSquare(4)}
        {buildSquare(5)}
      </MiddleRow>
      <BottomRow>
        {buildSquare(6)}
        {buildSquare(7)}
        {buildSquare(8)}
      </BottomRow>
      <button onClick={reset()}>reset board</button>
    </BoardWrap>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      //   console.log(lines[i]);
      // const winnerLine = lines[i]
      // console.log('Linea ganadora', winnerLine)
      return squares[a];
    }
  }
  return null;
}

export default BoardHooks;
