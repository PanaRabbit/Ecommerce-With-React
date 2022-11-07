import ReactDOM from "react-dom";
import styles from "../ShoppingCart/ShoppingCart.css";

const ShoppingCart = (props) => {
  const { openShoppingCart, toggleModal, infoProduct } = props;

  if (infoProduct === null) {
    return <></>;
  }

  return openShoppingCart
    ? ReactDOM.createPortal(
        <div className={styles.container}>
          <div className={styles.topSide}>
            <h2>
              Product added successfully <span>&#129395;</span>
            </h2>
            <button onClick={() => toggleModal()}>X</button>
          </div>

          <div className={styles.detail}>
            <div className={styles.detailProduct}>
              <img
                src={`https:${infoProduct?.images[0].split("?")[0]}`}
                alt=""
                width={100}
              />
              <div className={styles.detailProductInfo}>
                <h2>{infoProduct?.title}</h2>
                <h4 className={styles.property}>
                  Color: <span>Red</span>
                </h4>
                <h4 className={styles.property}>
                  Size: <span>8.5</span>
                </h4>
                <h4 className={styles.property}>
                  Quantity: <span>1</span>
                </h4>
              </div>
            </div>

            <div className={styles.detailPrice}>
              <h2>Price</h2>
              <div className={styles.detailPriceInfo}>
                <div>
                  <h4 className={styles.propertyPrice}>Actual Price:</h4>
                  <span>$ {infoProduct?.compare_at_price}</span>
                </div>

                <div>
                  <h4 className={styles.propertyPrice}>Discount:</h4>
                  <span>
                    $ {infoProduct?.compare_at_price - infoProduct?.price}
                  </span>
                </div>

                <div>
                  <h4 className={styles.propertyPrice}>Final Price:</h4>
                  <span>$ {infoProduct?.price}</span>
                </div>

                <div>
                  <h4 className={styles.propertyPrice}>Subtotal:</h4>
                  <span>$ {infoProduct?.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <button>Go to cart</button>
            <button onClick={() => toggleModal()}>Continue shopping</button>
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export default ShoppingCart;
