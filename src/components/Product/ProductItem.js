
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { wishlistActions } from '../../store/wishlistSlice';
import { cartActions } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';



const ProductItem = (props) => {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const { title, price, image,description} = props;
  const data={
    title,
    image,
    price,
    description
  }

  function handleAddToWishlist(){
    
    dispatch(wishlistActions.addtoWishlist(data))

  }
  function handleAddToCart(){
    dispatch(cartActions.addToCart(data))
  }
  function handleProductItem(){
    navigate(`/product/${title}`, {state:{product:data}})
  }
  return (
    <ul className={classes.productsGrid}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div className={classes.imageContainer}>
            <img src={image} alt={title} className={classes.image} onClick={handleProductItem} />
        </div>
        <div className={classes.actions}>
          <button onClick={handleAddToWishlist}>Add to whislist</button>
          <button onClick={handleAddToCart} >Add to Cart</button>
        </div>
      </Card>
    </ul>
  );
};

export default ProductItem;
