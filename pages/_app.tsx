import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <Layout router={router}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
