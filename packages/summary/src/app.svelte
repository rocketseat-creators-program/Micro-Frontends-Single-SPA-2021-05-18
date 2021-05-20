<script>
  import reduxStore from "store/reduxStore";

  let productList = [];

  reduxStore.subscribe(() => {
    productList = reduxStore.getState().items;
  });
</script>

<div>
  <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
  <div class="overflow-auto max-h-80">
    {#each productList as { name, price }, i}
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">{name}</span>
        <span class="font-semibold text-sm">${price}</span>
      </div>
    {/each}
  </div>
</div>
