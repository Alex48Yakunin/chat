import React from "react";
import PropTypes from "prop-types";

export default function Typing({ from, message }) {
  return (
    <div>
      <div className="message-data">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name"><i class="fa fa-circle online"></i>{from.name}</span>
      </div>
      <div className="message">
          {message.text ? message.text : 'печатает...'}
        </div>
    </div>
  );
}

Typing.propTypes = {
  from: PropTypes.object,
  message: PropTypes.object,
};
Typing.defaultProps = {
  from: {},
  message: {},
};