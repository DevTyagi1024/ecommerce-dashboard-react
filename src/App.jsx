import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import Header from './Header'
import Footer from './footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import ProductList from './ProductList'
import UserList from './UserList'
import Search from './Search'


function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      

        <main className="main-content">
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Search' element={<Protected Component={Search} />} />
            <Route path='/productlist' element={<Protected Component={ProductList} />} />
            <Route path='/UserList' element={<Protected Component={UserList} />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/UpdateProduct' element={<Protected Component={UpdateProduct} />} />
            <Route path='/AddProduct' element={<Protected Component={AddProduct} />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
