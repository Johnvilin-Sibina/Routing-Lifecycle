import Card from "./Card"

function Product() {
  return (
    <div className="container">
      <div className="row">
        <h1>Products</h1>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Product