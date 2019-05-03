import React from 'react'
// import BoardHooks from './Board';
import styled from 'styled-components';
// import BoardHooks from './BoardHooks';
import BoardReducer from './BoardReducer';

const BoardSpace = styled.div`
    font-family: 'Gochi Hand', cursive;
    font-size: 2rem;
    display: flex;
    height: 100vh;   
    justify-content: center;
    align-items: center;
`;


const Game = () => {
    return (
        <BoardSpace>
            <BoardReducer />
        </BoardSpace>
    )
}


export default (Game);