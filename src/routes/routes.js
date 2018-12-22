// Routes
import homeRoutes from "./home/routes";
import aboutRoutes from "./about/routes";

// Modules
import { concat } from "lodash";

export const routes = concat(homeRoutes, aboutRoutes);
