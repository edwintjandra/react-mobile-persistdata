import { useEffect, useState } from 'react';
import { IProduct } from './IProduct';

export const productState = () => {
  const [myProducts, setProducts] = useState<IProduct[]>([]);

  const addProduct = (newProduct: IProduct): void => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const removeProduct = (productId: number): void => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
  };

  return {
    myProducts,
    addProduct,
    removeProduct
  };
};


export const coinState = () => {
    const [myCoins, setMyCoins] = useState<number>(500);
  
    const reduceCoins = (amount: number): void => {
      const newCoinsValue = myCoins - amount;
      const updatedCoins = Math.max(0, newCoinsValue);
      setMyCoins(updatedCoins);
    };
  
    const addCoins = (amount: number): void => {
      const updatedCoins = myCoins + amount;
      setMyCoins(updatedCoins);
    };

    const setInitialCoins= ()=>{
        setMyCoins(500);
        console.log("test");
        console.log(myCoins);
    }

    useEffect(() => {
    setInitialCoins();
    }, []);
  
    return {
      myCoins,
      reduceCoins,
      addCoins,
      setInitialCoins
    };
  };