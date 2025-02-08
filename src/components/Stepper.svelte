<script lang="ts">
  let { quantity = $bindable(1), minValue = 1, maxValue = 10 } = $props();

  const increment = (event: Event) => {
    event.preventDefault();

    if (quantity < maxValue) {
      quantity++;
    }
  };

  const decrement = (event: Event) => {
    event.preventDefault();

    if (quantity > minValue) {
      quantity--;
    }
  };
</script>

<div class="stepper">
  <button aria-label="increment" onclick={decrement}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: currentColor;transform: ;msFilter:;"
      ><path d="M5 11h14v2H5z"></path></svg
    ></button
  >
  <input
    type="number"
    name="quantity"
    id="quantity"
    min={minValue}
    max={maxValue}
    bind:value={quantity}
  />
  <div class="number">{quantity}</div>
  <button aria-label="decrement" onclick={increment}
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: currentColor;transform: ;msFilter:;"
      ><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg
    ></button
  >
</div>
