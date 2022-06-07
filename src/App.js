import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import alertify from "alertifyjs";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Zehra from './zehra';
import CartList from "./CartList"
import NotFound from "./NotFound"
import Home from './home';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }


  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;

    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });

    alertify.success(product.productName + "added to cart!", 2)

  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + "removed from cart!", 2)

  }


  render() {
    let productInfo = { title: "ProductList", deneme: "deneme" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div className="App">
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <Routes>
                <Route path="/" element={window.location.pathname === "/" &&
                  <ProductList
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory} info={productInfo} />} />
                <Route path="/zehra" element={<Zehra />} />
                <Route path="/cart" element={<CartList removeFromCart={this.removeFromCart} cart={this.state.cart} />} />
                <Route element={<NotFound />} />
                <Route path="form1" element={<FormDemo1 />}></Route>
                <Route path="form2" element={<FormDemo2 />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
}

