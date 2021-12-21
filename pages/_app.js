import SSRProvider from 'react-bootstrap/SSRProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}

export default MyApp
