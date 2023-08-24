import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyles } from '../styles/globalStyles'
import { config } from '@utils'
import { APP_TITLE } from '@constants'

const queryClient = new QueryClient({ defaultOptions: {} })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>

        <script
          src={`https://www.paypal.com/sdk/js?client-id=${config.paypal.clientID}&components=buttons`}
        ></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
