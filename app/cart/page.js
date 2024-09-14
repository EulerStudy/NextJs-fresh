export default function Cart() {
  let cart = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      {
        cart.map((item, i)=>{
          return (
            <CartItem item={item} key={i}></CartItem>
          )
        })
      }
    </div>
  )
}

function CartItem(props) {
  return (
    <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
  )
}