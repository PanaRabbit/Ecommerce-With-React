import ImgCarousel from "../../Components/ImgCarousel/ImgCarousel";
import ProductForm from "../../Components/ProductForm/ProductForm";

import { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState({
    images: [],
  });

  useEffect(() => {
    fetch(
      "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  return (
    <>
      {data.images.length > 0 ? (
        <ImgCarousel imagesArray={data.images} />
      ) : null}
      <ProductForm information={data} />
    </>
  );
};

export default Product;
