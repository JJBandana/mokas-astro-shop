import { atom, map } from "nanostores";
import type { CartItem } from "./types";

export const isCartOpen = atom(false);

export const cartItems = map<Record<string, CartItem>>({});

type ItemDisplayInfo = Pick<CartItem, "id" | "name" | "imageSrc" | "quantity">;

export function addCartItem({ id, name, imageSrc, quantity }: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + quantity,
    });
  } else {
    cartItems.setKey(id, { id, name, imageSrc, quantity });
  }

  console.log(cartItems);
}
