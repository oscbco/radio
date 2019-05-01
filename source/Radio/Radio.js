import React, { PureComponent } from 'react';
import styles from './_Radio.scss';

export default class Radio extends PureComponent {
  action = () => {
    this.props.action(this.props.value);
  };

  render () {
    let { name, value, label, checked } = this.props;

    if (label === undefined) {
      label = value[0].toUpperCase() + value.substring(1);
    }

    return (
      <label className={styles.container}>
        {label}
        <input type='radio' name={name} value={value} defaultChecked={value === checked.toLowerCase()} onClick={this.action} />
        <span className={styles.checkmark} />
      </label>
    );
  }
}
