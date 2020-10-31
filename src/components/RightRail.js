import React from "react";
import { Container, Spinner } from "react-bootstrap";

const StatusLayout = ({ title, content }) => {
  return (
    <p>
      <small className="text-muted">{title}:</small>
      <br />
      {content}
    </p>
  );
};
const RightRail = ({ data }) => {
  if (!data) return <Spinner animation="border" />;

  return (
    <Container className="border shadow-sm p-3 ml-3 bg-white rounded">
      {data.map((item) => (
        <StatusLayout title={item.title} content={item.content} />
      ))}
    </Container>
  );
};

export default RightRail;
