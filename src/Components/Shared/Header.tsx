import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const user = { _id: "1", role: "admin" };
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Container>
        <Row>
          <nav className="d-flex">
            <Col>
              <div className="logo"></div>
              <ul className="menu-list ">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="menu-item">
                  <Link to="/shop">Category</Link>
                </li>
                <li className="menu-item">
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </Col>

            <Link to="/cart">
              <FaShoppingBag />
            </Link>
            {user?._id ? (
              <>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <FaUser />
                </button>
                <dialog open={isOpen}>
                  <div>
                    {user.role === "admin" && (
                      <Link to="/admin/dashboard">Admin</Link>
                    )}
                    <Link to="/allorders">All Orders</Link>
                    <button>
                      <FaSignOutAlt />
                    </button>
                  </div>
                </dialog>
              </>
            ) : (
              <>
                <Link to="/login">
                  <FaSignInAlt />
                </Link>
              </>
            )}
          </nav>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Header;
