import React, { PureComponent } from 'react';

import Nav from './Nav';

class Settings extends PureComponent {
  render() {
    return (
      <div>
        <Nav />
        <h1>Settings</h1>
        <ul>
          <li>Settings</li>
          <li>That</li>
          <li>Aren't</li>
          <li>Really</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}

export default Settings;
