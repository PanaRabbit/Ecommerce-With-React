import Header from "../Components/Header/Header";
import Product from "../Pages/Product/Product";
import "../Components/ProductForm/ProductForm.css";

function Layout() {
  return (
    <>
      <div className="container>">
        <Header />
        <Product />
      </div>
    </>
  );
}

export default Layout;
