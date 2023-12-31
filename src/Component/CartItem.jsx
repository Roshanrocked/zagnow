import React, { useState } from "react";
import { Context } from "../context/Contextapi.js";
import { useContext } from "react";

export default function CartItem({ data, key, id, del }) {
  const [count, setCount] = useState(1);
  const { total, setTotal } = useContext(Context);

  function counter(c) {
    if (c === "add") {
      setCount(count + 1);
      // each time total amount is inc
      setTotal(total + data.price);
    } else {
      setCount(count - 1);
      // each time total amount is dec
      setTotal(total - data.price);
    }
  }
  return (
    <div className="box my-5" key={data.id}>
      <img src={data.imgUrl} alt="img" />
      <div className="box_details">
        <div className="flex justify-between">
          <div className="text-sm text-left w-4/5">{data.title}</div>
          <svg
            onClick={() => {
              del(id, count, data.price); // passing datas to delete item form cart and updating the total
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333"
              stroke="#F70000"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text-left py-2" style={{ color: "#00000099" }}>
          Size {data.selectsize || "M"}
        </div>
        <div className="box_price">
          <div>INR {data.price}</div>
          <div className="box_buttom">
            <button
              className=" text-xl p-0"
              onClick={() => {
                counter("sub");
              }}
              disabled={count < 1}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="btn btn-blue text-xl p-0"
              onClick={() => {
                counter("add");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
