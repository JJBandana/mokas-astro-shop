<script lang="ts">
  let quantity = $state(1);

  let responseMessage: string;
  const minValue = 1;
  const maxValue = 10;

  const increment = (e: SubmitEvent) => {
    e.preventDefault();

    if (quantity < maxValue) {
      quantity++;
    }
  };

  const decrement = (e: SubmitEvent) => {
    e.preventDefault();

    if (quantity > minValue) {
      quantity--;
    }
  };

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    console.log(formData);

    const response = await fetch("/api/checkout", {
      method: "POST",
      body: formData,
    });

    const session = await response.json();
    window.location = session.url;
  }
</script>

<form onsubmit={submit}>
  <div class="details">
    <label for="variation"
      >Variation
      <select name="variation" id="variation">
        <option value="0">Red</option>
        <option value="1">Blue</option>
        <option value="2">Black</option>
      </select>
    </label>

    <label for="quantity"
      >Quantity
      <div class="stepper">
        <button aria-label="increment" onclick={decrement}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
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
            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            ><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg
          ></button
        >
      </div>
    </label>
  </div>

  <button class="button" type="submit">Add to the cart</button>
</form>

<style>
  button,
  select {
    /* background-color: var(--color-primary-100); */
    border: black 1px solid;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  select#variation {
    border-radius: 30px;
    min-height: 40px;
    padding: 8px;
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
    border: black 1px solid;
    border-radius: 30px;

    button {
      padding: 8px;
      height: 40px;
      width: 40px;
      min-height: 40px;
      min-width: 40px;
      cursor: pointer;
      overflow: hidden;
      border: none;
      border-radius: 30px;

      :hover {
        background-color: var(--color-primary-600);
      }
    }

    input {
      display: none;
    }
  }
</style>
