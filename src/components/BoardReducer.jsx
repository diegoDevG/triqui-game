import React, { useReducer } from "react";
// import Square from "./Square";
import styled from "styled-components";
import calculateWinner from '../utils/calculateWinner'



const Board = styled.div`
    display: flex;
    width: 430px;
    flex-wrap: wrap;
`;


const Button = styled.div`
    background: rgb(20, 189, 172); 
    height: 140px;
    width: 140px;
    cursor: pointer;
    /* border-right:  ${props => props.index === 2 || props.index === 5 || props.index === 8 ? "none" : " solid 2px white"}; */
    display: flex;
    justify-content: center;
    align-items: center;    
    font-size: 7rem;
    margin: 1px;
`;


const initialState = {
    player: true,
    board: [Array(9).fill(null)]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'swithcPlayer':
            return {
                ...state,
                player: !state.player
            }
        case 'play':
            return {
                ...state,
                board: [...state.board, action.payload]
            }
        default:
            return state
    }
}

const handleSquare = (index, board, player) => {
    alert(index);
    const nextBoard = board.slice();
    if (calculateWinner(nextBoard) || nextBoard[index]) {
        return;
    }
    nextBoard[index] = player ? 'X' : 'O';
}

const BoardReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <Board>
                {state.board[0].map((value, index) => (
                    <Button
                        key={index}
                        onClick={() => dispatch({
                            type: 'play',
                            payload: handleSquare(index, state.board, state.player)
                        })}
                    >
                        {value}
                    </Button>
                ))}

            </Board>
            <p>Turno para: {state.player ? 'X' : 'O'}</p>
            <button onClick={() => dispatch({ type: 'swithcPlayer' })}>Cambiar turno</button>
        </div>
    )
}

// function BoardReducer() {
//     const [board, dispatch] = useReducer((state, action) => {
//         switch (action) {
//             case "play":
//                 console.log({ action });
//             default:
//                 return state
//         }

//     }, [Array(9).fill(null)])

//     const handleClickSquare = (index) => {
//         // const copyBoard = board.slice();
//         // console.log({ index })

//     }

//     // const handleClickSquare = position => () => {
//     //     const nextBoard = board.slice();
//     //     if (calculateWinner(nextBoard) || nextBoard[position]) {
//     //         return;
//     //     }
//     //     nextBoard[position] = currentPlayer ? X : O;
//     //     setCurrentPlayer(!currentPlayer);
//     //     updateBoard(nextBoard);
//     //     console.log({ board }, { nextBoard });
//     // };

//     return (
//         <Board>
//             {board[0].map((cuadro, index) => (
//                 <Square
//                     key={index}
//                     value={index}

//                 />
//             ))}

//             <button onClick={() => dispatch('play')}>test</button>

//         </Board>
//     )

// }

export default BoardReducer