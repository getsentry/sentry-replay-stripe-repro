Reproduction of issue with Sentry's Replay integration interfering with the Stripe iframe. The issue only appears in Safari.

**To reproduce**

- Get a pair of public/private Stripe API test keys and set them as `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in a file called `.env.local` in the root of the repo.
- Start the dev server and visit the page

Observe this error in the console

```
Blocked a frame with origin "http://localhost:3000" from accessing a frame with origin "https://js.stripe.com".  The frame requesting access has a protocol of "http", the frame being accessed has a protocol of "https". Protocols must match.
```

The same error is present when deployed to production as well, although it then complains about the origin not matching, rather than the protocol.
