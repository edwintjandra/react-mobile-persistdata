import { IProduct } from "./IProduct";
import { coinState, productState } from "./SharedState";


export type RootStackParamList = {
  Home: {
    productState: ReturnType<typeof productState>;
    coinState: ReturnType<typeof coinState>;
  };
  Detail: {
    id: number;
    ownProduct?: boolean;
    productState: ReturnType<typeof productState>;
    coinState: ReturnType<typeof coinState>;
  };
  MyProduct: {
    productState: ReturnType<typeof productState>;
    coinState: ReturnType<typeof coinState>;
  };
  };