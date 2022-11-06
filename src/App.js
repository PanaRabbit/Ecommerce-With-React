import './App.css';
import { Breadcrumb } from './Components/Breadcrumb/Breadcrumb';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import React, { useState } from 'react';
// import { useEffect , useState} from 'react';

import Layout from './layouts/Layout';


const App = () => {
  /*useEffect( () => {
    fetch ("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
    .then((res) => res.json())
    .then((data) => {
         console.log (data);
                });
  }, []);*/

  const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);

  const selected = crumb => {
    console.log(crumb);
  }
  return (
    <div>
      <Layout/>
      <Breadcrumb/>
      <Header/>
      <Footer/>
      <Breadcrumb crumbs={ crumbs } selected={ selected }  />
    </div>
  )
};


export default App;