import { createContext } from "react";
import { initialOrderState } from "./utils/initialOrderState";

const orderContext = createContext(initialOrderState);

export default orderContext;