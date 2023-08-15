import {BsPaintBucket} from 'react-icons/bs'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

import {
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  CountBtn,
  Quantity,
  Price,
} from './styledComponent'

const CartItem = props => {
  const {item, decreaseQuantity, increaseQuantity} = props

  const onMius = () => decreaseQuantity(item.id)
  const onPlus = () => increaseQuantity(item.id)

  return (
    <li>
      <ProductContainer>
        <div className="d-flex ">
          <ProductImageContainer>
            <ProductImage alt="product" src={item.imageUrl} />
          </ProductImageContainer>
          <div className="d-flex flex-column justify-content-between">
            <div style={{textAlign: 'left'}}>
              <p>{item.name}</p>
              <div className="d-flex">
                <BsPaintBucket className="mt-1" />
                <p>Black | 2XL</p>
              </div>
            </div>
            <div className="d-flex">
              <CountBtn onClick={onMius}>
                <AiOutlineMinus />
              </CountBtn>
              <Quantity>{item.quantity}</Quantity>
              <CountBtn onClick={onPlus}>
                <AiOutlinePlus />
              </CountBtn>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <Price>${item.totalPrice}</Price>
          <p style={{color: '#438ac4'}}>Remove</p>
        </div>
      </ProductContainer>
      <hr />
    </li>
  )
}
export default CartItem
