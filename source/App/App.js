import React, { PureComponent } from 'react';

import Radio from '../Radio/Radio';
import styles from './_App.scss';

export default class App extends PureComponent {
  //
  //  Sample onChange callback
  //
  onChange = (value) => {
    // Do something with the new selected value
    console.log('Updating value in store: ' + value);
  }

  render () {
    return (
      <React.Fragment>
        <h1>Radio</h1>

        <p className={styles.section + ' ' + styles.bio}>
          <Radio name='alignment' label='Left' value='left' checked='left' action={() => {}} />
          <Radio name='alignment' label='Right' value='right' checked='right' action={() => {}} />
        </p>

      </React.Fragment>
    );
  }
}
