import {useState} from 'react';
import {useContext} from 'react';
import ProductContext from '../context/ProductContext';

import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

function Product() {
  const ctx = useContext(ProductContext);
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const handlerAddProduct = () => {
    const newItem = {
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: ctx.count * ctx.price * (100-ctx.discount)/100,
    }  
    const newList = [...list, newItem];
    setList(newList);
    const sum = sumTotal + newItem.total;
    setSumTotal(sum);
  }

  return (
    <div className={styles.container}>
      <Card handlerAddProduct={handlerAddProduct}/>
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
