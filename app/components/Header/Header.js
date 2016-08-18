import React, {
  Component
} from 'react';
import style from './styles.css';
import Button from '../Button/Button.js';

class Header extends Component {
  render() {
    return (
      <div className={style.fullscreen}>
        Header
      </div>
    );
  }
};

export default Header;