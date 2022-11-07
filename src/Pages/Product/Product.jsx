import ImgCarousel from "../../Components/ImgCarousel/ImgCarousel";
import ProductForm from "../../Components/ProductForm/ProductForm";
import { useEffect, useState } from "react";

const App = () => {
  /* STATES */
  const [response, setResponse] = useState(undefined);

  /* USE EFFECT */
  useEffect(() => {
    (async () => {
      const resp = await fetch(
        "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
      );
      const result = await resp.json();
      setResponse(result);
    })();
  }, []);

  if (response === undefined) return null;

  return (
    <>
      <ImgCarousel imagesArray={response.images} />
      <ProductForm />
    </>
  );
};

export default Product;
