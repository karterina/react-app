// Modules
import React from "react";

// Components
import Navigation from "./navigation/Navigation";

/**
 * Framework is a Higher-order Component that is wrapped around page components.
 * @param WrappedComponent
 * @returns {function(*): *}
 * @constructor
 */
const Framework = WrappedComponent => props => (
    <div className="frame">
        <Navigation />
        <div className="framework-content">
            <WrappedComponent {...props} />
        </div>
    </div>
);

export default Framework;
