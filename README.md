Reproduction of issue with Sentry's Replay integration interfering with the Stripe iframe. The issue only appears in Safari.

**To reproduce**

- Visit the deployed reproduction app at https://sentry-replay-stripe.vercel.app with Safari.
- Observe this error in the console

```
Blocked a frame with origin "https://sentry-replay-stripe.vercel.app" from accessing a frame with origin "https://js.stripe.com". Protocols, domains, and ports must match.
```

You can also deploy the app yourself. Then you have to grab a pair of public/private Stripe API test keys and set them as `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in a file called `.env.local` in the root of the repo. Then you can start the dev server and visit the page in Safari.

The error message is slightly different locally

```
Blocked a frame with origin "http://localhost:3000" from accessing a frame with origin "https://js.stripe.com".  The frame requesting access has a protocol of "http", the frame being accessed has a protocol of "https". Protocols must match.
```
