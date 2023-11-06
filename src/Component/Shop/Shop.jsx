import React, { Component } from "react";
import SHOP_DATA from "./Shopdata";
import Preview from "../../Collection/Preview";

export class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...othercollection }) => {
          return <Preview key={id} {...othercollection} />;
        })}
      </div>
    );
  }
}

export default Shop;
