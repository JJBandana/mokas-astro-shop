import Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "astro:env/server";
import type { APIRoute } from "astro";

export const prerender = false;

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { line_items } = await request.json();
    console.log("Checkout:", line_items);

    if (!line_items || line_items.length === 0) {
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: "http://localhost:4321/",
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};
