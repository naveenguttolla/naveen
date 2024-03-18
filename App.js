import React from 'react'
import Header from './GSMARENA/Header'
import Products from './GSMARENA/Products'
import Product from './GSMARENA/Product'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    {/* <Route path='/' element={<Header/>}></Route> */}
    <Route path='/Products' element={<Products/>}></Route>

    <Route path = "/products/:id" element = {<Product/>}></Route>





    </Routes>


    </Router>
    
    
    </>
    
  )
}

export default App