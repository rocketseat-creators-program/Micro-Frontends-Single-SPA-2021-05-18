import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import reduxStore from "store/reduxStore";

const Checkout = () => <h1>checkout</h1>

const checkoutLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Checkout,
});

export const bootstrap = checkoutLifecycles.bootstrap;
export const mount = checkoutLifecycles.mount;
export const unmount = checkoutLifecycles.unmount;
