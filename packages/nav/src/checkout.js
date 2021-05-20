import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import reduxStore from "store/reduxStore";

const Checkout = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    reduxStore.subscribe(() => {
      let list = reduxStore.getState().items;
      let total = list.reduce(function (acc, item) {
        return acc + item.price;
      }, 0);
      setCount(total);
    });
  }, []);

    return (
    <div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${count}</span>
        </div>
      </div>
      <button
        onClick={() => alert(`total to pay $${count}`)}
        className="bg-yellow-500 font-semibold hover:bg-yellow-600 py-3 text-sm text-white uppercase w-full"
      >
        Checkout
      </button>
    </div>
  );
};

const checkoutLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Checkout,
});

export const bootstrap = checkoutLifecycles.bootstrap;
export const mount = checkoutLifecycles.mount;
export const unmount = checkoutLifecycles.unmount;
