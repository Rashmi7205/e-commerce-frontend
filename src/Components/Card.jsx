import React from 'react'
import styled from 'styled-components'

function Card({title,children}) {
  return (
    <Logo>
        {children}
        <h3>{title}</h3>
    </Logo>
  )
}

const Logo = styled.div`
    width:100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-around;
    border: 2px solid black;
    font-size: 3.5em;
    padding:10px;
    text-align: center;
    text-transform: capitalize;
    border-radius: 4px;
    h3{
        width: 100%;
        font-size:10px;
        font-weight: bold;
        text-align: center;
    }
    &:hover{
      background-color  : red;
        color: white;
        border:none;
        cursor: pointer;
    
    }
`;

export default Card