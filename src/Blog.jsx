import { Link, Outlet} from "react-router-dom";

function Blog() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"politics"} className="nav-link active">
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"sports"} className="nav-link" >
                  Sports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Blog;
