import React from "react";
import { Modal, Image, Table, Row, Col } from "react-bootstrap";
import CustomButton from "./UI/Button";

const Recommendations = ({ show, onHide, onClick, data }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title align="center">
          <Image
            src="https://assets.rew.ca/assets/placeholders/agent_placeholder-57ecd5e8bdf13b446f5e0f0760faf626c6259c4f30b13103c4c1883dd9e232e7.svg"
            style={{ width: "80px", height: "auto" }}
            roundedCircle
          />
          <h5>
            Guy's Recommendations
            <br />
            <small className="text-muted">
              The following People recommend Guy as a real estate agent
            </small>
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Row noGutters>
        <Col className="m-3 ">
          <Table striped bordered hover>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td>
                    <Row noGutters className="align-items-center">
                      <Col sm="2" xs="2" className="mr-2" align="center">
                        <p className="mb-0">
                          <small className="text-muted">{item.date}</small>
                        </p>
                        <Image
                          src="https://assets.rew.ca/assets/misc/icon-recommend-orange-4f3cac56334ffdc546759cfd18592c7c47f4f3ea6aab6fbdc1fdc23c38ab142e.svg "
                          style={{ width: "20px", height: "auto" }}
                        />
                      </Col>
                      <Col sm="9" xs="9" className="mr-2">
                        <p className="mb-0">
                          <small>{item.content}</small>
                        </p>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row noGutters className="justify-content-center align-content-center">
        <Col sm={6} xm={6} className="mb-3 mx-3">
          <CustomButton onClick={onClick} style={{ width: "100%" }}>
            Close
          </CustomButton>
        </Col>
      </Row>
    </Modal>
  );
};

export default Recommendations;
