import { atom, computed } from "nanostores";
import { persistentMap } from "@nanostores/persistent";
import type { CartItem } from "./types";

export const isCartOpen = atom(false);
export const cartItems = persistentMap<Record<string, CartItem>>(
  "cart",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  }
);

export function addCartItem({ id, name, imageSrc, price, quantity }: CartItem) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + quantity,
    });
  } else {
    cartItems.setKey(id, { id, name, imageSrc, price, quantity });
  }

  console.log(cartItems.get());
}

// export function removeCartItem(id: string) {
//   cartItems.setKey(id, undefined)
// }

export function clearCart() {
  cartItems.set({});
}

export const getTotalQuantity = computed(cartItems, (items) =>
  Object.values(items).reduce((total, item) => total + item.quantity, 0)
);
