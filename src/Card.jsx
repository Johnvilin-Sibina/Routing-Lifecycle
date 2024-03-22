import {Link} from "react-router-dom";
function Card({product}) {
  return (
    <div className="col">
          <div className="card shadow-sm">
            <img src={product?.avatar}/>
            <div className="card-body">
              <p className="card-text">{product?.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link type="button" to={`/product/${product?.id}`} className="btn btn-sm btn-outline-secondary" >View</Link>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-body-secondary">Rs.{product?.price}</small>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card