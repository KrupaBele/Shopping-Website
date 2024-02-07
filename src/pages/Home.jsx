import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import Product from "../components/Products.jsx";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <Product />
    </>
  );
}

export default Home;
