import { useState } from "react";
import { products } from "./Data";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
function Product() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const increaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty + 1;
      return newQty;
    });
  };

  const decreaseQty = () => {
    setQty((preQty) => {
      let newQty = preQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      qunatity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    navigate("/cart");
  };

  const [menuItems, setMenuItems] = useState(products);
  const filterItems = (category) => {
    const newItems = products.filter((item) => item.category === category);
    setMenuItems(newItems);

    if (category === "all") {
      setMenuItems(products);
      return;
    }
  };
  return (
    <div className="  ">
      <div className="  mt-11 mb-16 md:flex   justify-between      ">
        <div className=" md:text-start font-sans  mb-7 md:mb-0 text-2xl ml-24 md:ml-18 font-semibold ">
          <h1> Our Featured Product</h1>
        </div>
        <div className=" ">
          <ul className="   flex  md:px-24  gap-4  ">
            <li
              className=" bg-slate-200 border  hidden md:block  shadow shadow-black border-black  rounded  md:size-20   md:h-10  md:pt-1 p-2 hover:bg-slate-300 cursor-pointer  md:w-28  "
              onClick={() => filterItems("all")}
            >
              All Products
            </li>
            <li
              className=" bg-slate-200 border md:hidden  shadow shadow-black border-black  rounded  md:size-20   h-16    p-2 hover:bg-slate-300 cursor-pointer  md:w-28  "
              onClick={() => filterItems("all")}
            >
              All Products
            </li>
            <li
              className=" bg-slate-200  rounded border border-black  shadow shadow-black size-20 md:h-10  hover:bg-slate-300 cursor-pointer p-2  h-16  pt-5 md:pt-1 text-center "
              onClick={() => filterItems("Kitchen")}
            >
              Kitchen
            </li>
            <li
              className=" bg-slate-200 rounded border border-black  shadow shadow-black size-20 md:h-10  h-16  pt-5 md:pt-1 text-center hover:bg-slate-300 cursor-pointer p-2  "
              onClick={() => filterItems("Bed")}
            >
              Bed
            </li>
            <li
              className=" bg-slate-200 rounded border border-black   shadow shadow-black size-20 md:h-10  hover:bg-slate-300 cursor-pointer p-2  h-16  pt-5 md:pt-1 text-center "
              onClick={() => filterItems("Sofa")}
            >
              Sofa
            </li>
            <li
              className=" bg-slate-200 rounded  size-20 md:h-10 border border-black shadow shadow-black  hover:bg-slate-300 cursor-pointer p-2  h-16  pt-5 md:pt-1 text-center "
              onClick={() => filterItems("Table")}
            >
              Table
            </li>
          </ul>
        </div>
      </div>
      <div className=" tab-pane fade show p-0 active">
        <div className="    ">
          <div className="    w-4/5    grid md:grid-cols-3  grid-cols-2 gap-12 md:ml-24 ml-12  md:translate-x-9 ">
            {menuItems.map((val, index) => (
              <div className=" relative ">
                <div className=" " key={index}>
                  <div className="   rounded">
                    <div className=" relative">
                      <div>
                        <img
                          className=" md:h-36  relative  md:mb-4 md:w-72  h-36 mb-4  hover:shadow-black shadow   hover:scale-110 transition-transform  "
                          src={val.product_img}
                          alt=""
                        />
                        <button
                          onClick={() => handleAddToCart(val)}
                          className="  md:absolute hidden  bg-amber-200  bottom-0  rounded p-1    "
                          style={{ bottom: " 0px", left: "0px " }}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className=" text-white  absolute "
                    style={{ top: "10px", left: "10px " }}
                  >
                    {val.category}
                  </div>
                  <div className=" font-medium">{val.product_name}</div>
                  <div className="   font-serif"> {val.description}</div>
                  <div className="   font-medium size-6 ">Rs.{val.price}</div>
                  <button
                    onClick={() => handleAddToCart(val)}
                    className="   md:block bg-amber-200  bottom-0  rounded p-1    "
                    style={{ bottom: " 0px", left: "0px " }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
