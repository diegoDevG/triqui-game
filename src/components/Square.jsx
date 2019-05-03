import React from 'react';
import styled from 'styled-components';

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
    padding: 1px;
`;

const Square = ({ value, index, onSquareClick }) => {
  return (
    <Button row={index} onClick={onSquareClick}>
      {value}
    </Button>
  );
}

export default Square;