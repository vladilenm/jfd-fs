import React from "react";

import Comment from "./comment";
import PropTypes from "prop-types";
const CommentsList = ({ comments, onRemove }) => {
    return comments.map((comment) => (
        <Comment key={comment._id} {...comment} onRemove={onRemove} />
    ));
};
CommentsList.propTypes = {
    comment: PropTypes.array,
    onRemove: PropTypes.func
};

export default CommentsList;
