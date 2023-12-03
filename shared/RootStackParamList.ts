import { IProduct } from "./IProduct";


export type RootStackParamList = {
    Home: {
      addProduct: (newProduct: IProduct) => void;
      myProducts: IProduct[];
    };
    Detail: {
      id: number;
      addProduct: (newProduct: IProduct) => void;
      ownProduct?:boolean
     };
    MyProduct: {
      myProducts: IProduct[];
    };
  };