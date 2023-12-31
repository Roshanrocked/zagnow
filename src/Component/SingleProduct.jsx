import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Context } from "../context/Contextapi";
export default function SingleProduct({ data, cartarr, setCartarr }) {
  const [product, setProduct] = useState({});
  const { total, setTotal } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    displaydata();
    console.log(cartarr);
  }, []);

  const displaydata = () => {
    data.forEach((el) => {
      if (el.id === +id) {
        setProduct(el);
      }
    });
  };

  function handle(price) {
    setCartarr((old) => [...old, product]);
    setTotal(total + price);
    alert("item added");
  }

  function addsize(size) {
    product.selectsize = size;
  }

  return (
    <div className="SingleProduct relative">
      <div className="flex justify-around fixed w-full p-7 bg-white">
        <NavLink to={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5M5 12L12 5M5 12L12 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NavLink>
        <span className="text-black text-2xl font-semibold ">Details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.35418 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34967 14.6054C3.61513 15.7859 3.24786 16.3761 3.26133 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.59446 17 4.19259 17 5.38886 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <img src={product?.imgUrl} alt="img" />
      <h3>{product?.title}</h3>
      <div className="flex">
        <span className="flex text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.2826 3.4533C11.5131 2.98636 11.6284 2.75289 11.7848 2.6783C11.9209 2.6134 12.0791 2.6134 12.2152 2.6783C12.3716 2.75289 12.4869 2.98636 12.7174 3.4533L14.904 7.88327C14.9721 8.02112 15.0061 8.09004 15.0558 8.14356C15.0999 8.19094 15.1527 8.22933 15.2113 8.25661C15.2775 8.28741 15.3536 8.29852 15.5057 8.32076L20.397 9.03569C20.912 9.11098 21.1696 9.14862 21.2888 9.27442C21.3925 9.38388 21.4412 9.53428 21.4215 9.68376C21.3988 9.85556 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1911 13.9538 17.136 14.0075 17.1004 14.0714C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.9059 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7553 20.57 17.607 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8583 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8583 11.7639 17.8942 11.6276 17.9658L7.25491 20.2654C6.7939 20.5078 6.5634 20.6291 6.39296 20.5975C6.24467 20.57 6.11671 20.477 6.04472 20.3445C5.96199 20.1922 6.00601 19.9355 6.09406 19.4221L6.92887 14.5547C6.9549 14.403 6.96791 14.3271 6.9591 14.2545C6.95131 14.1902 6.9311 14.128 6.89959 14.0714C6.86401 14.0075 6.80886 13.9538 6.69857 13.8464L3.16054 10.4004C2.78765 10.0372 2.6012 9.85556 2.57851 9.68376C2.55877 9.53428 2.60754 9.38388 2.71124 9.27442C2.83042 9.14862 3.08796 9.11098 3.60303 9.03569L8.4943 8.32076C8.64641 8.29852 8.72247 8.28741 8.7887 8.25661C8.84735 8.22933 8.90015 8.19094 8.94417 8.14356C8.99389 8.09004 9.02791 8.02112 9.09596 7.88327L11.2826 3.4533Z"
              fill="#FFA928"
            />
          </svg>
          4.5/5
        </span>
        <span> (45 reviews)</span>
      </div>
      <p>{product?.description}</p>
      <div>
        <h1 className="text-lg m-1 text-black font-normal">Choose size</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          {product?.sizes?.map((el, i) => {
            return (
              <span
                key={i}
                className="size"
                onClick={() => {
                  addsize(el);
                }}
              >
                {el}
              </span>
            );
          })}
        </div>
      </div>
      <div className="price">
        <div>
          <div className="text-sm text-left">Price</div>
          <div className="text-lg text-black font-semibold">
            INR {product?.price}
          </div>
        </div>
        <button
          onClick={() => {
            handle(product?.price || 0);
          }}
        >
          <span>🛒 </span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
