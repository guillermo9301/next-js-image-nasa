import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['100', '500'],
  subsets: ['latin']
})

console.log(roboto)
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>



  )
}
