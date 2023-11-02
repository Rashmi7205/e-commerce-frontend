import React from 'react'
import styled from 'styled-components'
import Title from './Title';

import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductList({listTitle,buttonTitle}) {
  
    const products = useSelector((state)=>state?.auth?.products);
    const navigate = useNavigate(); 
  
    return (
    <Container>
        <Title title={"Today's"}/>
        <div className='head'>
        <h1>{listTitle} </h1>
        <button className='list-btn'
    onClick={()=>navigate('/products')}
        >{buttonTitle}</button>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-5'>
            {
                products.slice(0,5)?.map((product)=><ProductCard data={product}/>)
            }
        </div>
    </Container>
  )
}

const Container = styled.div`
    width: 80%;
    margin: 20px auto;
    display: flex;
    gap:10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h1{
        width: 100%;
        font-weight: 600;
        
    }
    .head{
        width: 100%;
        display: flex;
        margin: 20px 0px;
    }
    .list-btn{
        width:150px;
        font-size: 14px;
        background-color:red;
        color: white;
        font-weight: 600;
        padding:5px;
        border-radius: 4px;

    }
    @media (max-width:768px) {
      .list-btn{
        font-size:10px;
      }  
    }
`;

export default ProductList