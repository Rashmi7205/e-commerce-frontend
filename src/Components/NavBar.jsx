import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaSearch,FaHeart} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {RiAccountCircleLine} from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "products",
      slug: "/products",
    },
    {
      title: "About ",
      slug: "/About",
    },
    {
      title: "Contact",
      slug: "/contact",
    },
    {
      title:'Catagories',
      slug:'/catagories'
    }
   
  ];

  return (
    <Container>
      <div className="nav-links">
        <Nav className="w-full">
          <Logo href="/">
            <img src="https://imgs.search.brave.com/HbMRqLoJ6cSkYff3qxAq43MYR0QGjdp8avwsrZyITxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcx/LnBuZ2h1dC5jb20v/dC8xMS8xOC80L1Bz/WWVMdFQ2QUYvd2Vi/LWRlc2lnbi1sb2dv/LXRyYWRlLXdlYnNp/dGUtZGV2ZWxvcG1l/bnQtc3ltYm9sLmpw/Zw" alt="logo"  className="logo"/>
          </Logo>
          <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
          <NavLinks isOpen={isOpen}>
            {
              navItems.map((navItem)=><Link key={navItem.title} to={navItem.slug} >{navItem.title}</Link>)
            }
      
          </NavLinks>
        </Nav>
      </div>
      <div className="userdetails">
          <div className="search-bar">
              <input type="wtext" placeholder="What is you lookng for?" />
              <FaSearch className="pointer"/>
          </div>
          <Link to='/wishlist'>
          <FaHeart/>
          </Link>
          <Link to='/cart'>
            <AiOutlineShoppingCart/>
          </Link>
          <Link to='/me'>
              <RiAccountCircleLine/>
          </Link>
          
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  .logo{
    width:40px;
    height: auto;
  }
  .nav-links{
    width:70%;
    height: 100%;
    font-weight: 600;
  }
  .userdetails{
    width: 30%;
    height:100%;
    a{
      font-size: 1.5rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    .search-bar{
      width:50%;
      padding:5px 8px;
      
      background-color: #F5F5F5;
      font-size:1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
    
    }
    input{
      background-color: transparent;
      outline: none;
      border: none;
      color:gray;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100px;
    .nav-links{
    width:100%;
    height: 50%;
    }
    .userdetails{
    width: 100%;
    height:50%;
    a{
      font-size: 1rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-around;
    .search-bar{
      width:50%;
      padding:2px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 4px;
      border: none;
      font-size: 10px;
    }
    input{
      outline: none;
      border: none;
      color:gray;
    }
  }
  }
 
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 50;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  a {
    font-size: 14px;
    text-decoration: none;
    margin: 0 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      margin: 1rem 0;
     
    }
  }
  @media (max-width:768px) {
      background-color: #f5f5f5;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #fafafa;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    text-align: center;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export default Navbar;
