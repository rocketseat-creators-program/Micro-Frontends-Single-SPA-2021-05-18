import product from "home/product";
import singleSpaHtml from "single-spa-html";
import reduxStore from "store/reduxStore";

const template = ` <h1>Hello experts</h1> `;

const jsComponent = singleSpaHtml({ template });

export const mount = jsComponent.mount;
export const unmount = jsComponent.unmount;
export const bootstrap = jsComponent.bootstrap;
