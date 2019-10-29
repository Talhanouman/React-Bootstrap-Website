import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  ButtonToolbar,
  Button,
  Row,
  Col,
  Image
} from "react-bootstrap";
import "./Home.css";



 
const Home = () => {
  return (
    <Container className="p-0">
      <Jumbotron className="jumbotronTop">
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h5 style={{ marginLeft: "10px" }}>
          This is how website build in React If you want to learn more about
          react bootstrap click the bellow buttons
        </h5>
        <Button
          style={{ marginTop: "10px", marginLeft: "10px" }}
          variant="danger"
        >
          Danger
        </Button>
      </Jumbotron>

      <Row>
        <Col xs={12} sm={4} className="text-center">
          <Image className = "profilePic"
            src="https://placeimg.com/300/300/tech?t=1566890949822"
            roundedCircle
          />
          <h4>Hedonist Roots</h4>
          <p>
            Until recently, the prevailing view assumed lorem ipsum was born
            as a nonsense text.
          </p>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <Image className = "profilePic"
            src="https://placeimg.com/300/300/tech?t=1566891114589"
            roundedCircle
          />
          <h4>Remixing a Classic</h4>
          <p>
            It's difficult to find examples of lorem ipsum in use before
            Letraset made it popular as a dummy text in the 1960s
          </p>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <Image className = "profilePic"
            src="https://placeimg.com/300/300/tech?t=1566891287077"
            roundedCircle
          />
          <h4>Interpreting Nonsense</h4>
          <p>
            Don't bother typing “lorem ipsum” into Google translate. If you
            already tried, you may have gotten anything from "NATO" to
            "China"
          </p>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Home;
