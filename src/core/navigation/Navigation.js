// Modules
import React from "react";
import { NavLink } from "react-router-dom";

// Menu
import { menu } from "./menu";

const Navigation = props => (
    <div className="framework-navigation">
        {menu.map(({ url, label }, index) => (
            <NavLink key={index} to={url}>
                <button>{label}</button>
            </NavLink>
        ))}
    </div>
);

export default Navigation;
