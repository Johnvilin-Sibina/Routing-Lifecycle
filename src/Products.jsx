import {useEffect} from "react";
import Card from "./Card";
function Products({products,getData}) {
  
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h1>Products</h1>
                {products.map((product, index) => {
                  
          return <Card key={index} product={product}/>;
        })}
      </div>
    </div>
  );
}

export default Products;
