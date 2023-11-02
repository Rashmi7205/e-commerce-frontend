import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/NavBar';
import Card from '../Components/Card';
import { AiOutlineDesktop, AiOutlineMenu} from 'react-icons/ai';
import { BsHeadphones} from 'react-icons/bs';
import {GiLargeDress} from 'react-icons/gi';
import {FaTshirt} from 'react-icons/fa';
import Title from '../Components/Title';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

function Product() {

  const products = useSelector((state)=>state?.auth?.products);

  const [productList,setProductList] = useState(products);

  const categories = ["women's clothing","men's clothing","electronics"];

  const [type,setType] = useState({
    catagory:'all',
    sortIn:'All',
  });

  const filterProductByCatagory = ()=>{
      if(type.catagory != 'all'){
        const newProductList= products.filter((product)=>(product.category==(type.catagory)));
        setProductList(newProductList);
      }
      else{
        setProductList(products);
      }
  };


  const sortProductList = ()=>{
    
    if(type.sortIn == 'Chepest')
    {
        const newList = [...productList].sort((a,b)=>parseFloat(a.price)-parseFloat(b.price));
        setProductList(newList);
    }
    else
    if(type.sortIn == 'Expensive'){
      const newList = [...productList].sort((a,b)=>parseFloat(a.price)-parseFloat(b.price));
      setProductList(newList.reverse());
    }
    else
    if(type.sortIn == 'Rating'){
      const newList = [...productList].sort((a,b)=>parseFloat(a.rating.rate)-parseFloat(b.rating.rate));
      setProductList(newList.reverse());
      
    }
    else
    if(type.sortIn == 'popular'){
      const newList = [...productList].sort((a,b)=>parseFloat(a.rating.count)-parseFloat(b.rating.count));
      setProductList(newList.reverse());
    }
    else{
      return;
  }
  
  }



  useEffect(()=>{
    filterProductByCatagory();
    sortProductList();
  },[type]);

  return (
   <Container>
      <Navbar/>
      <Title title={'Categories'}/>
      <div className='category-list'>
      <Card title={'Clothing'} 
    
      >
        <GiLargeDress   onClick={()=>setType({
        ...type,
        catagory:"women's clothing"
      })}/>
          </Card>
          <Card title={'Computers'}  >
            <AiOutlineDesktop onClick={()=>setType({
              ...type,
              catagory:"electronics"
            })}/>
          </Card>
          <Card title={'Clothing'}>
            <FaTshirt   onClick={()=>setType({
        ...type,
        catagory:"men's clothing"
      })}/>
          </Card>
          <Card title={'all'}>
            <BsHeadphones   onClick={()=>setType({
        ...type,
        catagory:"all"
      })}/>
          </Card>
      </div>

      <div className='filters'> 
          <div className='flex items-center justify-around gap-10'>
            <AiOutlineMenu/> <h1>Sort Based on:</h1>
          </div>
          <div className='flex items-center justify-around gap-3 sort' >
              <span 
              onClick={()=>setType({
                ...type,
                sortIn:'All'
              })}
              >All</span>
              <span
              onClick={()=>setType({
                ...type,
                sortIn:'Rating'
              })}
              >Rating</span>
              <span 
              onClick={()=>setType({
                ...type,
                sortIn:'popular'
              })}
              >The Most popular</span>
              <span
              onClick={()=>setType({
                ...type,
                sortIn:'Chepest'
              })} 
              >Chepest</span>
              <span 
              onClick={()=>setType({
                ...type,
                sortIn:'Expensive'
              })}
              >The Most Expensive</span>
          </div>
   
      </div>
      <Title title={'The Available Products are :'}/>
      <div className='product-lists'>
        {
          productList.map((product)=><ProductCard data={product} key={product.id}/>)
        }
      </div>
   </Container>
  )
}

const Container = styled.div`
  .category-list{
   width :100%;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   gap:10px;
   padding:10px;
  }
  .product-lists{
    width:100%;
    padding:0px 10px;
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    align-items: center;
    justify-content: space-around;
  }
  .filters{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    padding:10px;
  }
  .sort{
    font-size:14px;
    span{
      display: block;
      cursor: pointer;
    }
  }
`;

export default Product