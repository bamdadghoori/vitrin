import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from "next/script"
import "bootstrap/dist/css/bootstrap.min.css"
import { store } from '../public/redux/store'
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Provider store={store}>
     <Component {...pageProps} />
     </Provider>
     <Script src="https://code.jquery.com/jquery-3.6.0.min.js"/>
     <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'/>
     <Script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.5/umd/popper.min.js'/>
  </>
  )
}

export default MyApp
