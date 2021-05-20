import { registerApplication, start } from "single-spa";

registerApplication(
  "product-list",
  () => import("productList/ProductList"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "header",
  () => import("nav/Header"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "checkout",
  () => import("nav/Checkout"),
  (location) => location.pathname.startsWith("/")
);

registerApplication(
  "summary",
  () => import("summary/Summary"),
  (location) => location.pathname.startsWith("/")
);

start();
