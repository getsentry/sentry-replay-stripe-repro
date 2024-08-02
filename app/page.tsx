import Stripe from "stripe"
import PaymentForm from "./payment-form"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function Home() {
	const { client_secret } = await stripe.paymentIntents.create({
		amount: 1000,
		currency: "usd",
	})

	if (!client_secret) throw new Error("Missing client_secret from stripe")

	return (
		<main>
			<PaymentForm clientSecret={client_secret} />
		</main>
	)
}
