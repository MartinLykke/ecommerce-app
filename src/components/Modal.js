import React from "react";
import { BagCheckFill } from "react-bootstrap-icons";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
import "./Modal.css";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "2%",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES} className="shadow-lg rounded mobilewidth">
        <h1 className="d-flex justify-content-center ">
          {" "}
          <BagCheckFill className="text-success" />
        </h1>
        <p className="d-flex justify-content-center">Item was put in cart</p>
        <div className="d-flex justify-content-around">
          <img
            src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
            alt="Product"
            className="w-25"
          />
          <p className="d-flex align-items-center"> {children}</p>
          <p className="d-flex align-items-center">product price,-</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <button onClick={onClose} className="btn shadow-sm p-3 bg-body">
            Continue shopping
          </button>
          <Link to="/cart">
            <button className="btn btn-primary p-3">Checkout</button>
          </Link>
        </div>
        <br /> <br />
        <h4 className="d-flex justify-content-center">
          Other customers who bought this also looked at
        </h4>
        <br />
        <img
          src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
          alt="Product"
          className="w-25"
        />
        <img
          src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
          alt="Product"
          className="w-25"
        />
        <img
          src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
          alt="Product"
          className="w-25"
        />
        <img
          src="https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png"
          alt="Product"
          className="w-25"
        />
      </div>
    </>,
    document.getElementById("portal")
  );
}
