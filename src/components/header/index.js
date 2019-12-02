import Link from "next/link"
import CartIcon from "components/cart-icon"
import { FaBars } from "react-icons/fa"

import { MDBHamburgerToggler } from "mdbreact"
import Column from "antd/lib/table/Column"

export default ({ cartCount, onToggleNav }) => {
  return (
    <header>
      <Link href="/">
        <a>Store Name</a>
      </Link>
      <div
        id="right"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        <MDBHamburgerToggler
          color="#d3531a"
          id="hamburger1"
          onClick={onToggleNav}
        />
        <CartIcon cartCount={cartCount} id="cartIcon" />
      </div>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 1rem;
        }
        #right {
          align-items: center;
          display: flex;
        }
      `}</style>
    </header>
  )
}
