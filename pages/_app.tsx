import '../styles/globals.css'
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
     <Script src='bootstrap/dist/js/bootstrap.min.js'/>
     <Script src='@popperjs/core/dist/cjs/popper/js'/>
  </>
  )
}

export default MyApp
