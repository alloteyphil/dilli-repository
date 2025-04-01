import stripe from "stripe";
import { NextResponse } from "next/server";
import { createOrder } from "@/actions/order/order.actions";

export async function POST(request: Request) {
  console.log("Stripe webhook received");
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
    // const { id, amount_total, metadata } = event.data.object;

    // const order = {
    //   stripeId: id,
    //   userDetails: {
    //     email: metadata?.customer_email || "",
    //     name: metadata?.customer_name || "",
    //     address: {
    //       city: JSON.parse(metadata?.shipping_address || "{}").city || "",
    //       address: JSON.parse(metadata?.shipping_address || "{}").address || "",
    //       address2:
    //         JSON.parse(metadata?.shipping_address || "{}").address2 || "",
    //       postCode:
    //         JSON.parse(metadata?.shipping_address || "{}").post_code || "",
    //     },
    //   },
    //   items: JSON.parse(metadata?.items || "[]"),
    //   totalAmount: amount_total ? (amount_total / 100).toString() : "0",
    //   createdAt: new Date(),
    // };

    // const newOrder = await createOrder(order);

    const testOrderData = {
      stripeId: "cs_test_123456789_112121",
      userDetails: {
        email: "test@example.com",
        name: "John Doe",
        address: {
          city: "New York",
          address: "123 Main St",
          address2: "Apt 4B",
          postCode: "10001",
        },
      },
      items: [
        {
          id: "prod_123",
          variant: "Small",
          quantity: 2,
        },
        {
          id: "prod_456",
          variant: "Medium",
          quantity: 1,
        },
      ],
      totalAmount: "99.99",
      createdAt: new Date(),
    };

    const order = await createOrder(testOrderData);

    console.log(order);

    return NextResponse.json({ message: "OK", order });
  }

  return new Response("", { status: 200 });
}
