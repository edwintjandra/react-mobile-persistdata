import { coinState, productState } from "./SharedState";

export interface IDefaultProps {
    productState: ReturnType<typeof productState>;
    coinState: ReturnType<typeof coinState>;
  }