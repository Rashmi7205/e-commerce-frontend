import React,{useEffect} from 'react'
import Navbar from '../Components/NavBar'
import Slider from '../Components/Slider';
import ProductList from '../Components/ProductList';
import {products} from '../constants';
import Title from '../Components/Title';
import styled from 'styled-components';
import Card from '../Components/Card';
import { AiOutlineCamera, AiOutlineDesktop, AiOutlineMobile } from 'react-icons/ai';
import {BsSmartwatch,BsHeadphones} from 'react-icons/bs';
import {BiSolidJoystick} from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { getProducts } from '../Redux/authSlice';
import Services from '../Components/Services';


function Home() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[]);


  return (
    <Conatainer>
     <Slider/>
     <ProductList products={products} listTitle={'Flash Sale'} buttonTitle={'View All Products'}/>
     <div className='catagory'>
        <Title title={'Catagories'}/>
        <h1>Browse By Catagory</h1>
        <div className='catagory-list flex flex-wrap'>
          <Card title={'phone'}>
            <AiOutlineMobile/>
          </Card>
          <Card title={'Computers'}>
            <AiOutlineDesktop/>
          </Card>
          <Card title={'smartwatches'}>
            <BsSmartwatch/>
          </Card>
          <Card title={'camera'}>
            <AiOutlineCamera/>
          </Card>
          <Card title={'Gaming'}>
            <BiSolidJoystick/>
          </Card>
          <Card title={'Headphones'}>
            <BsHeadphones/>
          </Card>
         
        </div>
        <button >Browse All Catagories</button>
     </div> 
    <div className='services w-full'>
      <Services/>
    </div>
    </Conatainer>
  )
}

const Conatainer = styled.div`
  width: 100%;
  .catagory{
    width:80%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .catagory-list{
      width:100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      gap:30px;
      margin: 20px ;
    }
    h1{
      width:100%;
      text-align: left;
      font-weight: bold;
      font-size:1em;
      padding:10px;
    }
    button{
      font-size:14px;
      font-weight: bold;
      color: white;
      background-color: red;
      padding:10px 10px;
      border-radius: 4px;
      margin:10px 0;
    }
  }
`;
export default Home