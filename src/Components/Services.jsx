import React from 'react'
import styled from 'styled-components';
import ServiceCard from './ServiceCard';
import s1 from '../assets/images/s-1.png'
import s2 from '../assets/images/s-2.png'
import s3 from '../assets/images/s-3.png'



function Services() {


    const services = [{
        image:s1,
        title:"FREE AND FAST DELIVERY",
        desc:"Free delivery for all orders over $140"
    },
    {
        image:s2,
        title:"24/7 CUSTOMER SERVICE",
        desc:"Friendly 24/7 customer support"
    },
    {
        image:s3,
        title:"MONEY BACK GUARANTEE",
        desc:"We reurn money within 30 days"
    },

]

  

  return (
    <Container>
        {
            services.map((service)=><ServiceCard data={service}/>)
        }
    </Container>
  )
}

const Container = styled.div`  
    width: 100%;
    height:150px;
    display: flex;
    margin: 100px 0px;
    justify-content:space-around;
    align-items: center;
    .service-cards{
        width:200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    img{
        width:70px;
    }
    .service-title{
        font-size: 14px;
        font-weight: bold;
    }
    .service-desc{
        font-size: 10px;
    }
    @media (max-width:768px) {
        width: 100%;
    height:150px;
    display: flex;
    margin: 40px 0px;
    padding: 10px;
    justify-content:space-around;
    align-items: center;
    .service-cards{
        width:200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    img{
        width:50px;
    }
    .service-title{
        font-size: 10px;
        font-weight: bold;
    }
    .service-desc{
        font-size: 9px;
    }
    }
`;


export default Services