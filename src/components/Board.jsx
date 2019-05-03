import React from 'react';
import Square from './Square';
import styled from 'styled-components';



class Board extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        netxPlayer: true,
        winnerLIne: Array(3).fill(null),
      };
    }
    
  
    renderSquare(iSquare) {
      const { squares } = this.state
      return <Square 
        value={squares[iSquare]}        
        onClick ={this.handleClickSquare(iSquare)}    
        row = {iSquare}          
        />;
    }
  
    handleClickSquare = iSquare => () => {
      const { squares, netxPlayer } = this.state
      const clikedSquare = squares.slice();
      if (calculateWinner(clikedSquare) || clikedSquare[iSquare]) {
        return;
      }
      clikedSquare[iSquare] = netxPlayer ? 'X' : 'O';
      this.setState({
        squares: clikedSquare,
        netxPlayer: !netxPlayer,
      });
    }  

   
  
    render(){        
      const { squares, netxPlayer } = this.state
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = 'El ganador es = ' + winner;
      } else {       
        status = `Turno para:  ${(netxPlayer ? 'X' : 'O')}`
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

      const BoardWrap = styled.div `
        background: rgb(20, 189, 172);
        padding: 2rem;
      `;

      const Status = styled.div`
        text-align: center;
        padding-bottom: 2rem;
      `;
      
      return(
        <BoardWrap>
          <Status>{status}</Status>
          <TopRow>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </TopRow>
          <MiddleRow>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </MiddleRow>
          <BottomRow>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </BottomRow>         
        </BoardWrap>
      )
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
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
  

export default (Board);