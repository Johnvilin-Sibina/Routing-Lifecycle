import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const getProductData = async () => {
    try {
      const productData = await fetch(
        `https://65fba50a14650eb2100a446c.mockapi.io/products/${params.productid}`
      );
      const productResp = await productData.json();
      setProduct(productResp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>{product?.name}</h1>
          <img src={product?.avatar} />
          <p>{product?.description}</p>
          <h4>{product?.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default Product;
