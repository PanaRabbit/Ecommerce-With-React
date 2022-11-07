import React, { useState } from "react";
import styles from "../ProductForm/ProductForm.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const InformationProduct = ({ information }) => {
  const [openShoppingCart, setOpenShoppingCart] = useState(false);

  const toggleModal = () => {
    setOpenShoppingCart(!openShoppingCart);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{information.title}</h2>
      <div className={styles.price}>
        <h3>$ {information.price}</h3>
        <span>$ {information.compare_at_price}</span>
      </div>

      <div className={styles.quantityAndTotal}>
        <div className={styles.containerQuantity}>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>
        <div className={styles.containerTotal}>
          <span>Total Price: </span>
          <span>$ {information.price}</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <button>Add to favourite</button>
        <button onClick={() => toggleModal()}>Add to cart</button>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: information.description }}
        className={styles.textDetails}
      />

      {information ? (
        <ShoppingCart
          openShoppingCart={openShoppingCart}
          toggleModal={toggleModal}
          informationProduct={information}
        />
      ) : null}
    </div>
  );
};

export default InformationProduct;
