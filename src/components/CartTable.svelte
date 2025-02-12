<script lang="ts">
  import { cartItems } from "@/lib/state.ts";
  import Stepper from "./Stepper.svelte";
</script>

<table>
  <thead>
    <tr>
      <th class="product-col">PRODUCT</th>
      <th class="details-col"></th>
      <th class="quantity-col">QUANTITY</th>
      <th class="total-col">TOTAL</th>
    </tr>
  </thead>

  <tbody>
    {#each Object.values($cartItems) as cartItem}
      <tr>
        <td><img src={cartItem.imageSrc} alt={cartItem.name} width="100" /></td>
        <td>
          <div class="item-description">
            <h2>{cartItem.name}</h2>
            <p>{cartItem.price}</p>
          </div></td
        >
        <td
          ><div class="quantity-cell">
            <Stepper bind:value={cartItem.quantity} />
          </div></td
        >
        <td>{(cartItem.quantity * cartItem.price).toFixed(2)}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    table-layout: fixed;
  }

  thead tr {
    border-bottom: 2px solid var(--clr-primary-400);
    vertical-align: top;
    color: var(--clr-accent-400);
  }

  th,
  td {
    padding: 12px;
    vertical-align: middle;
  }

  .product-col {
    width: 20%;
    text-align: left;
  }
  .details-col {
    width: 40%;
  }
  .quantity-col {
    width: 20%;
    text-align: left;
  }
  .total-col {
    width: 20%;
    text-align: right;
  }

  .item-description {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    align-items: start;
  }
</style>
