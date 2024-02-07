import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AppDrawer from "./AppDrawer";
import { styled } from "@mui/system";
import { useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/CartSlice";

function Header() {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state) => state.cart);
  console.log(totalItems);
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <header className="shadow sticky z-50 top-0  ">
      <nav className="bg-white  px-4 lg:px-6 py-2.5 relative">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="md:mr-3 md:h-12 h-10"
              alt="Logo"
            />
          </div>
          <div className="flex items-center lg:order-2">
            <div className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              <NavLink
                to="/signup"
                className={({ isActive }) => `block py-2${
                  isActive ? " text-orange-700" : " text-gray-700"
                } pr-1 pl-1 duration-200 border-b border-gray-100 
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
              >
                Sign Up
              </NavLink>
            </div>
            <div
              onClick={toggleDrawer("left", true)}
              className="text-white mr-2 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5  focus:outline-none"
            >
              Get started
            </div>
            <div className=" md:hidden ">
              <Menu />
            </div>
            <div className=" ml-2">
              <Link to="/cart" className="relative me-4 my-auto">
                <ion-icon name="cart"></ion-icon>
                <span
                  className="absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: "-12px",
                    left: "12px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  {totalItems}
                </span>
              </Link>
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `block py-2${
                    isActive ? " text-orange-700" : " text-gray-700"
                  } pr-4 pl-3 duration-200 border-b border-gray-100 
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `block py-2${
                    isActive ? " text-orange-700" : " text-gray-700"
                  } pr-4 pl-3 duration-200 border-b border-gray-100 
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `block py-2${
                    isActive ? " text-orange-700" : " text-gray-700"
                  } pr-4 pl-3 duration-200 border-b border-gray-100 
                                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Sidebar
            state={state}
            setState={setState}
            toggleDrawer={toggleDrawer}
          />
        </div>
      </nav>
    </header>
  );
}
export default Header;
