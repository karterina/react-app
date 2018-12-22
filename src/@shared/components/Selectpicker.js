import React from "react";
import Select from "react-select";

/**
 * Selectpicker
 * @documentation https://github.com/JedWatson/react-select
 */
class Selectpicker extends React.Component {
    state = {
        selectedOption: null
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        this.props.onChange(selectedOption);
    };
    render() {
        const { selectedOption } = this.state;
        const { options } = this.props;

        return (
            <div style={{ width: "250px" }}>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        );
    }
}

export default Selectpicker;
