import './App.css';
import  Breadcrumb  from './layouts/Breadcrumb/Bread';

import { Form } from './layouts/Form/Form';
import { ImgCarousel } from './layouts/ImgCarousel/ImgCarousel';
import Layout from './layouts/Layout';
// import { useEffect , useState} from 'react';




const App = () => {
  /*useEffect( () => {
    fetch ("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js")
    .then((res) => res.json())
    .then((data) => {
         console.log (data);
                });
  }, []);*/

  
 
  return (
    <div>
      <Breadcrumb/>
      <Layout/>
      <Form/>
      <ImgCarousel/>
     
    </div>
  )
};


export default App;