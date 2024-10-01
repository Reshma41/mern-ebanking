import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ebanking</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#transactions">Transactions</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/Homepagebank.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/Coverimageone.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/Coverimagetwo.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container" id="transactions">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="/images/Transaction.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Self Transfer</h5>
                <p className="card-text">Transfer to your other account.</p>
                <Link to='/Selftransfer' className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="/images/Transaction.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bank Transfer</h5>
                <p className="card-text">Transfer to others.</p>
                <Link to='/Banktransfer' className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
              <img src="/images/Transaction.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pay Bills</h5>
                <p className="card-text">Online payment.</p>
                <Link to='/Online' className="btn btn-primary">Click Here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
