import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={s.message}>{message}</p>
    </div>
  );
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};

export default Notification;
