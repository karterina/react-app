// Modules
import { connect } from "react-redux";

// Components
import About from "../components/About";

const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    };
};

export default connect(
    mapStateToProps,
    {}
)(About);
