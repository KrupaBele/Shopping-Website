import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliverCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const emptyCartMsg = (
    <h4 className="container text-center p-4">Your Cart is Empty</h4>
  );

  return (
    <>
      {cartProducts.length === 0 ? (
        emptyCartMsg
      ) : (
        <div className="container-fluid py-5">
          <div className="container py-8 px-2">
            <div className="table-responsive  ">
              <table className=" ">
                <thead className=" ">
                  <tr className=" ">
                    <th className="" scope="col">
                      Products
                    </th>
                    <th className=" space-x-3" scope="col ">
                      Name
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((cartProduct) => (
                    <tr key={cartProduct.id}>
                      <th scope="row">
                        <div className="d-flex align-items-center py-3">
                          <img
                            src={cartProduct.product_img}
                            alt={cartProduct.product_img}
                            style={{ width: 100 }}
                          />
                        </div>
                      </th>
                      <td>
                        <p className="mb-0 mt-4 px-5">
                          {cartProduct.product_name}
                        </p>
                      </td>
                      <td>
                        <p className="mb-0 mt-4">{cartProduct.price}</p>
                      </td>
                      <td>
                        <div
                          className="input-group quantity  space-x-2 mt-4 flex px-5"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn px-0">
                            <button
                              onClick={() =>
                                decreaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-minus rounded-circle bg-light border"
                            >
                              <ion-icon name="remove-circle-outline"></ion-icon>
                            </button>
                          </div>
                          <span className="form-control form-control-sm text-center border-0">
                            {cartProduct.quantity || 1}
                          </span>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                increaseQty(
                                  cartProduct.id,
                                  cartProduct.quantity
                                )
                              }
                              className="btn btn-sm btn-plus rounded-circle bg-light border"
                            >
                              <ion-icon name="add-circle-outline"></ion-icon>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="mb-0 mt-4 px-5 ">
                          {cartProduct.totalPrice} $
                        </p>
                      </td>
                      <td>
                        <button
                          onClick={() => handleRemoveItem(cartProduct.id)}
                          className="btn btn-md  px-3 rounded-circle bg-light border mt-4"
                        >
                          <ion-icon name="trash"></ion-icon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row g-4 justify-content-end bg-slate-200 w-1/2 rounded-lg  my-5 ">
              <div className="col-8"></div>
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div className="bg-light rounded">
                  <div className="p-4 ">
                    <h1 className="display-6 mb-4 font-medium  text-xl">
                      Cart <span className="fw-normal">Total</span>
                    </h1>
                    <div className="flex justify-content-between mb-4">
                      <h5 className="mb-0 me-4 font-medium">Subtotal:</h5>
                      <p className="mb-0">${totalAmount}</p>
                    </div>
                    <div className="flex justify-content-between">
                      <h5 className="mb-0 me-4 font-medium">
                        Shipping Flat rate:
                      </h5>
                      <div>
                        <p className="mb-0"> $ {deliverCharge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 flex mb-4 border-top border-bottom d-flex justify-content-between">
                    <h5 className="mb-0 ps-4 me-4 font-medium">Total:</h5>
                    <p className="mb-0 pe-4">$ {totalAmount + deliverCharge}</p>
                  </div>
                  <button
                    className="btn border  rounded-pill px-3 py-2 text-primary text-uppercase bg-green-400 rounded border-green-500 mb-4 ms-4"
                    type="button"
                  >
                    Proceed Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
