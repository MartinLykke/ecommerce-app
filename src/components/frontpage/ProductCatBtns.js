import React from "react";
import {
  Tv,
  CameraFill,
  HddFill,
  Laptop,
  Phone,
  Controller,
} from "react-bootstrap-icons";
function ProductCatBtns() {
  return (
    <div class="container w-75">
      <div class="row text-center display-6" role="group">
        <a class="col text-dark text-decoration-none" role="button">
          <Tv />
          <p class="h6">Tv</p>
        </a>
        <a class="col text-dark text-decoration-none" role="button">
          <CameraFill />
          <p class="h6">Photo & video</p>
        </a>
        <a class="col text-dark text-decoration-none" role="button">
          {" "}
          <HddFill />
          <p class="h6">Hardware</p>
        </a>
        <a class="col text-dark text-decoration-none" role="button">
          {" "}
          <Laptop />
          <p class="h6">Laptops</p>
        </a>
        <a class="col text-dark text-decoration-none" role="button">
          {" "}
          <Phone />
          <p class="h6">Mobile</p>
        </a>
        <a class="col text-dark text-decoration-none" role="button">
          {" "}
          <Controller />
          <p class="h6">Gaming</p>
        </a>
      </div>
    </div>
  );
}

export default ProductCatBtns;
