import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux'
import {Home,Account,About,Contact,Error,Login,SignUp,Product,Cart,Checkout} from './pages/index';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {

const theme = useSelector((state)=>console.log(state?.auth?.theme))
  return (
    <Container>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/me' element={<Account/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>

        </Routes>
        <Footer/>
    </Container>
  )

}
const Container = styled.div`

`



export default App
