import React from "react";
import PropTypes from "prop-types";
const Quality = ({ _id, color, name }) => {
    return (
        <span className={"badge m-1 bg-" + color} key={_id}>
            {name}
        </span>
    );
    // return "something";
};
Quality.propTypes = {
    _id: PropTypes.string.isRequired,
    color: PropTypes.string,
    name: PropTypes.string
};

export default Quality;
