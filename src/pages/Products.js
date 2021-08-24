import React from "react";
import { Product } from "../components/Product.js";
import icecream from "../assets/ice-cream.jpg";
import smoker from "../assets/smoker.jpg";
import popcorn from "../assets/popcorn.jpg";

export class Products extends React.Component {
  //Component that takes a list of product objects as props, and returns
  //an unordred list element filled with <Product /> components
  ProductList(props) {
    const products = props.products;
    const productList = products.map((product, i) => (
      <li key={"product_" + i}>
        <Product
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      </li>
    ));
    return <ul className="product-ul"> {productList} </ul>;
  }

  render() {
    return (
      <section>
        <h2>Our products</h2>
        <this.ProductList products={productsForSale} />
      </section>
    );
  }
}

const productsForSale = [
  {
    name: "Ice cream maker",
    description:
      "Now you can make your favorite frozen yogurt at home in just 20 minutes or less! The fully automatic Cuisinart Frozen Yoghurt Ice Cream & Sorbet Maker lets you turn ingredients into a delicious and healthy frozen treat with no fuss and no mess. Simply add your ingredients to the bowl, press ON, and the machine does the rest!",
    price: 82.99,
    image: icecream,
  },
  {
    name: "Stovetop smoker",
    description:
      "The Camerons Original Stovetop Smoker allows you to smoke foods of all types - meat, seafood, poultry, even vegetables - right on your own stove, indoors or outdoors. Smoke-cooking is a healthy way to infuse flavor without the use of fats, salts or oils - lower calories!",
    price: 34.95,
    image: smoker,
  },
  {
    name: "Popcorn machine",
    description:
      "Popcorn maker machine uses hot air, which will be no need to add oil or sugar, and will not have excess fat. It will be healthier for you and your children. At the same time, Hot air popper popcorn maker is very suitable for family gatherings, cinema watching movies, family watching scripts, dormitory sharing, etc.",
    price: 19.99,
    image: popcorn,
  },
];
