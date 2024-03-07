import PropTypes from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';
export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button style={{ fontSize: '60px' }} disabled={disabled} onClick={onButtonClick}>
      {' '}
      {children}{' '}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
