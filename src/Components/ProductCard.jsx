import React from 'react'
import styled from 'styled-components';
import {AiOutlineEye,AiOutlineHeart, AiOutlineLineChart, AiOutlineShoppingCart, AiOutlineStar} from 'react-icons/ai';


function ProductCard({data}) {
  return (
        <Card className='shadow-md'>
            <div className='card-head'>
                <span className={`tag ${data?.rating.rate>=3?'bg-green-500':'bg-red-500'}`} >{data?.rating.rate}<AiOutlineStar/>{`(${data?.rating.count})`}</span>
                <span className="options">
                   <AiOutlineEye className='glass'/>
                   <AiOutlineHeart className='glass'/>
                   <AiOutlineShoppingCart className='glass'/>
                </span>
                <img src={data?.image} alt="image" />
                
            </div>
            <div className='card-body'>
                <h3>{data?.title.slice(0,50)}</h3>
                <h3><span className='px-2 text-yellow-500'>${data?.price}</span></h3>
                
                <button className='btn bg-red-600 text-white hover:bg-red-500 '>Buy Now</button>
            </div>
        </Card>
  )
}

const Card = styled.div`
    cursor: pointer;
    width:270px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 16px;
    box-shadow: 5px 5px 25px #000;
    border-radius: 4px ;
    
    .card-head{
        width: 250px;
        height:250px;
        position: relative;
        border-radius: 4px;
        background: #fff;
    }
    h3{
        font-size:10px;
    }
    h3>span{
        font-size: 18px;
    }
    img{
        width:70%;
        height:70%;
        margin: 0 auto;
        position: absolute;
        top: 50px;
        left: 20%;
        transition: all 0.5s ease-in-out;
    }
    img:hover{
       scale: 1.1;
    }
    .tag{
        font-weight: 600;
        padding:4px 8px;
        position: absolute;
        display: flex;
        align-items: center;
        top:10px;
        left: 20px;
        z-index: 3;
        color: #fff;
        font-size:14px;
        border-radius: 5px;
        
    }
    .options{
        position: absolute;
        right:10px;
        top:10px;
        z-index: 2;
        
    }
    .card-body{

        width:100%;
        height: 150px;
        font-size:14px;
        font-weight: 600;
        padding:10px;
    }
    @media (max-width:768px) {
    width:100%;
    height: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 16px;
    box-shadow: 3px 3px 15px #000;
    border-radius: 4px ;    
    
        
    .card-head{
        width: 50%;
        height:100%;
        position: relative;
        border-radius: 4px;
        background: #fff;
    }
    h3{
        font-size:10px;
    }
    h3>span{
        font-size: 18px;
    }
    img{
        width:70%;
        height:70%;
        margin: 0 auto;
        position: absolute;
        top: 50px;
        left: 20%;
        transition: all 0.5s ease-in-out;
    }
    img:hover{
       scale: 1.1;
    }
    .tag{
        font-weight: 600;
        padding:2px 5px;
        position: absolute;
        display: flex;
        align-items: center;
        top:5px;
        left: 10px;
        z-index: 3;
        color: #fff;
        font-size:10px;
        border-radius: 5px;
        
    }
    .options{
       
        position: absolute;
        bottom: 0;
        z-index: 2;
        
    }
    .card-body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width:50%;
        height: 100%;
        font-size:14px;
        font-weight: 600;
        padding:10px;
    }
}


`; 

export default ProductCard