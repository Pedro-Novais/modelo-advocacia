import { useState } from 'react'

import Header from './containers/header/Header'
import Main from './containers/main/Main'
import Footer from './containers/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
