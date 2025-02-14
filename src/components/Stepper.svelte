<script lang="ts">
  import { decrementQuantity, incrementQuantity } from "@/lib/state";

  let {
    quantity = $bindable(1),
    minValue = 1,
    maxValue = 10,
    decrement,
    increment,
  } = $props();
</script>

<div class="stepper">
  <button aria-label="increment" onclick={decrement}
    ><svg width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor"
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
    ><svg width="24" height="24" viewBox="0 0 24 24" style="fill: currentColor"
      ><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg
    ></button
  >
</div>

<style>
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

  .number {
    padding-inline: 0.5rem;
    padding-block: 1.05rem;
    color: var(--clr-primary-500);
    font-weight: 800;
  }
</style>
