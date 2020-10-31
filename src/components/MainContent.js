import React from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import CustomButton from "./UI/Button";

const MainContent = ({ realtorInfo, des, onClick }) => {
  if (!realtorInfo || !des) return <Spinner animation="border" />;
  return (
    <Container className="border shadow-sm p-3 mr-3 bg-white rounded">
      <Row fluid noGutters>
        <p>{des}</p>
      </Row>
      <Row className="mt-5" noGutters>
        <Col sm="2" xs="2" className="mr-2">
          <Image
            src="https://assets.rew.ca/assets/placeholders/agent_placeholder-57ecd5e8bdf13b446f5e0f0760faf626c6259c4f30b13103c4c1883dd9e232e7.svg"
            style={{ width: "100%", height: "auto", minWidth: "50px" }}
            roundedCircle
          />
        </Col>
        <Col sm="5" xs="9">
          <p>
            <small className="text-muted">{realtorInfo.title}</small>
            <br />
            {realtorInfo.name}
            <br />
            <small className="text-muted">{realtorInfo.company}</small>
            <br />
            <small className="text-muted">{realtorInfo.phone}</small>
            <br />
            <small>
              <a href="#" className="pt-1">
                Contact me
              </a>
            </small>
          </p>
        </Col>
        <Col sm="4" xs="12">
          <CustomButton onClick={onClick}>6 Recommendations</CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
