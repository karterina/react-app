// Modules
import React, { Component } from "react";
import Selectpicker from "../../../@shared/components/Selectpicker";
import DateSelect from "../../../@shared/components/DateSelect";

/**
 * Our Presentational, Stateless Component that just renders data for us
 * @param props
 * @returns {void | *}
 * @constructor
 */
class About extends Component {
    render() {
        return (
            <div style={{ padding: "15px" }}>
                <h1>Components</h1>

                <div>
                    <h2>Selectpicker</h2>
                    <div>
                        <Selectpicker
                            options={[
                                { value: "chocolate", label: "Chocolate" },
                                { value: "strawberry", label: "Strawberry" },
                                { value: "vanilla", label: "Vanilla" }
                            ]}
                            onChange={value => console.log("value --> ", value)}
                        />
                    </div>
                </div>

                <div>
                    <h2>DateSelect</h2>
                    <div>
                        <DateSelect
                            onChange={value => console.log("value --> ", value)}
                        />
                    </div>
                </div>

                <div>
                    <h2>InputField</h2>
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
