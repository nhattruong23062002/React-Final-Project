import React from 'react';
import {Routes,Route,Link} from 'react-router-dom'
import './component/styles/global.css';
import './component/styles/responsive.css'
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import Abc from './component/Input/InputAntDesign';
import LoginPages from './pages/LoginPages';
import  Layout  from './component/layout/Layout';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/category' element={<CategoryPage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/login' element={<LoginPages/>}/>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
