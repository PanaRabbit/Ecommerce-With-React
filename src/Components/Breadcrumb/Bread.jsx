import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Bread() {
  return (
    <div className="d-none d-lg-block">
      <Container fluid>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Catalog</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Snekers
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Free Trainer 3 / MMW</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bread;
