import React from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import sale from "../../assets/images/sale.jpg";
import sale2 from "../../assets/images/sale2.jpg";
import products from "../../assets/images/products.jpg";
import products2 from "../../assets/images/products2.jpg";
const styles = { height: 400, width: "100%" };

class CarouselSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    // console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    //console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };

  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={3000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}
            >
              <div style={{ height: this.props.carouselWidth }}>
                <img style={{ width: "100%", height: "100%" }} src={sale} />
              </div>

              <div style={{ height: this.props.carouselWidth }}>
                <img style={{ width: "100%", height: "100%" }} src={products} />
              </div>
              <div style={{ height: this.props.carouselWidth }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={products2}
                />
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CarouselSlider;
