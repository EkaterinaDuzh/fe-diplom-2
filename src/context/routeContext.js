import { createContext } from "react";
import { initialRouteState } from "../utils/initialRouteState.js";

const RouteContext = createContext(initialRouteState);

export default RouteContext;