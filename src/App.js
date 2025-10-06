import React, { Component } from 'react'

 import Home from './component/Home/Home.jsx'
 import About from './component/About/About.jsx'
 import Header from './component/Header/Header.jsx'
 import { Routes,Route } from 'react-router-dom'
import Contact from './component/Contact/Contact.jsx'
import Protfolio from './component/Protfolio/Protfolio.jsx'


export default class App extends Component {
  render() {
    return (
   <>
   <Header/>
       <Routes>
    <Route path='' element={<Home/>}></Route>
   
    <Route path='about' element={<About/>} ></Route>
    <Route path='home/about' element={<About/>} ></Route>
    <Route path='prot' element={<Protfolio/>} ></Route>
    <Route path='contact' element={<Contact/>} ></Route>
    </Routes>
   </>
    )
  }
}


