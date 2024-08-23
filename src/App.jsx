import './App.css'
import { Contact } from './assets/components/Contact'
import { Footer } from './assets/components/Footer'
import { HeroSection } from './assets/components/HeroSection'
import { Navbar } from './assets/components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Products } from './assets/components/Products'
import { About } from './assets/components/About'
import { CakesCatagory } from './assets/components/CakesCatagory'
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HeroSection/>}/>
        <Route index element = {<HeroSection/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cakescatagory' element={<CakesCatagory/>}/>
            
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
