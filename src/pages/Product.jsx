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

  const [type,setType] = useState({
    catagory:'',
    sortIn:'All',
  });

  const filterProductByCatagory = ()=>{
      if(type.catagory){
        const newProductList= products.filter((product)=>(product.category==(type.catagory)));
        setProductList(newProductList);
      }
  };


  const sortProductList = ()=>{
      if(type.sortIn == 'All'){
        const newProductList = productList.sort((p1,p2)=>p2.title-p1.title)
        console.log(newProductList);
      }
  }



  useEffect(()=>{
    console.log(type.catagory)
    filterProductByCatagory();
    
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
          <Card title={'Others'}>
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
              onClick={()=>{
                setType({
                  ...type,
                  sortIn:'All'
                })
              }}
              >All</span>
              <span>New</span>
              <span>The Most popular</span>
              <span>Chepest</span>
              <span>The Most Expensive</span>
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