import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    background: #009688;
    height: 140px;
    width: 140px;
    cursor: pointer;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;    
    font-size: 7rem;
`;

function Square(props) {
    return (
      <Button className = 'square' onClick={props.onClick}>
        {props.value}
      </Button>
    );
  }

 

  export default(Square);