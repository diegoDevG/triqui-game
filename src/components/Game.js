import React from 'react'
import Board from './Board';
import styled from 'styled-components';

const BoardSpace = styled.div`
    font-family: 'Gochi Hand', cursive;
    font-size: 2rem;
    display: flex;
    height: 100vh;   
    justify-content: center;
    align-items: center;
`;


function Game (){
    return(
        <BoardSpace>
            <Board />
        </BoardSpace>
    )
  }

 
  export default (Game);