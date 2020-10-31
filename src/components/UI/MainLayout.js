import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainLayout = ({ left, right }) => {
  return (
    <Container className="mt-5">
      <Row noGutters={true}>
        <Col sm="8" xs="12">
          {left}
        </Col>
        <Col sm="4" xs="12">
          {right}
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
