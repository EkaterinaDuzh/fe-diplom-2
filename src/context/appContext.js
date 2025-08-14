import { createContext } from "react";
import { initialAppState } from "../utils/initialAppState.js";

const AppContext = createContext(initialAppState);

export default AppContext;