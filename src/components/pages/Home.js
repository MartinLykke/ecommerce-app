import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselSlider from "../frontpage/CarouselSlider";
import Product from "../frontpage/Product";
import ProductCatBtns from "../frontpage/ProductCatBtns";
import Modal from "../Modal";

function Home() {
  const [carouselWidth, setCarouselWidth] = useState(400);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [showProductDesc, setshowProductDesc] = useState(true);
  const [userIsPc, setUserIsPc] = useState(true);
  const resizeUI = () => {
    if (window.innerWidth < 992) {
      setshowProductDesc(false);
    } else {
      setshowProductDesc(true);
      setCarouselWidth(400);
    }
    if (window.innerWidth <= 767) {
      setCarouselWidth(300);
      setUserIsPc(false);
    } else {
      setUserIsPc(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeUI);
    resizeUI();
    return () => {
      window.removeEventListener("resize", resizeUI);
    };
  }, []);

  return (
    <>
      <div class="container shadow p-3 mb-5 bg-white rounded">
        {userIsPc && (
          <div class="row">
            <div class="col-sm"></div>
            <div class="col-10">
              <CarouselSlider carouselWidth={carouselWidth}></CarouselSlider>
              <Modal open={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
                product name
              </Modal>
            </div>
            <div class="col-sm"></div>
          </div>
        )}
        {!userIsPc && (
          <div>
            {" "}
            <CarouselSlider carouselWidth={carouselWidth}></CarouselSlider>
            <Modal open={popupIsOpen} onClose={() => setPopupIsOpen(false)}>
              product name
            </Modal>
          </div>
        )}

        <ProductCatBtns />
        <h1 class="text-center p-4">Most popular</h1>
        <div className="container">
          <div class="row text-center">
            <div class="col-sm ">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
            <div class="col-sm">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
            <div class="col-sm">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
            <div class="col-sm">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
          </div>
        </div>
        <h1 class="text-center p-4">This week's offers</h1>
        <div className="container">
          <div class="row text-center">
            <div class="col-sm ">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
            <div class="col-sm">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
            <div class="col-sm">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
            <div class="col-sm">
              {" "}
              <Product
                setPopupIsOpen={setPopupIsOpen}
                showProductDesc={showProductDesc}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
