<script lang="ts">
  import {
    cartItems,
    clearCart,
    updateQuantity,
    removeCartItem,
  } from "@/lib/state.ts";
  import Stepper from "./Stepper.svelte";

  const increment = (id: string, quantity: number) => {
    if (quantity < 10) {
      updateQuantity(id, quantity + 1);
    }
  };

  const decrement = (id: string, quantity: number) => {
    if (quantity <= 1) {
      removeCartItem(id);
    } else {
      updateQuantity(id, quantity - 1);
    }
  };

  async function checkout() {
    const line_items = Object.values($cartItems).map((product) => ({
      price: product.id,
      quantity: product.quantity,
    }));
    console.log("Products to checkout:", line_items);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ line_items }),
    });

    const data = await response.json();
    if (data.url) {
      clearCart();
      window.location.href = data.url;
    } else {
      console.error("Checkout error:", data.error);
    }
  }
</script>

{#if Object.keys($cartItems).length > 0}
  <div class="title">
    <h1 class="fs-900">Your cart</h1>
    <a href="/"><h2>Continue Shopping</h2></a>
  </div>
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
          <td
            ><img src={cartItem.imageSrc} alt={cartItem.name} width="100" /></td
          >
          <td>
            <div class="item-description">
              <h2>{cartItem.name}</h2>
              <p>{cartItem.price}</p>
            </div></td
          >
          <td
            ><div class="quantity-cell">
              <Stepper
                bind:quantity={cartItem.quantity}
                increment={() => increment(cartItem.id, cartItem.quantity)}
                decrement={() => decrement(cartItem.id, cartItem.quantity)}
              />
            </div></td
          >
          <td>{(cartItem.quantity * cartItem.price).toFixed(2)}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <button class="button" onclick={checkout}>Checkout</button>
{:else}
  <h1>Your Cart is Empty</h1>
{/if}

<style>
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 500;
      font-size: 1.25rem;
      text-decoration: underline;
      color: inherit;
    }
  }

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
