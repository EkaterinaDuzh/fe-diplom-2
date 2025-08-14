import { createContext } from "react";
import { initialRouteState } from "./utils/initialRouteState";

const routeContext = createContext(initialRouteState);

export default routeContext;