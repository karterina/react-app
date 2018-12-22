// Modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Store
import { store } from "./services/store.js";

// Routes
import { routes } from "./routes/routes";

// Components
import Framework from "./core/Framework";


const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {routes.map(({ path, component }, index) => (
                    <Route
                        exact
                        key={index}
                        component={Framework(component)}
                        path={path}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default App;
