"use client"
import * as Sentry from "@sentry/browser"
import { Elements, PaymentElement } from "@stripe/react-stripe-js"
import { loadStripe, type Stripe } from "@stripe/stripe-js"
import { useEffect, useState } from "react"

Sentry.init({
	dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
	replaysSessionSampleRate: 1,
	integrations: [
		Sentry.replayIntegration({
			block: ["iframe"],
		}),
	],
})

interface Props {
	clientSecret: string
}

export default function PaymentForm({ clientSecret }: Props) {
	const [stripe, setStripe] = useState<Stripe | null>(null)

	useEffect(() => {
		loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string).then(
			(stripe) => setStripe(stripe)
		)
	}, [])

	if (!stripe) return null

	return (
		<Elements stripe={stripe} options={{ clientSecret }}>
			<PaymentElement options={{ terms: { card: "never" } }} />
		</Elements>
	)
}
