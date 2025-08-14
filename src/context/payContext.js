import { createContext } from "react";
import { initialPayState } from "../utils/initialPayState.js";

const PayContext = createContext(initialPayState);

export default PayContext;