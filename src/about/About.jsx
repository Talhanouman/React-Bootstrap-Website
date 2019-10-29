import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <Container fluid={true} className="pl-0 ml-0">
      <Row className="pl-0 ml-0">
        <Col className="pl-0 ml-0 pr-0">
          <Carousel>
            <Carousel.Item>
              <img
                fluid
                className="d-block w-100 imageHeight"
                src={require("./../images/Slider2.png")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 imageHeight   "
                src={require("./../images/Slider3.png")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 imageHeight  "
                src={require("./../images/Slider4.png")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="mt-2 pt-2" >
        <Col
          className="col-sm-8 col-xs-12 order-sm-2 offset-sm-2"
        >
          <Image
            className ="About-profilePic"
            src="https://placeimg.com/300/200/tech?t=1566890949822"
            rounded
          />
          <h3>Interpreting Nonsense</h3>
          <p>
            Don't bother typing “lorem ipsum” into Google translate. If you
            already tried, you may have gotten anything from "NATO" to "China",
            depending on how you capitalized the letters.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
            Nulla aliquet porttitor venenatis.
          </p>
          <p>
            Rrow itself, let it be sorrow; let him love it; let him pursue it,
            ishing for its acquisitiendum. Because he will ab hold, uniess but
            through concer, and also of those who resist. Now a pure snore
            disturbeded sum dust.
          </p>
      
        </Col>
      </Row>
    </Container>
  );
}
