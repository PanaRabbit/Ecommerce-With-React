import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
        Imagen carrusel
          </Col>
        <Col md="auto"></Col>
        <Col xs lg="2">
          Formulario y descripcion
          </Col>
      </Row>
      
    </Container>
  );
}

export default Layout;

