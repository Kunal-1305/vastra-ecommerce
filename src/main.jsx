import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import WebsiteTemplates from './WebsiteTemplates.jsx'
import HTML5resources from './HTML5resources.jsx'
import Faqs from './FAQs.jsx'
import Blog from './Blog.jsx'
import Contact from './Contact.jsx'
import Data from './Data.jsx'
import Login from './Login.jsx'
import RecipeDetail from './RecipeDetail.jsx'
import Cart from './Cart.jsx'
import AllProducts from './Allproducts.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>    
    <Routes>
      <Route element=<Home/>
      path="/"/>
      <Route element=<WebsiteTemplates/>
      path="/wt"/>
      <Route element=<HTML5resources/>
      path="/hr"/>
      <Route element=<Faqs/>
      path="/faq"/>
      <Route element=<Blog/>
      path="/blog"/>
      <Route element=<Contact/>
      path="/contact"/>
      <Route element=<Data/>
      path="/data"/>
      <Route element=<Login/>
      path="/login"/>
      <Route element=<RecipeDetail/>
      path="/detail" />
      <Route element=<Cart/>
      path="/cart" />
      <Route element=<AllProducts/> 
      path="/all-products" />
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
