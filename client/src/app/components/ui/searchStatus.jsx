import React from "react";
import PropTypes from "prop-types";
const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return "человек тусанет";
        }
        if (lastOne === 1) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        return "человек тусанет";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}   с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
