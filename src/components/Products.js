import React, { Component } from "react";
import axios from "axios";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("/api/products").then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  render() {
    console.log(this.state.products);
    const { products } = this.state;

    const mappedProducts = products.map((element) => {
      return (
        <div>
          <div>
            {element.product_name} <span>Price: ${element.price}</span>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div>Products</div>
        <div>{mappedProducts}</div>
      </div>
    );
  }
}
