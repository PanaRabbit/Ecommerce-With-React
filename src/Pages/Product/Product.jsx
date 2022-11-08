import ImgCarousel from "../../Components/ImgCarousel/ImgCarousel";
import ProductForm from "../../Components/ProductForm/ProductForm";
import "../Product/Product.css";
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

  return (
    <>
      <div clasName="">
        <div className="row">
          {data.images.length > 0 ? (
            <div className="col-md-6">
              <ImgCarousel imagesArray={data.images} />
            </div>
          ) : null}
          <div className="col-md-6">
            <ProductForm information={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
