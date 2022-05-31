import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
// import { Container ,Row ,Col } from "reactstrap"


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi/>
        </Row> 
        <Row>
          <Col xs="3">
            <CategoryList/>
          </Col>
          <Col xs="9">
            <ProductList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;