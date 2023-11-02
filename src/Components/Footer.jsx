import React from 'react';
import styled from 'styled-components';
import f1 from '../assets/images/f-1.png';

function Footer() {
    const support = ['Support','111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.','+88015-88888-9999'];

    const Accounts = ['Account','My Account','Login / Register','cart','Wishlist','Shop'];

    const quicklinks = ['Quick Links','Privacy Policy','Terms Of Use',
'FAQ','Contact']

    return (
    <Container>
        <ul className='links'>
        {
            support.map((link)=><li key={link}>{link}</li>)
        }
        </ul>
        <ul className='links'>
        {
            Accounts.map((link)=><li key={link}>{link}</li>)
        }
        </ul>
        <ul className='links'>
        {
            quicklinks.map((link)=><li key={link}>{link}</li>)
        }
        </ul>
        <ul>
            <li>Download App</li>
            <li>
                <img src={f1} alt="dowloadapp" />
            </li>
        </ul>
    </Container>
  )
}

const Container = styled.footer`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px 10px;
    flex-wrap: wrap;
    background-color: black;
    color:#fff;
    font-size: 14px;
    .links{
        display: flex;
        flex-direction: column;
        gap:10px;
        
    }
    
    .links>li{
        display: block;
        cursor: pointer;
        
    }
    @media (max-width:768px) {
            
    }
`;


export default Footer