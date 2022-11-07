import ReactDOM from "react-dom";
import "../ShoppingCart/ShoppingCart.css";

const ShoppingCart = (props) => {
  const { openShoppingCart, toggleModal, infoProduct } = props;

  if (infoProduct === null) {
    return <></>;
  }

  return openShoppingCart
    ? ReactDOM.createPortal(
        <div className="container">
          <div className="topSide">
            <h2>
              Product added successfully <span>&#129395;</span>
            </h2>
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
                <h2>{infoProduct?.title}</h2>
                <h4 className="property">
                  Color: <span>Red</span>
                </h4>
                <h4 className="property">
                  Size: <span>8.5</span>
                </h4>
                <h4 className="propert">
                  Quantity: <span>1</span>
                </h4>
              </div>
            </div>

            <div className="detailPrice">
              <h2>Price</h2>
              <div className="detailPriceInfo">
                <div>
                  <h4 className="propertyPrice">Actual Price:</h4>
                  <span>$ {infoProduct?.compare_at_price}</span>
                </div>

                <div>
                  <h4 className="propertyPrice">Discount:</h4>
                  <span>
                    $ {infoProduct?.compare_at_price - infoProduct?.price}
                  </span>
                </div>

                <div>
                  <h4 className="propertyPrice">Final Price:</h4>
                  <span>$ {infoProduct?.price}</span>
                </div>

                <div>
                  <h4 className="propertyPrice">Subtotal:</h4>
                  <span>$ {infoProduct?.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button>Go to cart</button>
            <button onClick={() => toggleModal()}>Continue shopping</button>
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export default ShoppingCart;
