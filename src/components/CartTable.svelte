<script lang="ts">
  import { cartItems } from "@/lib/state.ts";
</script>

<table>
  <thead>
    <tr>
      <td>Product ID</td>
      <td>Name</td>
      <td>Quantity</td>
    </tr>
  </thead>

  <tbody>
    {#if Object.values($cartItems).length}
      {#each Object.values($cartItems) as cartItem}
        <tr>
          <td>{cartItem.id}</td>
          <td>{cartItem.name}</td>
          <td>{cartItem.quantity}</td>
        </tr>
      {/each}
    {:else}
      <tr>
        <td>
          <h2>Your cart is empty</h2>
        </td>
      </tr>
    {/if}
  </tbody>
</table>
