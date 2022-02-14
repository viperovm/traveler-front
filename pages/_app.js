import '../styles/globals.css'
import '../styles/styles.css'
import '../styles/TextEditor.css'

import React from 'react'
import { wrapper } from '../redux/store'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

export default wrapper.withRedux(MyApp)

