import stripe from "stripe";
import { NextResponse } from "next/server";
import { createOrder } from "@/actions/order/order.actions";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const { id, amount_total, metadata } = event.data.object;

    const order = {
      stripeId: id,
      userDetails: {
        email: metadata?.customer_email || "",
        name: metadata?.customer_name || "",
        address: {
          city:
            JSON.parse(metadata?.shipping_address || "{}").address?.city || "",
          address:
            JSON.parse(metadata?.shipping_address || "{}").address?.address ||
            "",
          address2:
            JSON.parse(metadata?.shipping_address || "{}").address?.address2 ||
            "",
          postCode:
            JSON.parse(metadata?.shipping_address || "{}").address?.post_code ||
            "",
        },
      },
      items: JSON.parse(metadata?.items || "[]"),
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
    };

    const newOrder = await createOrder(order);

    return NextResponse.json({ message: "OK", order: newOrder });
  }

  return new Response("", { status: 200 });
}
