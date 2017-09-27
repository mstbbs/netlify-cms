import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from '../index';
import { prefixer } from '../../../lib/styleHelper';

const styles = prefixer('toast');
const themeStyles = prefixer('theme');
const themeClasses = `${ themeStyles.base } ${ themeStyles.container } ${ themeStyles.rounded } ${ themeStyles.depth }`;
// import styles from './Toast.css';

const icons = {
  info: 'info',
  success: 'check',
  warning: 'attention',
  danger: 'alert',
};

export default function Toast({ kind, message }) {
  return (
    <div className={`${ themeClasses } ${ styles.root } ${ styles[kind] }`}>
      <Icon type={icons[kind]} className={styles.icon} />
      {message}
    </div>
  );
}

Toast.propTypes = {
  kind: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
  message: PropTypes.string,
};
