import React from 'react'
import styled from 'styled-components'

function Title({title}) {
  return (
    <Heading>
        {title}
    </Heading>
  )
}

const Heading = styled.h3`
    width:100%;
    height: 40px;
    padding: 10px 5px ;
    margin: 10px 20px;
    font-weight: 600;
    font-size: 1.2rem;
    border-left: 20px solid red;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    

`;  


export default Title