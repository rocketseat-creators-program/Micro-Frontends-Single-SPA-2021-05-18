import { registerApplication, start } from "single-spa";

registerApplication(
  "product-list",
  () => import("productList/ProductList"),
  (location) => location.pathname.startsWith("/")
);


start();
