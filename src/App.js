import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
// import { Container ,Row ,Col } from "reactstrap"


function App() {
  let productInfo = {title: "ProductList", deneme:"deneme"};
  let categoryInfo = {title: "CategoryList"};
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi/>
        </Row> 
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList info ={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
