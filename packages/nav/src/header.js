import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import reduxStore from "store/reduxStore";

const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    reduxStore.subscribe(() => {
      let list = reduxStore.getState().items;
      setCount(list.length);
    });
  }, []);

  return (
    <div className="flex justify-between border-b pb-8">
      <h1 className="font-semibold text-4xl">Shopping Cart</h1>
      <h2 className="font-semibold text-4xl">{count} Items</h2>
    </div>
  );
};

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

