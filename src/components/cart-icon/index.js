import { FaShoppingCart } from "react-icons/fa"

export default ({ cartCount = 0 }) => {
  return (
    <div id="cart">
      <FaShoppingCart />
      {cartCount > 0 && <span>{cartCount}</span>}
    </div>
  )
}
