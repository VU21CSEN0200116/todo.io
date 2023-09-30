import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
  <>
  
  <Header/>
  <div className="container mx-auto min-h-screen" >
  <Component {...pageProps} />
  </div>
  <Footer/>
  </>
  )
}
