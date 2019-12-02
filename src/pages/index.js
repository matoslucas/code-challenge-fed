import { Fragment, useState } from "react"
import Header from "components/header"
import Nav from "components/nav"

import AddToCartAnimation from "components/add-to-cart-animation"


export default () => {
  const [cartCount, setCartCount] = useState(0)

  const [navOpen, setNavOpen] = useState(false)

  const [moment, setMoment] = useState(null)

  const [pause, setPause] = useState(true)

  const addToCart = () => {
    setPause((o) => false)
    
    setMoment((s) => null)

    setCartCount((c) => c + 1)
  }

  const handleNav = () => {
    setNavOpen((o) => !o)
  }

  const onComplete = () => {
    // console.log('complete')

    setPause((o) => true)
    setMoment((s) => 0)
  }

  return (
    <div id="wrapper">
      <Header cartCount={cartCount} onToggleNav={handleNav} />
      <Nav isOpen={navOpen} />
      <div id="card">
        <h1>Product Name</h1>

        <AddToCartAnimation moment={moment} pause={pause} complete={onComplete}>
          <img
            width="150"
            style={{
              border: "#333 solid 1px",
              borderRadius: 5,
            }}
            src={
              "https://images-na.ssl-images-amazon.com/images/I/81YNIGDPx7L._SX425_.jpg"
            }
          />
        </AddToCartAnimation>
        <p>This is the product description</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      <style jsx>{`
        #wrapper {
          margin: 0 auto;
          max-width: 960px;
        }
        #card {
          background: #fff;
          box-shadow: 0 1px 3px #999;
          padding: 1rem;
        }
      `}</style>
    </div>
  )
}
