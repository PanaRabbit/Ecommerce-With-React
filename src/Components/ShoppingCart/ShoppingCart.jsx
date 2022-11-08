import ReactDOM from "react-dom";
import "../ShoppingCart/ShoppingCart.css";
import { dollarUS } from "../../utils/formats";

const ShoppingCart = (props) => {
  const { openShoppingCart, toggleModal, infoProduct, variantInfo } = props;

  if (infoProduct === null) {
    return <></>;
  }

  const variant = infoProduct?.variants?.find(
    (variant) =>
      variant.option1 === variantInfo.selectedColor &&
      variantInfo.selectedSize === variant.option2
  );

  return openShoppingCart
    ? ReactDOM.createPortal(
        <div className="container">
          <div className="topSide">
            <h2>Product added successfully</h2>
            <button onClick={() => toggleModal()}>X</button>
          </div>

          <div className="detail">
            <div className="detailProduct">
              <img
                src={`https:${infoProduct?.images[0].split("?")[0]}`}
                alt=""
                width={100}
              />
              <div className="detailProductInfo">
                <h2>
                  {infoProduct?.title} - {variant.title}
                </h2>
                <h4 className="property">
                  Color: <span>{variant.option1}</span>
                </h4>
                <h4 className="property">
                  Size: <span>{variant.option2}</span>
                </h4>
                <h4 className="property">
                  Quantity: <span>{variantInfo.ammount}</span>
                </h4>
              </div>
            </div>

            <div className="detailPrice">
              <h2>Price</h2>
              <div className="detailPriceInfo">
                <div>
                  <h4 className="propertyPrice">Actual Price:</h4>
                  <span>{dollarUS.format(variant?.compare_at_price)}</span>
                </div>

                <div>
                  <h4 className="propertyPrice">Discount:</h4>
                  <span>
                    {dollarUS.format(
                      variant?.compare_at_price - infoProduct?.price
                    )}
                  </span>
                </div>

                <div>
                  <h4 className="propertyPrice">Final Price:</h4>
                  <span>{dollarUS.format(infoProduct?.price)}</span>
                </div>

                <div>
                  <h4 className="propertyPrice">Subtotal:</h4>
                  <span>
                    {dollarUS.format(infoProduct?.price * variantInfo.ammount)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="Button-text">Go to cart</button>
            <button onClick={() => toggleModal()}>Continue shopping</button>
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export default ShoppingCart;
