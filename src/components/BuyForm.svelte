<script lang="ts">
  import { addCartItem } from "@/lib/state.ts";
  let { product } = $props();
  const { name, id, price } = product;

  let quantity = $state(1);

  const minValue = 1;
  const maxValue = 10;

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

  async function submit(event: SubmitEvent) {
    event.preventDefault();
    addCartItem({
      id,
      name,
      imageSrc: product.images[0],
      price: price.jpy,
      quantity,
    });
  }
</script>

<form onsubmit={submit}>
  <div class="details">
    <label for="quantity"
      >Quantity
      <div class="stepper">
        <button aria-label="increment" onclick={decrement}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: currentColor;"><path d="M5 11h14v2H5z"></path></svg
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
            style="fill: currentColor;"
            ><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg
          ></button
        >
      </div>
    </label>
  </div>

  <button class="button" type="submit">Add to the cart</button>
</form>

<style>
  button[type="submit"] {
    width: 100%;
    max-width: 100%;
  }

  .number {
    padding-inline: 0.5rem;
    padding-block: 1.05rem;
    color: var(--clr-primary-500);
    font-weight: 800;
  }

  label {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    color: var(--clr-accent-400);
  }

  .details {
    display: inline-flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 16px;
  }

  .stepper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: var(--clr-accent-800) 1px solid;
    border-radius: 0.5rem;
    background-color: var(--clr-accent-100);

    button {
      background-color: inherit;
      padding: 8px;
      height: 40px;
      width: 40px;
      min-height: 40px;
      min-width: 40px;
      cursor: pointer;
      overflow: hidden;
      border: none;
      border-radius: 0.5rem;
    }

    svg {
      color: var(--clr-accent-800);
    }

    input {
      display: none;
    }
  }
</style>
