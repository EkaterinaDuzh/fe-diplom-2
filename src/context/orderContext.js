import { createContext } from "react";
import { initialOrderState } from "../utils/initialOrderState.js";

const OrderContext = createContext(initialOrderState);

export default OrderContext;