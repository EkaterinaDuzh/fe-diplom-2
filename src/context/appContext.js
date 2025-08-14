import { createContext } from "react";
import { initialAppState } from "./utils/initialAppState";

const appContext = createContext(initialAppState);

export default appContext;