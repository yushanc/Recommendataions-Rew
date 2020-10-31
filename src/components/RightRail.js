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
  if (!data) return <div>no results found</div>;

  return (
    // <Container className="border shadow-sm p-3 ml-3 bg-white rounded">
    <Container className="border shadow-sm bg-white rounded p-3">
      {data.map((item) => (
        <StatusLayout title={item.title} content={item.content} />
      ))}
    </Container>
  );
};

export default RightRail;
