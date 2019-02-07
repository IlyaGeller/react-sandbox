import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const data = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class ProductRow extends React.Component {
  render() {
    return (
      <div className="ProductRowContainer">
        <div
          className={
            this.props.stocked ? "ProductNameStocked" : "ProductNameNotStocked"
          }
        >
          {this.props.name}
        </div>
        <div className="ProductPrice">{this.props.price}</div>
      </div>
    );
  }
}

class Section extends React.Component {
    constructor(props){
        super(props);
        this.lastSection = null;
    }
    createRows(product){

    }
  render() {
    const sections = [];
    const rows = [];
    this.props.products.forEach((product, index) => {
      rows.push(
        <div key={product.name}>
          <ProductRow
            price={product.price}
            name={product.name}
            stocked={product.stocked}
          />
        </div>
      );
    });
    return (
      <div>
        <div>{rows}</div>
      </div>
    );
  }
}

const element = <Section products={data} />;
ReactDOM.render(element, document.getElementById("root"));
