export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  paypal: {
    clientID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET,
  },
} as const
