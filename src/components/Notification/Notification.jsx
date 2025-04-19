import React from 'react';
import PropTypes from 'prop-types';
/* import './Notification.css'; */

function Notification({ type, message }) {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
  message: PropTypes.string.isRequired
};

export default Notification;