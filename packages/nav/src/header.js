import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import reduxStore from "store/reduxStore";

const Header = () => (<h1>Header</h1>);

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

