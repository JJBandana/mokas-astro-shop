import { getContext, setContext } from "svelte";
import type { CartProduct } from "./types";

export class CartState {
  cart = $state<CartProduct[]>([]);

  constructor() {}

  add(product: CartProduct) {
    this.cart.push(product);
  }

  remove(id: string) {
    this.cart = this.cart.filter((product) => product.id !== id);
  }
}

const CART_KEY = Symbol("CART");

export function setCartState() {
  return setContext(CART_KEY, new CartState());
}

export function getHabitState() {
  return getContext<ReturnType<typeof setCartState>>(CART_KEY);
}
