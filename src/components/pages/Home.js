import React from "react";
import styled from "styled-components";
import CarouselSlider from "../frontpage/CarouselSlider";
import Product from "../frontpage/Product";
import ProductCatBtns from "../frontpage/ProductCatBtns";

function Home() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <div class="col-10">
            <CarouselSlider></CarouselSlider>
          </div>
          <div class="col-sm"></div>
        </div>
        <ProductCatBtns />
        <Wrapper className="page">
          <div className="section-center products">
            <div>
              <Product />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default Home;
