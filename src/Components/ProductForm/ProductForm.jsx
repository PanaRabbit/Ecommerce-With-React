import React, { useState } from "react";
import "../ProductForm/ProductForm.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const InformationProduct = ({ product }) => {
  const [openShoppingCart, setOpenShoppingCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const colorOptions = product?.options?.find(
    (option) => option?.name === "Color"
  );

  const sizeOptions = product?.options?.find(
    (option) => option?.name === "Size"
  );

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const toggleModal = () => {
    setOpenShoppingCart(!openShoppingCart);
  };

  return (
    <div>
      <h2 className="title">{product.title}</h2>
      <div className="section">
        <h3>{dollarUS.format(product.price)}</h3>
        <h4>{dollarUS.format(product.compare_at_price)}</h4>
      </div>

      {/* Color Options */}
      {colorOptions ? (
        <div className="section">
          <span className="col">Color: </span>
          <div className="col-11 d-flex flex-wrap">
            {colorOptions.values.map((value) => {
              return value === selectedColor ? (
                <div className="outter-dot selected">
                  <span
                    className="inner-dot"
                    key={value}
                    style={{ backgroundColor: value }}
                    onClick={() => setSelectedColor(value)}
                  />
                </div>
              ) : (
                <div className="outter-dot">
                  <span
                    className="inner-dot"
                    key={value}
                    style={{ backgroundColor: value }}
                    onClick={() => setSelectedColor(value)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Size Options */}
      {sizeOptions ? (
        <div className="section">
          <span className="col">Size: </span>
          <div className="col-11 d-flex flex-wrap">
            {sizeOptions.values.map((value) =>
              value === selectedSize ? (
                <span
                  className="size-square selected"
                  key={value}
                  onClick={() => setSelectedSize(value)}
                >
                  {value}
                </span>
              ) : (
                <span
                  className="size-square"
                  key={value}
                  onClick={() => setSelectedSize(value)}
                >
                  {value}
                </span>
              )
            )}
          </div>
        </div>
      ) : null}

      <div className="quantityAndTotal">
        <div className="containerQuantity">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <div className="containerTotal">
          <span>Total Price: </span>
          <span>$ {product.price}</span>
        </div>
      </div>

      <div className="buttons">
        <button>Add to favourite</button>
        <button onClick={() => toggleModal()}>Add to cart</button>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: product.description }}
        className="textDetails"
      />

      {product ? (
        <ShoppingCart
          openShoppingCart={openShoppingCart}
          toggleModal={toggleModal}
          informationProduct={product}
        />
      ) : null}
    </div>
  );
};

export default InformationProduct;
