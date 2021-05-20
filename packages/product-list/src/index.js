import product from "home/product";
import singleSpaHtml from "single-spa-html";
import reduxStore from "store/reduxStore";

const template = `
<div class="flex mt-10 mb-5" >
  <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5"> Product Details </h3>
  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"></h3>
  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"></h3>
  <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"> Price</h3>
</div>

<div class="product-images"></div>
`;

const jsComponent = singleSpaHtml({ template });
jsComponent.originalMount = jsComponent.mount;

jsComponent.mount = function (opts, props) {
  return jsComponent.originalMount(opts, props).then(() => {
    const el = document.querySelector(".product-images");
    const html = product
      .map(
        ({ image, name, price, description }, index) => `
        <div id="item"  class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex">
              <img src="${image}" class='h-28 ' alt='image' style="max-width: 100%" data-index="${index}" />
          </div>

          <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">${name}</span>
              <span class="text-sm w-80">${description}</span>
          </div>


          <div class="text-center w-1/5">
            <button id="addItem" data-index=${index} class=" text-gray text-sm px-4 py-2  border rounded-full">Add to cart</button>
          </div>


          <span class="text-center w-1/5 font-semibold text-sm">$${price}</span>
        </div>
        `
      )
      .join("");
    el.innerHTML = html;

    document.querySelectorAll("#addItem").forEach((el) =>
      el.addEventListener("click", (evt) => {
        const index = parseInt(evt.target.getAttribute("data-index"));
        const payload = product[index];
        reduxStore.dispatch({ type: "ADD_ITEM", payload });
      })
    );
  });
};

export const mount = jsComponent.mount;
export const unmount = jsComponent.unmount;
export const bootstrap = jsComponent.bootstrap;
