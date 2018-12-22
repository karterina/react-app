// Modules
import React from "react";

/**
 * Our Presentational, Stateless Component that just renders data for us
 * @param props
 * @returns {void | *}
 * @constructor
 */
const Home = (props) => {

    const {dispatchAction, statusApi} = props;
    
    return (
        <div onClick={dispatchAction}>
            <p>Click here to call API</p>
            <p>
                The status of the API request:{" "}
                <span className={statusApi}> {statusApi}</span>
            </p>
        </div>
    );
}
export default Home;
