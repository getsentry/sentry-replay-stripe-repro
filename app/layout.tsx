import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Sentry Replay with Stripe",
}

type Props = Readonly<{
	children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
