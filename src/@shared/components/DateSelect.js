import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

/**
 * DateSelect
 * @documentation https://www.npmjs.com/package/react-datepicker
 */
class DateSelect extends React.Component {
    state = {
        startDate: moment()
    };

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
        this.props.onChange(date);
    };

    render() {
        const { state: { startDate } } = this;
        return (
            <div style={{ width: "250px" }}>
                <DatePicker
                    selected={startDate}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default DateSelect;
